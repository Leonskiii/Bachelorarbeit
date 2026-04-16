export function intro_pages() {

        return "<p>Hi, thx for participating. You will be shown a number of if-statements where one number is highlighted.</p>" +
            "<p>Your task is to identify which if-condition the highlighted number belongs to.</p>" +
            "<p>You do not need to type the answer. Just find the corresponding if-condition and press [1] when you found it.</p>";
}

export function pre_run_training_instructions(): string {
    return "<p>You entered the training phase. You can skip the training by pressing [Esc].</p>"
}

export function pre_run_experiment_instructions(): string {
    return "<p>You entered the experiment phase.</p>";
}

export function finish_pages(): string {
    return "<p>Almost done. Next, the experiment data will be downloaded (after pressing [Enter]).<br><br>" +
        "<p>Many thanks for your participation.<br>"
}
