interface IfBlock {
    condition: string;
    return_val: number;
    inner: IfBlock | null;
    inner_val: number;
}
export declare function generate_if_tree(nesting_depth: number, seed: number): {
    tree: IfBlock;
    answer_for_level: (level: number) => number;
};
export declare function tree_to_html(tree: IfBlock, marked_level: number, length: number, density: number, seed: number): string;
export {};
