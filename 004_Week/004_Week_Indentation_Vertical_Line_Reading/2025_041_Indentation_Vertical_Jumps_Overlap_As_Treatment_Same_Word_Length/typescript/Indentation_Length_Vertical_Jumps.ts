import {BROWSER_EXPERIMENT} from "../../../../N_of_1_Experiments/modules/Experimentation/Browser_Output_Writer.js";
import {
    Experiment_Output_Writer, keys, Reaction_Time,
    SET_SEED, Standard_Post_Questionnaire
} from "../../../../N_of_1_Experiments/modules/Experimentation/Experimentation.js";
import {Task} from "../../../../N_of_1_Experiments/modules/Experimentation/Task.js";
import {generate_If_Statement, Nested_Ifs, Term} from "./Generate_Code.js";
import {convert_string_to_html_string} from "../../../../N_of_1_Experiments/modules/utils/Utils.js";
import {
    finish_pages, intro_pages,
    pre_run_experiment_instructions, pre_run_training_instructions
} from "./Indentation_Length_Vertical_Jumps_Text.js";
import {Nouns} from "../../../../N_of_1_Experiments/modules/Words/Nouns.js";

let SEED = "42";
SET_SEED(SEED);

function random_int(min: number, max: number): number {
    return Math.floor(min + Math.random() * (max - min + 1));
}

function random_in_range(min: number, max: number): number {
    return min + Math.random() * (max - min);
}

function get_word_of_total_length(nouns: Nouns, target_length: number): string {
    if (target_length <= 0)  return "";
    if (target_length <= 14) return nouns.get_word_of_length(target_length);
    let result = "";
    while (result.length < target_length) {
        const remaining = target_length - result.length;
        result += nouns.get_word_of_length(Math.min(remaining, 14));
    }
    return result.slice(0, target_length);
}

// Alle Conditions auf ~target_length setzen, jedes Wort mit einzigartigem Anfangsbuchstaben
export function set_if_conditions_unique_letters_similar_length(if_statement: Term, target_length: number) {
    const used_letters: string[] = [];
    const nouns = new Nouns();
    while (if_statement instanceof Nested_Ifs) {
        const len  = Math.max(2, target_length + random_int(-2, 2));
        let   word = get_word_of_total_length(nouns, len);
        let   tries = 0;
        while (used_letters.includes(word[0]) && tries < 20) {
            word = get_word_of_total_length(nouns, Math.max(2, target_length + random_int(-2, 2)));
            tries++;
        }
        used_letters.push(word[0]);
        if_statement.condition_string = word;
        if_statement = if_statement.then_branch;
    }
}

function set_condition_at_level(if_stmt: Term, target_level: number, condition: string) {
    let current = if_stmt;
    let lvl = 1;
    while (current instanceof Nested_Ifs) {
        if (lvl === target_level) { current.condition_string = condition; return; }
        current = current.then_branch;
        lvl++;
    }
}

function word_exists_in_if_statement(if_stmt: Term, word: string): boolean {
    let current = if_stmt;
    while (current instanceof Nested_Ifs) {
        if (current.condition_string === word) return true;
        current = current.then_branch;
    }
    return false;
}

function get_overlap(marked_start: number, marked_end: number, other_start: number, other_end: number): number {
    return Math.max(0, Math.min(marked_end, other_end) - Math.max(marked_start, other_start));
}

