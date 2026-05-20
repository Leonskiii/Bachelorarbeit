import {do_random_array_sort} from "../../../../N_of_1_Experiments/modules/Experimentation/Experimentation.js";

const KAUDERWELSCH_CHARS = "abcdefghijklnoqrstuvwyzABCDEFGHIJKLNOPQRSTUVWYZ";

function make_rng(seed: number) {
    let s = seed;
    return () => {
        s |= 0; s = s + 0x6D2B79F5 | 0;
        let t = Math.imul(s ^ s >>> 15, 1 | s);
        t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
}

function random_kauderwelsch(rng: () => number, len: number): string {
    let s = "";
    for (let i = 0; i < len; i++)
        s += KAUDERWELSCH_CHARS[Math.floor(rng() * KAUDERWELSCH_CHARS.length)];
    return s;
}

interface IfBlock {
    condition:  string;
    return_val: number;
    inner:      IfBlock | null;
    inner_val:  number;
}

export function generate_if_tree(
    nesting_depth: number,
    seed: number
): { tree: IfBlock, answer_for_level: (level: number) => number } {

    const rng = make_rng(seed);

    const cond_chars = "abcdefghijklmnopqrstuvwxyz".split("");
    const conditions: string[] = [];
    for (let i = 0; i < nesting_depth; i++) conditions.push(cond_chars[i]);
    do_random_array_sort(conditions);

    let returns: number[] = [];
    for (let i = 1; i <= nesting_depth + 1; i++) returns.push(i);
    do_random_array_sort(returns);

    let inner_val = returns.pop()!;
    let current: IfBlock = {
        condition:  conditions.pop()!,
        return_val: returns.pop()!,
        inner:      null,
        inner_val,
    };

    for (let d = 1; d < nesting_depth; d++) {
        current = {
            condition:  conditions.pop()!,
            return_val: returns.pop()!,
            inner:      current,
            inner_val:  0,
        };
    }

    function answer_for_level(level: number): number {
        let node: IfBlock = current;
        for (let i = 1; i < level; i++) node = node.inner!;
        return node.return_val;
    }

    return { tree: current, answer_for_level };
}

export function tree_to_html(
    tree:         IfBlock,
    marked_level: number,
    length:       number,
    density:      number,
    seed:         number
): string {

    const rng = make_rng(seed + 99999);
    const max_pad = length * 8;
    let html = "";

    function render(node: IfBlock, depth: number): void {
        const indent       = "&nbsp;".repeat(length * depth);
        const inner_indent = "&nbsp;".repeat(length * (depth + 1));
        const is_marked    = depth + 1 === marked_level;

        // if(...) {
        const cond_html = is_marked
            ? `<span style="background-color:red;color:white;">${node.condition}</span>`
            : node.condition;
        html += `<div style="font-family:monospace;white-space:pre;">${indent}if(${cond_html})&nbsp;{</div>`;

        // then_branch: rekursiv oder innerster //N
        if (node.inner !== null) {
            render(node.inner, depth + 1);
        } else {
            html += `<div style="font-family:monospace;white-space:pre;">${inner_indent}//${node.inner_val}</div>`;
        }

        // Kauderwelsch nach dem inneren Block, zufällig eingerückt
        for (let i = 0; i < density; i++) {
            const len     = 8 + Math.floor(rng() * 10);
            const noise   = random_kauderwelsch(rng, len);
            const base_pad  = length * depth;                        // Einrückung der zugehörigen }
            const spread    = length * 2;                            // wie weit links/rechts streuen
            const pad       = Math.max(0, base_pad - spread + Math.floor(rng() * (spread * 2)));
            html += `<div style="font-family:monospace;white-space:pre;">${"&nbsp;".repeat(pad)}${noise}</div>`;
        }

        // } return_val
        html += `<div style="font-family:monospace;white-space:pre;">${indent}}&nbsp;${node.return_val}</div>`;
    }

    render(tree, 0);
    return html;
}