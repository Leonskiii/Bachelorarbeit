import { do_random_array_sort } from "../../../../N_of_1_Experiments/modules/Experimentation/Experimentation.js";
import { Nouns } from "../../../../N_of_1_Experiments/modules/Words/Nouns.js";
const nouns_instance = new Nouns();
const used_nouns = new Set();
function random_noun() {
    let word = nouns_instance.get_random_word();
    let attempts = 0;
    while (used_nouns.has(word) && attempts < 100) {
        word = nouns_instance.get_random_word();
        attempts++;
    }
    used_nouns.add(word);
    return word;
}
const code_templates = [
    (w) => `const result = processData(${w}, config);`,
    (w) => `let buffer = allocate(${w}, maxSize);`,
    (w) => `db.update(${w}, { key: sessionId });`,
    (w) => `return transform(${w}, input, context);`,
    (w) => `cache.set(${w}, payload);`,
    (w) => `logger.warn(${w}, message, stack);`,
    (w) => `queue.push(${w}, priority, payload);`,
    (w) => `render(${w}, component, props);`,
    (w) => `const ${w} = stream.write(buffer, offset);`,
    (w) => `resolver.bind(context, ${w}, handler);`,
    (w) => `let result = compute(maxSize, ${w}, offset);`,
    (w) => `db.query(table, ${w}, sessionId);`,
    (w) => `return validate(context, input, ${w});`,
    (w) => `stream.pipe(${w}, buffer);`,
    (w) => `scheduler.run(priority, ${w}, handler);`,
];
function random_template(word) {
    return code_templates[Math.floor(Math.random() * code_templates.length)](word);
}
export class Term {
    print_string(indentation_size) {
        let arr = [];
        this.print_into(arr, 0, indentation_size);
        return arr.join("");
    }
    print_string_with_extra_lines(indentation_size) {
        let arr = [];
        this.print_into_with_extra_lines(arr, 0, indentation_size);
        return arr.join("");
    }
}
export class Return extends Term {
    constructor(return_value) { super(); this.return_value = return_value; }
    print_into(array, indentation_depth, indentation_length) {
        array.push(" " + this.return_value + "\n");
    }
    print_into_with_extra_lines(array, indentation_depth, indentation_size) {
        array.push(" " + this.return_value + "\n");
    }
}
export class Nested_Ifs extends Term {
    constructor() {
        super(...arguments);
        this.body_statement = "";
        this.body_target_word = "";
    }
    print_into(array, indentation_depth, indentation_length) {
        array.push(" ".repeat(indentation_length * indentation_depth) + "if(" + this.condition_string + ") {\n");
        array.push(" ".repeat(indentation_length * (indentation_depth + 1)) + this.body_statement + "\n");
        if (this.then_branch instanceof Return) {
            array.push(" ".repeat(indentation_length * indentation_depth + indentation_length) + "//" + this.then_branch.return_value + "\n");
        }
        else {
            this.then_branch.print_into(array, indentation_depth + 1, indentation_length);
        }
        array.push(" ".repeat(indentation_length * indentation_depth) + "}");
        this.else_branch.print_into(array, indentation_depth + 1, indentation_length);
    }
    print_into_with_extra_lines(array, indentation_depth, indentation_length) {
        array.push(" ".repeat(indentation_length * indentation_depth) + "if(" + this.condition_string + ") {\n");
        array.push(" ".repeat(indentation_length * (indentation_depth + 1)) + this.body_statement + "\n");
        if (this.then_branch instanceof Return) {
            array.push(" ".repeat(indentation_length * indentation_depth + indentation_length) + "//" + this.then_branch.return_value + "\n");
        }
        else {
            this.then_branch.print_into_with_extra_lines(array, indentation_depth + 1, indentation_length);
        }
        array.push(" ".repeat(indentation_length * indentation_depth) + "}");
        this.else_branch.print_into_with_extra_lines(array, indentation_depth + 1, indentation_length);
    }
    target_condition_string(target_number) {
        if (target_number == 1)
            return this.condition_string;
        if (this.then_branch instanceof Return)
            throw "ASDASD";
        return this.then_branch.target_condition_string(target_number - 1);
    }
    return_string(target_number) {
        if (target_number == 1)
            return this.else_branch.return_value.toString();
        return this.then_branch.return_string(target_number - 1);
    }
    body_target_word_at(target_number) {
        if (target_number == 1)
            return this.body_target_word;
        return this.then_branch.body_target_word_at(target_number - 1);
    }
}
export function generate_If_Statement(indentation_depth, nesting_depth) {
    used_nouns.clear();
    let returns = [];
    let conditions = [];
    for (let i = 1; i <= nesting_depth; i++) {
        returns.push(i);
        conditions.push(String.fromCharCode("a".charCodeAt(0) + i - 1));
    }
    returns.push(nesting_depth + 1);
    returns = do_random_array_sort(returns);
    conditions = do_random_array_sort(conditions);
    let deepest_if = new Nested_Ifs();
    deepest_if.condition_string = conditions.pop();
    deepest_if.then_branch = new Return(0);
    deepest_if.else_branch = new Return(returns.pop());
    let w = random_noun();
    deepest_if.body_target_word = w;
    deepest_if.body_statement = random_template(w);
    let then_if = deepest_if;
    for (let counter = 1; counter < nesting_depth; counter++) {
        let new_if = new Nested_Ifs();
        new_if.condition_string = conditions.pop();
        new_if.then_branch = then_if;
        new_if.else_branch = new Return(returns.pop());
        let nw = random_noun();
        new_if.body_target_word = nw;
        new_if.body_statement = random_template(nw);
        then_if = new_if;
    }
    return then_if;
}
//# sourceMappingURL=Generate_Code.js.map