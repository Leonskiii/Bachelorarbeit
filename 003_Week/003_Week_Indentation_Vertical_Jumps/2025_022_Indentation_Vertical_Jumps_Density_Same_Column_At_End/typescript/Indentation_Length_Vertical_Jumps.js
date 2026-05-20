import { BROWSER_EXPERIMENT } from "../../../../N_of_1_Experiments/modules/Experimentation/Browser_Output_Writer.js";
import { keys, Reaction_Time, SET_SEED, Standard_Post_Questionnaire } from "../../../../N_of_1_Experiments/modules/Experimentation/Experimentation.js";
import { generate_grid, grid_to_html } from "./Generate_Code.js";
import { finish_pages, intro_pages, pre_run_experiment_instructions, pre_run_training_instructions } from "./Indentation_Length_Vertical_Jumps_Text.js";
let SEED = "42";
SET_SEED(SEED);
let experiment_configuration_function = (writer) => {
    return {
        experiment_name: "Indentation_Vertical_Jumps_Random_If",
        seed: SEED,
        introduction_pages: [writer.string_page_command(intro_pages())],
        pre_run_training_instructions: writer.string_page_command(pre_run_training_instructions()),
        pre_run_experiment_instructions: writer.string_page_command(pre_run_experiment_instructions()),
        post_questionnaire: Standard_Post_Questionnaire(),
        training_configuration: { can_be_cancelled: true, can_be_repeated: true },
        finish_pages: [writer.string_page_command(finish_pages())],
        layout: [
            { variable: "Length", treatments: ["10", "20", "30", "40"] },
            { variable: "Level", treatments: ["1", "2", "3", "4", "5", "6", "7", "8", "9"] },
            { variable: "Distance_from_Center", treatments: ["_computed_"] },
        ],
        repetitions: 5,
        measurement: Reaction_Time(keys(["1", "2", "3", "4", "5", "6", "7", "8", "9"])),
        task_configuration: (t) => {
            const num_rows = 9;
            const length = parseInt(t.treatment_value("Length"));
            const row = parseInt(t.treatment_value("Level")) - 1;
            const { lines, marked_number, distance_from_center } = generate_grid(num_rows, row, length, Math.floor(Math.random() * 100000));
            t.set_computed_variable_value("Distance_from_Center", distance_from_center.toFixed(1));
            const html_string = grid_to_html(lines);
            t.expected_answer = marked_number.toString();
            t.do_print_task = () => {
                writer.clear_stage();
                const randomLeft = 10 + Math.floor(Math.random() * 20);
                const randomTop = 10 + Math.floor(Math.random() * 30);
                writer.print_html_on_stage(`<div style='position:absolute;left:${randomLeft}%;top:${randomTop}%;'>${html_string}</div>`);
            };
            t.accepts_answer = (s) => true;
            t.do_print_after_task_information = () => {
                writer.clear_stage();
                writer.print_error_string_on_stage(writer.convert_string_to_html_string("The correct answer was: " + t.expected_answer + "\n\nPress [Enter] to go on."));
            };
        }
    };
};
BROWSER_EXPERIMENT(experiment_configuration_function);
//# sourceMappingURL=Indentation_Length_Vertical_Jumps.js.map