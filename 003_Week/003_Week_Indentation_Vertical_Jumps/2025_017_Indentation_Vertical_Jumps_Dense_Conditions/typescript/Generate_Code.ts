import {do_random_array_sort} from "../../../../N_of_1_Experiments/modules/Experimentation/Experimentation.js";
import {Nouns} from "../../../../N_of_1_Experiments/modules/Words/Nouns.js";

const nouns_instance = new Nouns();
const used_nouns = new Set<string>();

function random_noun(): string {
    let word = nouns_instance.get_random_word();
    let attempts = 0;
    while (used_nouns.has(word) && attempts < 100) { word = nouns_instance.get_random_word(); attempts++; }
    used_nouns.add(word);
    return word;
}

const condition_prefixes = [
    "getUserDataFromSession &&",
    "validateToken && checkPermissions &&",
    "loadConfiguration && initializeDatabase &&",
    "parseRequest && verifySignature &&",
    "fetchUserProfile && checkSessionTimeout &&",
    "validateInput && sanitizeData &&",
    "checkRateLimit && authenticateUser &&",
    "resolvePermissions && loadUserSettings &&",
    "initializeCache && verifyConnection &&",
    "parseHeaders && validateRequest &&",
];

function random_prefix(): string {
    return condition_prefixes[Math.floor(Math.random() * condition_prefixes.length)];
}

export abstract class Term {
    abstract print_into(array: string[], indentation_depth: number, indentation_size: number);
    abstract print_into_with_extra_lines(array: string[], indentation_depth: number, indentation_size: number);

    print_string(indentation_size: number) {
        let arr = [];
        this.print_into(arr, 0, indentation_size);
        return arr.join("");
    }

    print_string_with_extra_lines(indentation_size: number) {
        let arr = [];
        this.print_into_with_extra_lines(arr, 0, indentation_size);
        return arr.join("");
    }
}

export class Return extends Term {
    return_value: number;
    constructor(return_value: number) { super(); this.return_value = return_value; }
    print_into(array: string[], indentation_depth: number, indentation_length: number) {
        array.push(" " + this.return_value + "\n");
    }
    print_into_with_extra_lines(array: string[], indentation_depth: number, indentation_size: number) {
        array.push(" " + this.return_value + "\n");
    }
}

export class Nested_Ifs extends Term {
    condition_string: string;
    then_branch: Term;
    else_branch: Term;

    print_into(array: string[], indentation_depth: number, indentation_length: number) {
        array.push(" ".repeat(indentation_length * indentation_depth) + "if(" + this.condition_string + ") {\n");
        if (this.then_branch instanceof Return) {
            // kein Kommentar
        } else {
            this.then_branch.print_into(array, indentation_depth + 1, indentation_length);
        }
        array.push(" ".repeat(indentation_length * indentation_depth) + "}");
        this.else_branch.print_into(array, indentation_depth + 1, indentation_length);
    }

    print_into_with_extra_lines(array: string[], indentation_depth: number, indentation_length: number) {
        array.push(" ".repeat(indentation_length * indentation_depth) + "if(" + this.condition_string + ") {\n");
        if (this.then_branch instanceof Return) {
            // kein Kommentar
        } else {
            this.then_branch.print_into_with_extra_lines(array, indentation_depth + 1, indentation_length);
        }
        array.push(" ".repeat(indentation_length * indentation_depth) + "}");
        this.else_branch.print_into_with_extra_lines(array, indentation_depth + 1, indentation_length);
    }

    target_condition_string(target_number: number): string {
        if (target_number == 1) return this.condition_string;
        if (this.then_branch instanceof Return) throw "ASDASD";
        return (this.then_branch as Nested_Ifs).target_condition_string(target_number - 1);
    }

    // gibt nur das letzte Wort (das Substantiv) zurück
    target_noun(target_number: number): string {
        const full = this.target_condition_string(target_number);
        const parts = full.split(" ");
        return parts[parts.length - 1];
    }

    return_string(target_number: number): string {
        if (target_number == 1) return (this.else_branch as Return).return_value.toString();
        return (this.then_branch as Nested_Ifs).return_string(target_number - 1);
    }
}

export function generate_If_Statement(indentation_depth, nesting_depth, indentation_length): Nested_Ifs {
    used_nouns.clear();
    let returns = [];
    for (let i = 1; i <= nesting_depth; i++) returns.push(i);
    returns.push(nesting_depth + 1);
    returns = do_random_array_sort(returns);

    function make_condition(depth: number): string {
        const indent_cost = depth * indentation_length;
        const avg_word_length = indentation_length * 1.5; // skaliert mit indentation_length
        const terms_to_remove = Math.floor(indent_cost / avg_word_length);
        const num_terms = Math.max(1, nesting_depth - terms_to_remove);
        let terms = [];
        for (let i = 0; i < num_terms; i++) terms.push(random_noun());
        return terms.join(" && ");
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