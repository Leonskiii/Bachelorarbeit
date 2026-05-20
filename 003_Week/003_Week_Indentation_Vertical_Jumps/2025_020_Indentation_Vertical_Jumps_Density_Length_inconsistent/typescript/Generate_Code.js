const KAUDERWELSCH_CHARS = "abcdefghijklmnopqrstuvwyzABCDEFGHIJKLNOPQRSTUVWYZ!?.,;:-_#@$%*()[]{}/\\|~^'`\"+=";
function random_char(rng) {
    if (rng() < 0.05)
        return " "; // ~5% Leerzeichen
    return KAUDERWELSCH_CHARS[Math.floor(rng() * KAUDERWELSCH_CHARS.length)];
}
export function generate_grid(num_rows, xe_per_row, position, marked_row, indentation_length, seed = 42) {
    // Einfacher deterministischer RNG (Mulberry32)
    let s = seed;
    const rng = () => {
        s |= 0;
        s = s + 0x6D2B79F5 | 0;
        let t = Math.imul(s ^ s >>> 15, 1 | s);
        t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
    // Grid aufbauen — Kauderwelsch statt X
    let grid = [];
    for (let r = 0; r < num_rows; r++) {
        let row = [];
        for (let c = 0; c < xe_per_row; c++) {
            row.push(random_char(rng));
        }
        grid.push(row);
    }
    // Markiertes X setzen
    grid[marked_row][position] = "M";
    // Density: Zeichen in 3 Schichten — Leerzeichen zählen nicht
    let density = 0;
    for (let r = 0; r < num_rows; r++) {
        for (let c = 0; c < xe_per_row; c++) {
            const cell = grid[r][c];
            if (cell !== "M" && cell !== " ") {
                const abs_col_r = r * indentation_length + c;
                const abs_col_marked = marked_row * indentation_length + position;
                const row_dist = Math.abs(r - marked_row);
                const col_dist = Math.abs(abs_col_r - abs_col_marked);
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
        const margin = r * indentation_length;
        let row_html = `<div style="font-family:monospace;white-space:pre;margin-left:${margin}ch;">` + (r + 1) + " ";
        for (let c = 0; c < grid[r].length; c++) {
            const cell = grid[r][c];
            if (cell === "M") {
                row_html += `<span style="background-color:red">X</span>`;
            }
            else if (cell === " ") {
                row_html += " "; // echtes Leerzeichen bleibt dank white-space:pre
            }
            else {
                row_html += cell;
            }
        }
        row_html += " " + (r + 1) + "</div>";
        html += row_html;
    }
    return html;
}
//# sourceMappingURL=Generate_Code.js.map