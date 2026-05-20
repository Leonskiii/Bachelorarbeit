export interface GridLine {
    indent: number;
    condition: string;
    num_col: number;
    number: number;
    is_marked: boolean;
    left_noise: string;
    right_noise: string;
}
export declare function generate_grid(num_rows: number, marked_row: number, length: number, density: number, // ← neu: Anzahl Kauderwelsch-Zeichen um die Zahl
seed: number): {
    lines: GridLine[];
    marked_number: number;
    distance_from_center: number;
};
export declare function grid_to_html(lines: GridLine[]): string;
