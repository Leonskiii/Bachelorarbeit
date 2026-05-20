import { do_random_array_sort } from "../../../../N_of_1_Experiments/modules/Experimentation/Experimentation.js";
import { Nouns } from "../../../../N_of_1_Experiments/modules/Words/Nouns.js";
export class Term {
    print_string(indentation_size, max_depth) {
        let arr = [];
        this.print_into(arr, 0, indentation_size, max_depth);
        return arr.join("");
    }
    print_string_with_extra_lines(indentation_size, body_lines) {
        let arr = [];
        this.print_into_with_extra_lines(arr, 0, indentation_size, body_lines);
        return arr.join("");
    }
}
export class Return extends Term {
    constructor(return_value) { super(); this.return_value = return_value; }
    print_into(array, indentation_depth, indentation_length, body_lines) {
        array.push(" " + this.return_value + "\n");
    }
    print_into_with_extra_lines(array, indentation_depth, indentation_size, body_lines) {
        array.push(" " + this.return_value + "\n");
    }
}
export class Nested_Ifs extends Term {
    constructor() {
        super(...arguments);
        this.body_nouns = [];
    }
    print_into(array, indentation_depth, indentation_length, max_depth) {
        // Gespiegelt: je tiefer, desto weniger Einrückung
        const mirrored_depth = max_depth - indentation_depth;
        array.push(" ".repeat(indentation_length * mirrored_depth) + "if(" + this.condition_string + ") {\n");
        if (this.then_branch instanceof Return) {
            // kein Kommentar
        }
        else {
            this.then_branch.print_into(array, indentation_depth + 1, indentation_length, max_depth);
        }
        array.push(" ".repeat(indentation_length * mirrored_depth) + "}");
        this.else_branch.print_into(array, indentation_depth + 1, indentation_length, max_depth);
    }
    print_into_with_extra_lines(array, indentation_depth, indentation_length, body_lines) {
        var _a;
        array.push(" ".repeat(indentation_length * indentation_depth) + "if(" + this.condition_string + ") {\n");
        for (let i = 0; i < body_lines; i++) {
            array.push(" ".repeat(indentation_length * (indentation_depth + 1)) + ((_a = this.body_nouns[i]) !== null && _a !== void 0 ? _a : "") + "\n");
        }
        if (this.then_branch instanceof Return) {
            // kein Kommentar
        }
        else {
            this.then_branch.print_into_with_extra_lines(array, indentation_depth + 1, indentation_length, body_lines);
        }
        array.push(" ".repeat(indentation_length * indentation_depth) + "}");
        this.else_branch.print_into_with_extra_lines(array, indentation_depth + 1, indentation_length, body_lines);
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
}
const MAX_BODY_LINES = 4;
export function generate_If_Statement(indentation_depth, nesting_depth) {
    const nouns = new Nouns();
    let returns = [];
    let conditions = [];
    for (let i = 1; i <= nesting_depth; i++) {
        returns.push(i);
        conditions.push(String.fromCharCode("a".charCodeAt(0) + i - 1));
    }
    returns.push(nesting_depth + 1);
    returns = do_random_array_sort(returns);
    conditions = do_random_array_sort(conditions);
    function make_if() {
        let nif = new Nested_Ifs();
        nif.body_nouns = Array.from({ length: MAX_BODY_LINES }, () => nouns.get_random_word());
        return nif;
    }
    let deepest_if = make_if();
    deepest_if.condition_string = conditions.pop();
    deepest_if.then_branch = new Return(0);
    deepest_if.else_branch = new Return(returns.pop());
    let then_if = deepest_if;
    for (let counter = 1; counter < nesting_depth; counter++) {
        let new_if = make_if();
        new_if.condition_string = conditions.pop();
        new_if.then_branch = then_if;
        new_if.else_branch = new Return(returns.pop());
        then_if = new_if;
    }
    return then_if;
}
//# sourceMappingURL=Generate_Code.js.map