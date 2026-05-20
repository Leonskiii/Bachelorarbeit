export function generate_grid(num_rows: number, xe_per_row: number, position: number, marked_row: number, indentation_length: number): {
    grid: string[][],
    density: number
} {
    // Grid aufbauen — nur X, keine Whitespaces
    let grid: string[][] = [];
    for (let r = 0; r < num_rows; r++) {
        let row: string[] = [];
        for (let c = 0; c < xe_per_row; c++) {
            row.push("X");
        }
        grid.push(row);
    }

    // Markiertes X setzen
    grid[marked_row][position] = "M";

    // Density: Xe in 3 Schichten — absolute Position berücksichtigt Einrückung
    let density = 0;
    for (let r = 0; r < num_rows; r++) {
        for (let c = 0; c < xe_per_row; c++) {
            if (grid[r][c] === "X") {
                const abs_col_r          = r * indentation_length + c;
                const abs_col_marked     = marked_row * indentation_length + position;
                const row_dist = Math.abs(r - marked_row);
                const col_dist = Math.abs(abs_col_r - abs_col_marked);
                const dist = Math.max(row_dist, col_dist);
                if (dist > 0 && dist <= 3) density++;
            }
        }
    }

    return { grid, density };
}

export function grid_to_html(grid: string[][], indentation_length: number): string {
    let html = "";
    for (let r = 0; r < grid.length; r++) {
        const margin = r * indentation_length;
        let row_html = `<div style="font-family:monospace;margin-left:${margin}ch;">` + (r + 1) + "&nbsp;";
        for (let c = 0; c < grid[r].length; c++) {
            if (grid[r][c] === "M") {
                row_html += `<span style="background-color:red">X</span>`;
            } else if (grid[r][c] === "X") {
                row_html += "X";
            }
        }
        row_html += "&nbsp;" + (r + 1) + "</div>";
        html += row_html;
    }
    return html;
}