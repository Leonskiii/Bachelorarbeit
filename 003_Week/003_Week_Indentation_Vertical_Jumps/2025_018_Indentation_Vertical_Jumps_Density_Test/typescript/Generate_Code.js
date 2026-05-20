export function generate_grid(num_rows, xe_per_row, position, marked_row) {
    // Grid aufbauen
    let grid = [];
    for (let r = 0; r < num_rows; r++) {
        let row = [];
        for (let c = 0; c < xe_per_row; c++) {
            row.push("X");
        }
        grid.push(row);
    }
    grid[marked_row][position] = "M";
    let density = 0;
    for (let r = 0; r < num_rows; r++) {
        for (let c = 0; c < xe_per_row; c++) {
            if (grid[r][c] === "X") {
                const row_dist = Math.abs(r - marked_row);
                const col_dist = Math.abs(c - position);
                const dist = Math.max(row_dist, col_dist);
                if (dist > 0 && dist <= 3)
                    density++;
            }
        }
    }
    return { grid, density };
}
export function grid_to_html(grid, indentation_length) {
    let html = "";
    for (let r = 0; r < grid.length; r++) {
        const margin = indentation_length * r;
        let row_html = `<div style="margin-left:${margin}ch;">` + (r + 1) + "&nbsp;";
        for (let c = 0; c < grid[r].length; c++) {
            if (grid[r][c] === "M") {
                row_html += `<span style="background-color:red">X</span>`;
            }
            else {
                row_html += "X";
            }
        }
        row_html += "&nbsp;" + (r + 1) + "</div>";
        html += row_html;
    }
    return html;
}
//# sourceMappingURL=Generate_Code.js.map