let experiment_configuration_function = (writer: Experiment_Output_Writer) => { return {

    experiment_name:                 "Indentation_Length_Vertical_Jumps",
    seed:                            SEED,
    introduction_pages:              [writer.string_page_command(intro_pages())],
    pre_run_training_instructions:   writer.string_page_command(pre_run_training_instructions()),
    pre_run_experiment_instructions: writer.string_page_command(pre_run_experiment_instructions()),
    post_questionnaire:              Standard_Post_Questionnaire(),
    training_configuration:          { can_be_cancelled: true, can_be_repeated: true },
    finish_pages:                    [writer.string_page_command(finish_pages())],

    layout: [
        { variable: "Length",               treatments: ["6", "10", "14"] },
        { variable: "Level",                treatments: ["2", "3", "4", "5", "6", "7", "8"] },
        { variable: "Overlap_Target",        treatments: ["1_0-25", "2_26-50", "3_51-75"] },
        { variable: "Distance_from_Center", treatments: ["_computed_"] },
        { variable: "Marked_Word_Length",   treatments: ["_computed_"] },
        { variable: "Overlap_Above",        treatments: ["_computed_"] },
        { variable: "Overlap_Above_Percent", treatments: ["_computed_"] },
        { variable: "Overlap_Below",        treatments: ["_computed_"] },
        { variable: "Overlap_Below_Percent", treatments: ["_computed_"] },
    ],

    repetitions: 15,
    measurement: Reaction_Time(keys(["1"])),

    task_configuration: (t: Task) => {
        const center        = 5;
        const nesting_depth = center * 2 - 1;
        const length        = parseInt(t.treatment_value("Length"));
        const level         = parseInt(t.treatment_value("Level"));
        const overlap_group = t.treatment_value("Overlap_Target");
        const nouns         = new Nouns();

        const [p_min, p_max] =
            overlap_group === "1_0-25"  ? [0.00, 0.25] :
                overlap_group === "2_26-50" ? [0.26, 0.50] :
                    [0.51, 0.75];

        const p        = random_in_range(p_min, p_max);
        const wort_len = Math.max(2, Math.round((length - 3) / (1 - p)));

        const if_statement = generate_If_Statement(length, nesting_depth);

        // Alle Conditions auf ~wort_len setzen – markiertes Wort sticht nicht durch Länge heraus
        set_if_conditions_unique_letters_similar_length(if_statement, wort_len);

        // Nachbarn mit overlap-spezifischer Länge überschreiben
        set_condition_at_level(if_statement, level - 1, get_word_of_total_length(nouns, wort_len + 2));
        set_condition_at_level(if_statement, level + 1, get_word_of_total_length(nouns, wort_len));

        // Markiertes Wort – muss eindeutig sein, also nach den Nachbarn wählen
        let marked_word = get_word_of_total_length(nouns, wort_len);
        while (word_exists_in_if_statement(if_statement, marked_word))
            marked_word = get_word_of_total_length(nouns, wort_len);
        set_condition_at_level(if_statement, level, marked_word);

        const marked_start = (level - 1) * length + 3;
        const marked_end   = marked_start + wort_len;

        const above_len   = if_statement.target_condition_string(level - 1).length;
        const below_len   = if_statement.target_condition_string(level + 1).length;
        const above_start = (level - 2) * length;
        const above_end   = above_start + above_len + 4;
        const below_start = level * length;
        const below_end   = below_start + below_len + 4;

        const overlap_above         = get_overlap(marked_start, marked_end, above_start, above_end);
        const overlap_below         = get_overlap(marked_start, marked_end, below_start, below_end);
        const overlap_above_percent = Math.round(overlap_above / wort_len * 100);
        const overlap_below_percent = Math.round(overlap_below / wort_len * 100);

        t.set_computed_variable_value("Distance_from_Center",  Math.abs(center - level).toString());
        t.set_computed_variable_value("Marked_Word_Length",    wort_len.toString());
        t.set_computed_variable_value("Overlap_Above",         overlap_above.toString());
        t.set_computed_variable_value("Overlap_Above_Percent", overlap_above_percent.toString());
        t.set_computed_variable_value("Overlap_Below",         overlap_below.toString());
        t.set_computed_variable_value("Overlap_Below_Percent", overlap_below_percent.toString());

        const target_condition_string = if_statement.target_condition_string(level);
        const correct_answer          = if_statement.return_string(level);

        let raw_string = if_statement.print_string(length);
        raw_string = raw_string.replace(
            "(" + target_condition_string + ")",
            "(___MARK___" + target_condition_string + "___END___)"
        );

        let html_string = convert_string_to_html_string(raw_string);
        html_string = html_string
            .replace("___MARK___", `<span style="background-color:red">`)
            .replace("___END___",  `</span>`);

        t.expected_answer = correct_answer;

        t.do_print_task = () => {
            writer.clear_stage();
            const randomLeft = 5  + Math.floor(Math.random() * 10);
            const randomTop  = 10 + Math.floor(Math.random() * 40);
            writer.print_string_on_stage(
                `<div class='sourcecode' style='position:absolute;left:${randomLeft}%;top:${randomTop}%;'>${html_string}</div>`
            );
        };

        t.accepts_answer = (s) => true;

        t.do_print_after_task_information = () => {
            writer.clear_stage();
            writer.print_error_string_on_stage(writer.convert_string_to_html_string(
                "The correct answer was: " + t.expected_answer + "\n\n" +
                "In case you feel not concentrated enough, make a short break.\n\n" +
                "Press [Enter] to go on."
            ));
        };
    }
}};

BROWSER_EXPERIMENT(experiment_configuration_function);