import { do_random_array_sort } from "../../../N_of_1_Experiments/modules/Experimentation/Experimentation.js";
import { Nouns } from "../../../N_of_1_Experiments/modules/Words/Nouns.js";
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
    constructor(return_value) {
        super();
        this.return_value = return_value;
    }
    print_into(array, indentation_depth, indentation_length) {
        array.push(" " + this.return_value + "\n");
    }
    print_into_with_extra_lines(array, indentation_depth, indentation_size) {
        array.push(" " + this.return_value + "\n");
    }
}
export class Nested_Ifs extends Term {
    print_into(array, indentation_depth, indentation_length) {
        array.push(" ".repeat(indentation_length * indentation_depth) +
            "if(" + this.condition_string + ") {\n");
        if (!(this.then_branch instanceof Return)) {
            this.then_branch.print_into(array, indentation_depth + 1, indentation_length);
        }
        array.push(" ".repeat(indentation_length * indentation_depth) + "}");
        this.else_branch.print_into(array, indentation_depth + 1, indentation_length);
    }
    print_into_with_extra_lines(array, indentation_depth, indentation_length) {
        array.push(" ".repeat(indentation_length * indentation_depth) +
            "if(" + this.condition_string + ") {\n");
        if (!(this.then_branch instanceof Return)) {
            this.then_branch.print_into_with_extra_lines(array, indentation_depth + 1, indentation_length);
        }
        array.push(" ".repeat(indentation_length * indentation_depth) + "}");
        this.else_branch.print_into_with_extra_lines(array, indentation_depth + 1, indentation_length);
    }
    target_condition_string(target_number) {
        if (target_number == 1)
            return this.condition_string;
        if (this.then_branch instanceof Return)
            throw "Invalid target number";
        return this.then_branch.target_condition_string(target_number - 1);
    }
    target_word(target_number, position) {
        const condition = this.target_condition_string(target_number);
        const words = condition.split(" && ");
        return position == "First" ? words[0] : words[words.length - 1];
    }
    return_string(target_number) {
        if (target_number == 1)
            return this.else_branch.return_value.toString();
        return this.then_branch.return_string(target_number - 1);
    }
}
export function generate_If_Statement(indentation_depth, nesting_depth, indentation_length, layout, target_level = 1) {
    used_nouns.clear();
    let returns = [];
    for (let i = 1; i <= nesting_depth; i++)
        returns.push(i);
    returns.push(nesting_depth + 1);
    returns = do_random_array_sort(returns);
    function make_condition_of_char_length(target_chars) {
        let terms = [];
        let total = 0;
        while (total < target_chars) {
            const word = random_noun();
            terms.push(word);
            total += word.length + (terms.length > 1 ? 4 : 0);
        }
        return terms.join(" && ");
    }
    function make_symmetric_condition() {
        return make_condition_of_char_length(50);
    }
    // Für Asymmetric: erst die markierte Condition bauen, dann Nachbarn darauf aufbauen.
    // "Endspalte" einer Zeile = Einrückung + "if(" (3 Zeichen) + Condition-Länge
    const marked_depth = target_level - 1; // 0-basiert
    const marked_condition = make_condition_of_char_length(70);
    const marked_end_column = marked_depth * indentation_length + 3 + marked_condition.length;
    function make_asymmetric_condition(depth) {
        const distance = Math.abs(depth - marked_depth);
        if (distance === 0) {
            return marked_condition;
        }
        if (distance <= 3) {
            const neighbor_indent = depth * indentation_length + 3;
            const neighbor_target_end = marked_end_column + 1 + Math.floor(Math.random() * 4);
            const neighbor_target_chars = Math.max(10, neighbor_target_end - neighbor_indent);
            return make_condition_of_char_length(neighbor_target_chars);
        }
        // Alle anderen: normale Länge
        return make_condition_of_char_length(70);
    }
    function make_condition(depth) {
        if (layout == "Symmetric")
            return make_symmetric_condition();
        return make_asymmetric_condition(depth);
    }
    let deepest_if = new Nested_Ifs();
    deepest_if.condition_string = make_condition(nesting_depth - 1);
    deepest_if.then_branch = new Return(0);
    deepest_if.else_branch = new Return(returns.pop());
    let then_if = deepest_if;
    for (let counter = 1; counter < nesting_depth; counter++) {
        let new_if = new Nested_Ifs();
        new_if.condition_string = make_condition(nesting_depth - 1 - counter);
        new_if.then_branch = then_if;
        new_if.else_branch = new Return(returns.pop());
        then_if = new_if;
    }
    return then_if;
}
//# sourceMappingURL=Generate_Code.js.map