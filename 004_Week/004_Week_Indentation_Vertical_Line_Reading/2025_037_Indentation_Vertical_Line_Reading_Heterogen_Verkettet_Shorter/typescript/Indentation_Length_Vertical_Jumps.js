import { BROWSER_EXPERIMENT } from "../../../../N_of_1_Experiments/modules/Experimentation/Browser_Output_Writer.js";
import { keys, Reaction_Time, SET_SEED, Standard_Post_Questionnaire } from "../../../../N_of_1_Experiments/modules/Experimentation/Experimentation.js";
import { convert_string_to_html_string } from "../../../../N_of_1_Experiments/modules/utils/Utils.js";
import { finish_pages, intro_pages, pre_run_experiment_instructions, pre_run_training_instructions } from "./Indentation_Length_Vertical_Jumps_Text.js";
import { generate_If_Statement, set_if_conditions_random_length } from "./Generate_Code.js";
let SEED = "42";
SET_SEED(SEED);
let experiment_configuration_function = (writer) => {
    return {
        experiment_name: "Indentation_Vertical_Jumps_036",
        seed: SEED,
        introduction_pages: [writer.string_page_command(intro_pages())],
        pre_run_training_instructions: writer.string_page_command(pre_run_training_instructions()),
        pre_run_experiment_instructions: writer.string_page_command(pre_run_experiment_instructions()),
        post_questionnaire: Standard_Post_Questionnaire(),
        training_configuration: { can_be_cancelled: true, can_be_repeated: true },
        finish_pages: [writer.string_page_command(finish_pages())],
        layout: [
            { variable: "Level", treatments: ["1", "2", "3", "4", "5", "6", "7", "8", "9"] },
            { variable: "Distance_from_Center", treatments: ["_computed_"] },
        ],
        repetitions: 20,
        measurement: Reaction_Time(keys(["1"])),
        task_configuration: (t) => {
            const center = 5;
            const nesting_depth = center * 2 - 1;
            const level = parseInt(t.treatment_value("Level"));
            t.set_computed_variable_value("Distance_from_Center", Math.abs(center - level).toString());
            const if_statement = generate_If_Statement(0, nesting_depth);
            set_if_conditions_random_length(if_statement);
            const target_condition_string = if_statement.target_condition_string(level);
            const correct_answer = if_statement.return_string(level);
            // Markierung VOR HTML-Konvertierung setzen (verhindert &&-Encoding-Problem)
            const arr = [];
            if_statement.print_into_continuation(arr, 0);
            let raw_string = arr.join("");
            raw_string = raw_string.replace("(" + target_condition_string + ")", "___MARK___(" + target_condition_string + ")___END___");
            let html_string = convert_string_to_html_string(raw_string);
            html_string = html_string
                .replace("___MARK___", `<span style="background-color:red">`)
                .replace("___END___", `</span>`);
            t.expected_answer = correct_answer;
            t.do_print_task = () => {
                writer.clear_stage();
                const randomLeft = 5 + Math.floor(Math.random() * 30);
                const randomTop = 5 + Math.floor(Math.random() * 40);
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