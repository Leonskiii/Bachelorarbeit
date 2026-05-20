export declare function generate_grid(num_rows: number, xe_per_row: number, position: number, marked_row: number, indentation_length: number, seed?: number): {
    grid: string[][];
    density: number;
};
export declare function grid_to_html(grid: string[][], indentation_length: number): string;
