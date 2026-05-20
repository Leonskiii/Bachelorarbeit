const KAUDERWELSCH_CHARS = "abcdefghijklnoqrstuvwyzABCDEFGHIJKLNOPQRSTUVWYZ";
function random_char(rng) {
    return KAUDERWELSCH_CHARS[Math.floor(rng() * KAUDERWELSCH_CHARS.length)];
}
function random_condition(rng) {
    const len = 2 + Math.floor(rng() * 4);
    let s = "";
    for (let i = 0; i < len; i++)
        s += random_char(rng);
    return s;
}
function make_rng(seed) {
    let s = seed;
    return () => {
        s |= 0;
        s = s + 0x6D2B79F5 | 0;
        let t = Math.imul(s ^ s >>> 15, 1 | s);
        t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
}
export function generate_grid(num_rows, marked_row, length, seed) {
    const rng = make_rng(seed);
    // Zeilennummern mischen
    let row_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = row_numbers.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [row_numbers[i], row_numbers[j]] = [row_numbers[j], row_numbers[i]];
    }
    // Einrückungen: ohne Wiederholung, kein Muster
    const indent_pool = [0, 3, 6, 9, 12, 15, 18, 21, 24, 27];
    for (let i = indent_pool.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [indent_pool[i], indent_pool[j]] = [indent_pool[j], indent_pool[i]];
    }
    const num_base = length;
    const num_pool = Array.from({ length: 9 }, (_, i) => num_base + i * 2 + 1);
    for (let i = num_pool.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [num_pool[i], num_pool[j]] = [num_pool[j], num_pool[i]];
    }
    const lines = [];
    for (let r = 0; r < num_rows; r++) {
        const indent = indent_pool[r];
        const condition = random_condition(rng);
        const num_col = num_pool[r]; // ← jede Zahl an anderer Spalte
        lines.push({
            indent,
            condition,
            num_col,
            number: row_numbers[r],
            is_marked: r === marked_row,
        });
    }
    const marked_line = lines[marked_row];
    const if_end = marked_line.indent + 3 + marked_line.condition.length + 1;
    const distance_from_center = Math.abs(marked_line.num_col - if_end);
    return { lines, marked_number: row_numbers[marked_row], distance_from_center };
}
export function grid_to_html(lines) {
    const total = Math.max(...lines.map(l => l.num_col)) + 2;
    return lines.map(line => {
        const chars = Array(total).fill(" ");
        const if_str = `if(${line.condition})`;
        for (let i = 0; i < if_str.length; i++) {
            if (line.indent + i < total)
                chars[line.indent + i] = if_str[i];
        }
        chars[line.num_col] = line.number.toString();
        let row_html = `<div style="font-family:monospace;white-space:pre;">`;
        if (line.is_marked) {
            row_html += " ".repeat(line.indent);
            row_html += `if(<span style="background-color:red;color:white;">${line.condition}</span>)`;
            const spaces_after = line.num_col - (line.indent + if_str.length);
            row_html += " ".repeat(Math.max(0, spaces_after));
            row_html += line.number.toString();
        }
        else {
            row_html += chars.join("")
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");
        }
        row_html += "</div>";
        return row_html;
    }).join("");
}
//# sourceMappingURL=Generate_Code.js.map