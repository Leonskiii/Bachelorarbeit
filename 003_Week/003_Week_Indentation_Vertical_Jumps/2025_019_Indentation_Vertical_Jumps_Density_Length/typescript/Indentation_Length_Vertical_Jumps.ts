import {BROWSER_EXPERIMENT} from "../../../../N_of_1_Experiments/modules/Experimentation/Browser_Output_Writer.js";
import {
    Experiment_Output_Writer, keys, Reaction_Time,
    SET_SEED, Standard_Post_Questionnaire
} from "../../../../N_of_1_Experiments/modules/Experimentation/Experimentation.js";
import {Task} from "../../../../N_of_1_Experiments/modules/Experimentation/Task.js";
import {generate_grid, grid_to_html} from "./Generate_Code.js";
import {
    finish_pages,
    intro_pages,
    pre_run_experiment_instructions,
    pre_run_training_instructions
} from "./Indentation_Length_Vertical_Jumps_Text.js";

let SEED = "42";
SET_SEED(SEED);

let experiment_configuration_function = (writer: Experiment_Output_Writer) => { return {

    experiment_name: "Indentation_Vertical_Jumps_Density_Length",
    seed: SEED,
    introduction_pages:              [writer.string_page_command(intro_pages())],
    pre_run_training_instructions:   writer.string_page_command(pre_run_training_instructions()),
    pre_run_experiment_instructions: writer.string_page_command(pre_run_experiment_instructions()),
    post_questionnaire:              Standard_Post_Questionnaire(),
    training_configuration:          { can_be_cancelled: true, can_be_repeated: true },
    finish_pages:                    [writer.string_page_command(finish_pages())],

    layout: [
        { variable: "Length",   treatments: ["0", "10"] },
        { variable: "Segment",  treatments: ["0", "1", "2", "3", "4"] },
        { variable: "Row",      treatments: ["0", "1", "2", "3", "4", "5", "6", "7", "8"] },
        { variable: "Density",  treatments: ["_computed_"] }
    ],

    repetitions: 5,
    measurement: Reaction_Time(keys(["1"])),

    task_configuration: (t: Task) => {
        const num_rows   = 9;
        const xe_per_row = 100;
        const length     = parseInt(t.treatment_value("Length"));
        const segment = parseInt(t.treatment_value("Segment")); // 0-4
        const segment_start = segment * 20;
        const segment_end = segment_start + 19;
        const position = segment_start + Math.floor(Math.random() * 20);
        const row        = parseInt(t.treatment_value("Row"));

        const { grid, density } = generate_grid(num_rows, xe_per_row, position, row, length);
        t.set_computed_variable_value("Density", density.toString());

        const html_string = grid_to_html(grid, length);
        t.expected_answer = (row + 1).toString();

        t.do_print_task = () => {
            writer.clear_stage();
            const randomLeft = 5 + Math.floor(Math.random() * 20);
            const randomTop  = 8 + Math.floor(Math.random() * 50);
            writer.print_html_on_stage(
                `<div style='position:absolute;left:${randomLeft}%;top:${randomTop}%;'>${html_string}</div>`
            );
        };

        t.accepts_answer = (s) => true;

        t.do_print_after_task_information = () => {
            writer.clear_stage();
            writer.print_error_string_on_stage(writer.convert_string_to_html_string(
                "The correct answer was: " + t.expected_answer + "\n\nPress [Enter] to go on."));
        };
    }
}};

BROWSER_EXPERIMENT(experiment_configuration_function);