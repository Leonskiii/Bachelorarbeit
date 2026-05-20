import { BROWSER_EXPERIMENT } from "../../../../N_of_1_Experiments/modules/Experimentation/Browser_Output_Writer.js";
import { keys, Reaction_Time, SET_SEED, Standard_Post_Questionnaire } from "../../../../N_of_1_Experiments/modules/Experimentation/Experimentation.js";
import { generate_if_tree, tree_to_html } from "./Generate_Code.js";
import { finish_pages, intro_pages, pre_run_experiment_instructions, pre_run_training_instructions } from "./Indentation_Length_Vertical_Jumps_Text.js";
let SEED = "42";
SET_SEED(SEED);
let experiment_configuration_function = (writer) => {
    return {
        experiment_name: "Indentation_Vertical_Jumps_Density_Closing_Bracket",
        seed: SEED,
        introduction_pages: [writer.string_page_command(intro_pages())],
        pre_run_training_instructions: writer.string_page_command(pre_run_training_instructions()),
        pre_run_experiment_instructions: writer.string_page_command(pre_run_experiment_instructions()),
        post_questionnaire: Standard_Post_Questionnaire(),
        training_configuration: { can_be_cancelled: true, can_be_repeated: true },
        finish_pages: [writer.string_page_command(finish_pages())],
        layout: [
            { variable: "Length", treatments: ["2", "4", "6", "8"] },
            { variable: "Level", treatments: ["1", "2", "3", "4", "5", "6", "7", "8", "9"] },
            { variable: "Density", treatments: ["0", "2", "4"] },
            { variable: "Distance_from_Center", treatments: ["_computed_"] },
        ],
        repetitions: 4,
        measurement: Reaction_Time(keys(["1"])),
        task_configuration: (t) => {
            const length = parseInt(t.treatment_value("Length"));
            const level = parseInt(t.treatment_value("Level"));
            const density = parseInt(t.treatment_value("Density"));
            const nesting_depth = 9;
            const center = (nesting_depth + 1) / 2;
            const distance = Math.abs(level - center);
            t.set_computed_variable_value("Distance_from_Center", distance.toString()); // ← kein .toFixed(1)
            const seed = Math.floor(Math.random() * 100000);
            const { tree, answer_for_level } = generate_if_tree(nesting_depth, seed);
            t.expected_answer = answer_for_level(level).toString();
            const html_string = tree_to_html(tree, level, length, density, seed);
            t.do_print_task = () => {
                writer.clear_stage();
                const randomLeft = 10 + Math.floor(Math.random() * 20);
                const randomTop = 5 + Math.floor(Math.random() * 15);
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