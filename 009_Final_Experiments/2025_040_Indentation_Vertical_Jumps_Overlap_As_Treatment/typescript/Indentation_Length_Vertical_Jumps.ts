import {BROWSER_EXPERIMENT} from "../../../../N_of_1_Experiments/modules/Experimentation/Browser_Output_Writer.js";
import {
    Experiment_Output_Writer, keys, Reaction_Time,
    SET_SEED, Standard_Post_Questionnaire
} from "../../../../N_of_1_Experiments/modules/Experimentation/Experimentation.js";
import {Task} from "../../../../N_of_1_Experiments/modules/Experimentation/Task.js";
import {generate_If_Statement, Nested_Ifs, Term} from "./Generate_Code.js";
import {convert_string_to_html_string} from "../../../../N_of_1_Experiments/modules/utils/Utils.js";
import {
    finish_pages,
    intro_pages,
    pre_run_experiment_instructions,
    pre_run_training_instructions
} from "./Indentation_Length_Vertical_Jumps_Text.js";
import {Nouns} from "../../../../N_of_1_Experiments/modules/Words/Nouns.js";

let SEED = "42";
SET_SEED(SEED);

export function set_if_conditions_on_nous_each_starting_with_different_letter(if_statement: Term) {
    let starting_letter = [];
    let nouns = new Nouns();
    while (if_statement instanceof Nested_Ifs) {
        let next_words = nouns.get_random_word();
        while (starting_letter.includes(next_words[0])) {
            next_words = nouns.get_random_word();
        }
        starting_letter.push(next_words[0]);
        if_statement.condition_string = next_words;
        if_statement = if_statement.then_branch;
    }
}

function set_condition_at_level(if_stmt: Term, target_level: number, condition: string) {
    let current = if_stmt;
    let lvl = 1;
    while (current instanceof Nested_Ifs) {
        if (lvl === target_level) {
            (current as Nested_Ifs).condition_string = condition;
            return;
        }
        current = (current as Nested_Ifs).then_branch;
        lvl++;
    }
}

function get_word_of_total_length(nouns: Nouns, target_length: number): string {
    if (target_length <= 0) return "";
    if (target_length <= 14) return nouns.get_word_of_length(target_length);
    let result = "";
    while (result.length < target_length) {
        const remaining = target_length - result.length;
        result += nouns.get_word_of_length(remaining);
    }
    return result.slice(0, target_length);
}

function random_in_range(min: number, max: number): number {
    return min + Math.random() * (max - min);
}

