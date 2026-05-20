export declare function generate_grid(num_rows: number, segment: number, marked_row: number, indentation_length: number, density: number, // ← neu: fester Treatment-Parameter
seed?: number): {
    grid: string[][];
    marked_number: number;
};
export declare function grid_to_html(grid: string[][], indentation_length: number): string;
