const KAUDERWELSCH_CHARS = "abcdefghijknoqrstuvwyzABCDEFGHIJKLNPQRSTUVWYZ!?.,;:-_#@$%&*()[]{}/\\|<>~^'`\"+=";

function random_char(rng: () => number): string {
    if (rng() < 0.05) return " ";
    return KAUDERWELSCH_CHARS[Math.floor(rng() * KAUDERWELSCH_CHARS.length)];
}

function make_rng(seed: number) {
    let s = seed;
    return () => {
        s |= 0; s = s + 0x6D2B79F5 | 0;
        let t = Math.imul(s ^ s >>> 15, 1 | s);
        t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
}

export function generate_grid(
    num_rows: number,
    segment: number,
    marked_row: number,
    indentation_length: number,
    density: number,          // ← neu: fester Treatment-Parameter
    seed: number = 42
): { grid: string[][], marked_number: number } {   // ← density wird nicht mehr zurückgegeben

    const rng = make_rng(seed);

    const left_pad  = 50;
    const right_pad = 50;
    const middle    = 98;
    const seg_size  = Math.floor(middle / 5); // 19
    const total     = left_pad + 1 + middle + 1 + right_pad; // 200

    const left_num_col  = left_pad;                    // Spalte 50
    const right_num_col = left_pad + 1 + middle;       // Spalte 149

    const seg_start = left_pad + 1 + segment * seg_size;

    // Zeilennummern mischen
    let row_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = row_numbers.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [row_numbers[i], row_numbers[j]] = [row_numbers[j], row_numbers[i]];
    }

    // Grid komplett mit Kauderwelsch füllen
    let grid: string[][] = [];
    for (let r = 0; r < num_rows; r++) {
        let row: string[] = [];
        for (let c = 0; c < left_pad; c++)  row.push(random_char(rng));
        row.push(row_numbers[r].toString());
        for (let c = 0; c < middle; c++)    row.push(random_char(rng));
        row.push(row_numbers[r].toString());
        for (let c = 0; c < right_pad; c++) row.push(random_char(rng));
        grid.push(row);
    }

    // X platzieren
    const pos_in_seg = Math.floor(rng() * seg_size);
    const marked_col = seg_start + pos_in_seg;
    grid[marked_row][marked_col] = "M";

    // Freiräume um die drei Marker setzen (Chebyshev-Distanz = density)
    const markers = [
        { row: marked_row, col: left_num_col  },   // linke Zahl der markierten Zeile
        { row: marked_row, col: right_num_col },   // rechte Zahl der markierten Zeile
        { row: marked_row, col: marked_col    },   // das X
    ];

    for (const { row: mr, col: mc } of markers) {
        for (let r = Math.max(0, mr - density); r <= Math.min(num_rows - 1, mr + density); r++) {
            for (let c = Math.max(0, mc - density); c <= Math.min(total - 1, mc + density); c++) {
                const is_marker = (r === mr && c === mc);
                if (!is_marker) grid[r][c] = " ";
            }
        }
    }

    return { grid, marked_number: row_numbers[marked_row] };
}

export function grid_to_html(grid: string[][], indentation_length: number): string {
    let html = "";
    for (let r = 0; r < grid.length; r++) {
        const margin = r * indentation_length;
        let row_html = `<div style="font-family:monospace;white-space:pre;margin-left:${margin}ch;">`;
        for (let c = 0; c < grid[r].length; c++) {
            const cell = grid[r][c];
            if (cell === "M") {
                row_html += `<span style="background-color:red">X</span>`;
            } else if (cell === " ") {
                row_html += " ";
            } else {
                row_html += cell
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;");
            }
        }
        row_html += "</div>";
        html += row_html;
    }
    return html;
}