let experiment_configuration_function = (writer: Experiment_Output_Writer) => { return {

    experiment_name: "Indentation_Length_Vertical_Jumps",
    seed: SEED,
    introduction_pages:              [writer.string_page_command(intro_pages())],
    pre_run_training_instructions:   writer.string_page_command(pre_run_training_instructions()),
    pre_run_experiment_instructions: writer.string_page_command(pre_run_experiment_instructions()),
    post_questionnaire:              Standard_Post_Questionnaire(),
    training_configuration:          { can_be_cancelled: true, can_be_repeated: true },
    finish_pages:                    [writer.string_page_command(finish_pages())],

    layout: [
        { variable: "Length",                    treatments: ["6", "10", "15"] },
        { variable: "Level",                     treatments: ["2", "3", "4", "5", "6", "7", "8"] },
        { variable: "Overlap_Total_Target",      treatments: ["1_none", "2_1-33", "3_34-66", "4_67-100"] },
        { variable: "Distance_from_Center",      treatments: ["_computed_"] },
        { variable: "Marked_Word_Length",        treatments: ["_computed_"] },
        { variable: "Overlap_Above",             treatments: ["_computed_"] },
        { variable: "Overlap_Above_Percent",     treatments: ["_computed_"] },
        { variable: "Overlap_Below",             treatments: ["_computed_"] },
        { variable: "Overlap_Below_Percent",     treatments: ["_computed_"] },
        { variable: "Overlap_Total",             treatments: ["_computed_"] },
        { variable: "Overlap_Total_Percent",     treatments: ["_computed_"] },
    ],

    repetitions: 10,
    measurement: Reaction_Time(keys(["1"])),

    task_configuration: (t: Task) => {
        const center              = 5;
        const nesting_depth       = center * 2 - 1;
        const length              = parseInt(t.treatment_value("Length"));
        const level               = parseInt(t.treatment_value("Level"));
        const overlap_total_target = t.treatment_value("Overlap_Total_Target");
        const nouns               = new Nouns();

        // Baum generieren und alle Conditions zufällig befüllen
        const if_statement = generate_If_Statement(length, nesting_depth);
        set_if_conditions_on_nous_each_starting_with_different_letter(if_statement);

        const target_condition_string = if_statement.target_condition_string(level);
        const correct_answer          = if_statement.return_string(level);
        const marked_word_length      = target_condition_string.length;

        // Position des markierten Bereichs: ab "if(" bis inkl. ")"
        const marked_col_start = (level - 1) * length;
        const marked_col_end   = marked_col_start + 3 + marked_word_length + 1;

        // Ziel-Gesamtoverlap prozentual bestimmen
        const overlap_percent =
            overlap_total_target === "1_none"    ? 0.0 :
                overlap_total_target === "2_1-33"    ? random_in_range(0.01, 0.33) :
                    overlap_total_target === "3_34-66"   ? random_in_range(0.34, 0.66) :
                        random_in_range(0.67, 1.0);

        const total_target_overlap = Math.round(marked_word_length * overlap_percent);

        // Max möglicher Overlap unten berechnen
        const max_below = Math.max(0, 3 + marked_word_length + 1 - length);

        // Overlap aufteilen: erst unten ausschöpfen, rest geht nach oben
        const below_share = Math.min(max_below, total_target_overlap);
        const above_share = total_target_overlap - below_share;

        const needed_above_len = Math.max(2, length + above_share - 4);
        const needed_below_len = Math.max(2, below_share - 4);

        if (level > 1)
            set_condition_at_level(if_statement, level - 1, get_word_of_total_length(nouns, needed_above_len));
        if (level < nesting_depth)
            set_condition_at_level(if_statement, level + 1, get_word_of_total_length(nouns, needed_below_len));

        // Tatsächlichen Overlap messen
        function chars_in_window(condition: string, indent: number): number {
            const cond_start    = indent;
            const cond_end      = indent + 3 + condition.length + 1;
            const overlap_start = Math.max(cond_start, marked_col_start);
            const overlap_end   = Math.min(cond_end,   marked_col_end);
            const overlap       = overlap_end - overlap_start;
            return overlap > 0 ? overlap : 0;
        }

        const overlap_above = level > 1
            ? chars_in_window(if_statement.target_condition_string(level - 1), (level - 2) * length)
            : 0;
        const overlap_below = level < nesting_depth
            ? chars_in_window(if_statement.target_condition_string(level + 1), level * length)
            : 0;
        const overlap_total = overlap_above + overlap_below;

        const overlap_above_percent = Math.round((overlap_above / marked_word_length) * 100);
        const overlap_below_percent = Math.round((overlap_below / marked_word_length) * 100);
        const overlap_total_percent = Math.round((overlap_total / marked_word_length) * 100);

        t.set_computed_variable_value("Distance_from_Center",   Math.abs(center - level).toString());
        t.set_computed_variable_value("Marked_Word_Length",     marked_word_length.toString());
        t.set_computed_variable_value("Overlap_Above",          overlap_above.toString());
        t.set_computed_variable_value("Overlap_Above_Percent",  overlap_above_percent.toString());
        t.set_computed_variable_value("Overlap_Below",          overlap_below.toString());
        t.set_computed_variable_value("Overlap_Below_Percent",  overlap_below_percent.toString());
        t.set_computed_variable_value("Overlap_Total",          overlap_total.toString());
        t.set_computed_variable_value("Overlap_Total_Percent",  overlap_total_percent.toString());

        // Markierung vor HTML-Konvertierung setzen
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
                "Press [Enter] to go on."));
        };
    }
}};

BROWSER_EXPERIMENT(experiment_configuration_function);