export interface GridLine {
    indent: number;
    condition: string;
    num_col: number;
    number: number;
    is_marked: boolean;
}
export declare function generate_grid(num_rows: number, marked_row: number, length: number, seed: number): {
    lines: GridLine[];
    marked_number: number;
    distance_from_center: number;
};
export declare function grid_to_html(lines: GridLine[]): string;
