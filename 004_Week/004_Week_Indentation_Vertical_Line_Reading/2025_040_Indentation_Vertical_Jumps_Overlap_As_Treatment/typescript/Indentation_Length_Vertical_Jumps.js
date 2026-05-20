import { BROWSER_EXPERIMENT } from "../../../../N_of_1_Experiments/modules/Experimentation/Browser_Output_Writer.js";
import { keys, Reaction_Time, SET_SEED, Standard_Post_Questionnaire } from "../../../../N_of_1_Experiments/modules/Experimentation/Experimentation.js";
import { generate_If_Statement, Nested_Ifs } from "./Generate_Code.js";
import { convert_string_to_html_string } from "../../../../N_of_1_Experiments/modules/utils/Utils.js";
import { finish_pages, intro_pages, pre_run_experiment_instructions, pre_run_training_instructions } from "./Indentation_Length_Vertical_Jumps_Text.js";
import { Nouns } from "../../../../N_of_1_Experiments/modules/Words/Nouns.js";
let SEED = "69";
SET_SEED(SEED);
export function set_if_conditions_on_nous_each_starting_with_different_letter(if_statement) {
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
function set_condition_at_level(if_stmt, target_level, condition) {
    let current = if_stmt;
    let lvl = 1;
    while (current instanceof Nested_Ifs) {
        if (lvl === target_level) {
            current.condition_string = condition;
            return;
        }
        current = current.then_branch;
        lvl++;
    }
}
function get_word_of_total_length(nouns, target_length) {
    if (target_length <= 0)
        return "";
    // Einzelnes Wort falls möglich
    if (target_length <= 14)
        return nouns.get_word_of_length(target_length);
    // Mehrere Wörter aneinanderhängen bis Ziellänge erreicht
    let result = "";
    while (result.length < target_length) {
        const remaining = target_length - result.length;
        result += nouns.get_word_of_length(remaining);
    }
    return result.slice(0, target_length);
}
let experiment_configuration_function = (writer) => {
    return {
        experiment_name: "Indentation_Length_Vertical_Jumps",
        seed: SEED,
        introduction_pages: [writer.string_page_command(intro_pages())],
        pre_run_training_instructions: writer.string_page_command(pre_run_training_instructions()),
        pre_run_experiment_instructions: writer.string_page_command(pre_run_experiment_instructions()),
        post_questionnaire: Standard_Post_Questionnaire(),
        training_configuration: { can_be_cancelled: true, can_be_repeated: true },
        finish_pages: [writer.string_page_command(finish_pages())],
        layout: [
            { variable: "Length", treatments: ["6", "10", "15"] },
            { variable: "Level", treatments: ["2", "3", "4", "5", "6", "7", "8"] },
            { variable: "Overlap_Target", treatments: ["none", "low", "mid", "high"] },
            { variable: "Distance_from_Center", treatments: ["_computed_"] },
            { variable: "Schmutz", treatments: ["_computed_"] },
            { variable: "Schmutz_Group", treatments: ["_computed_"] },
            { variable: "Schmutz_Above", treatments: ["_computed_"] },
            { variable: "Schmutz_Below", treatments: ["_computed_"] },
            { variable: "Marked_Word_Length", treatments: ["_computed_"] },
        ],
        repetitions: 5,
        measurement: Reaction_Time(keys(["1"])),
        task_configuration: (t) => {
            const center = 5;
            const nesting_depth = center * 2 - 1;
            const length = parseInt(t.treatment_value("Length"));
            const level = parseInt(t.treatment_value("Level"));
            const overlap_target = t.treatment_value("Overlap_Target");
            const nouns = new Nouns();
            // Baum generieren und alle Conditions zufällig befüllen
            const if_statement = generate_If_Statement(length, nesting_depth);
            set_if_conditions_on_nous_each_starting_with_different_letter(if_statement);
            const target_condition_string = if_statement.target_condition_string(level);
            const correct_answer = if_statement.return_string(level);
            // Position des markierten Bereichs: ab "if(" bis inkl. ")"
            const marked_col_start = (level - 1) * length;
            const marked_col_end = marked_col_start + 3 + target_condition_string.length + 1;
            // Ziel-Overlap in Zeichen
            const target_overlap = overlap_target === "none" ? 0 :
                overlap_target === "low" ? 3 :
                    overlap_target === "mid" ? 6 :
                        9;
            // Benötigte Wortlänge Nachbar oben:
            // cond_end = (level-2)*length + 3 + word_len + 1
            // overlap  = cond_end - marked_col_start = target_overlap
            // → word_len = marked_col_start + target_overlap - (level-2)*length - 4
            //            = (level-1)*length + target_overlap - (level-2)*length - 4
            //            = length + target_overlap - 4
            const needed_above_len = Math.max(2, length + target_overlap - 4);
            // Benötigte Wortlänge Nachbar unten:
            // cond_start = level*length
            // overlap    = min(cond_end, marked_col_end) - cond_start
            // für kleinen overlap reicht es wenn cond_start + target_overlap <= marked_col_end
            // → word_len = target_overlap + cond_start - cond_start - 4 = target_overlap - 4
            const needed_below_len = Math.max(2, target_overlap - 4);
            // Nachbarwörter mit passender Länge setzen (Wörter werden aneinandergehängt falls nötig)
            if (level > 1)
                set_condition_at_level(if_statement, level - 1, get_word_of_total_length(nouns, needed_above_len));
            if (level < nesting_depth)
                set_condition_at_level(if_statement, level + 1, get_word_of_total_length(nouns, needed_below_len));
            // Tatsächlichen Schmutz messen
            function chars_in_window(condition, indent) {
                const cond_start = indent;
                const cond_end = indent + 3 + condition.length + 1; // "if(" + word + ")"
                const overlap_start = Math.max(cond_start, marked_col_start);
                const overlap_end = Math.min(cond_end, marked_col_end);
                const overlap = overlap_end - overlap_start;
                return overlap > 0 ? overlap : 0;
            }
            const schmutz_above = level > 1
                ? chars_in_window(if_statement.target_condition_string(level - 1), (level - 2) * length)
                : 0;
            const schmutz_below = level < nesting_depth
                ? chars_in_window(if_statement.target_condition_string(level + 1), level * length)
                : 0;
            const schmutz_total = schmutz_above + schmutz_below;
            const schmutz_group = schmutz_total === 0 ? "1_none" :
                schmutz_total <= 5 ? "2_0-5" :
                    schmutz_total <= 10 ? "3_5-10" :
                        schmutz_total <= 15 ? "4_10-15" :
                            "5_15+";
            t.set_computed_variable_value("Distance_from_Center", Math.abs(center - level).toString());
            t.set_computed_variable_value("Schmutz", schmutz_total.toString());
            t.set_computed_variable_value("Schmutz_Group", schmutz_group);
            t.set_computed_variable_value("Schmutz_Above", schmutz_above.toString());
            t.set_computed_variable_value("Schmutz_Below", schmutz_below.toString());
            t.set_computed_variable_value("Marked_Word_Length", target_condition_string.length.toString());
            // Markierung vor HTML-Konvertierung setzen
            let raw_string = if_statement.print_string(length);
            raw_string = raw_string.replace("(" + target_condition_string + ")", "(___MARK___" + target_condition_string + "___END___)");
            let html_string = convert_string_to_html_string(raw_string);
            html_string = html_string
                .replace("___MARK___", `<span style="background-color:red">`)
                .replace("___END___", `</span>`);
            t.expected_answer = correct_answer;
            t.do_print_task = () => {
                writer.clear_stage();
                const randomLeft = 5 + Math.floor(Math.random() * 10);
                const randomTop = 10 + Math.floor(Math.random() * 40);
                writer.print_string_on_stage(`<div class='sourcecode' style='position:absolute;left:${randomLeft}%;top:${randomTop}%;'>${html_string}</div>`);
            };
            t.accepts_answer = (s) => true;
            t.do_print_after_task_information = () => {
                writer.clear_stage();
                writer.print_error_string_on_stage(writer.convert_string_to_html_string("The correct answer was: " + t.expected_answer + "\n\n" +
                    "In case you feel not concentrated enough, make a short break.\n\n" +
                    "Press [Enter] to go on."));
            };
        }
    };
};
BROWSER_EXPERIMENT(experiment_configuration_function);
//# sourceMappingURL=Indentation_Length_Vertical_Jumps.js.map