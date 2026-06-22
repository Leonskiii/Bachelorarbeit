import {BROWSER_EXPERIMENT} from "../../../N_of_1_Experiments/modules/Experimentation/Browser_Output_Writer.js";
import {
    alternatives, Experiment_Output_Writer, keys, random_array_element,
    random_integer_up_to_excluding, Reaction_Time, SET_SEED, Standard_Post_Questionnaire
} from "../../../N_of_1_Experiments/modules/Experimentation/Experimentation.js";
import {Task} from "../../../N_of_1_Experiments/modules/Experimentation/Task.js";
import {generate_If_Statement, Nested_Ifs, Term, Condition_Layout} from "./Generate_Code.js";
import {convert_string_to_html_string} from "../../../N_of_1_Experiments/modules/utils/Utils.js";
import {
    finish_pages, intro_pages, pre_run_experiment_instructions, pre_run_training_instructions
} from "./Indentation_Length_Vertical_Jumps_Text.js";
import {Nouns} from "../../../N_of_1_Experiments/modules/Words/Nouns.js";

let SEED = "42";
SET_SEED(SEED);

export function set_if_conditions_on_nous_each_starting_with_different_letter(if_statement: Term) {
    const starting_letter = [];
    const nouns = new Nouns();
    while (if_statement instanceof Nested_Ifs) {
        let next_words = nouns.get_random_word();
        while (starting_letter.includes(next_words[0]))
            next_words = nouns.get_random_word();
        starting_letter.push(next_words[0]);
        if_statement.condition_string = next_words;
        if_statement = if_statement.then_branch;
    }
}

let experiment_configuration_function = (writer: Experiment_Output_Writer) => { return {

    experiment_name:                 "Indentation_Vertical_Jumps_Asymmetricall_Symmentricall_And_Start_And_End",
    seed:                            SEED,
    introduction_pages:              [writer.string_page_command(intro_pages())],
    pre_run_training_instructions:   writer.string_page_command(pre_run_training_instructions()),
    pre_run_experiment_instructions: writer.string_page_command(pre_run_experiment_instructions()),
    post_questionnaire:              Standard_Post_Questionnaire(),
    training_configuration:          { can_be_cancelled: true, can_be_repeated: true },
    finish_pages:                    [writer.string_page_command(finish_pages())],

    layout: [
        { variable: "Length",               treatments: ["4", "14"]                          },
        { variable: "Level",                treatments: ["4", "5", "6"] },
        { variable: "Indentation_Type",     treatments: ["Symmetric", "Asymmetric"]          },
        { variable: "Highlight_Position",   treatments: ["First", "Last"]                    },
        { variable: "Distance_from_Center", treatments: ["_computed_"]                       },
    ],

    repetitions: 15,
    measurement: Reaction_Time(keys(["1"])),

    task_configuration: (t: Task) => {

        const center        = 5;
        const nesting_depth = center * 2 - 1;
        const length        = parseInt(t.treatment_value("Length"));
        const level         = parseInt(t.treatment_value("Level"));
        const indentation_type   = t.treatment_value("Indentation_Type") as Condition_Layout;
        const highlight_position = t.treatment_value("Highlight_Position") as "First" | "Last";

        t.set_computed_variable_value("Distance_from_Center", Math.abs(center - level).toString());

        const if_statement = generate_If_Statement(length, nesting_depth, length, indentation_type, level);
        const html_string  = convert_string_to_html_string(if_statement.print_string(length));
        const correct_answer = if_statement.return_string(level);
        const target_word    = if_statement.target_word(level, highlight_position);

        const marked_html = html_string.replace(
            new RegExp(`\\b${target_word}\\b`),
            `<span style="background-color:red">${target_word}</span>`
        );

        t.expected_answer = correct_answer;

        t.do_print_task = () => {
            writer.clear_stage();
            const randomLeft = 5  + Math.floor(Math.random() * 10);
            const randomTop  = 10 + Math.floor(Math.random() * 40);
            writer.print_string_on_stage(
                `<div class='sourcecode' style='position:absolute;left:${randomLeft}%;top:${randomTop}%;'>${marked_html}</div>`
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