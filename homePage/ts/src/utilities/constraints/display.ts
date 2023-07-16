export enum eDisplays {
  block,
  inline,
  inlineBlock,
  flex,
  inlineFlex,
  grid,
  table,
  tableRow,
  listItem,
  none,
}
export var displayMap = new Map<eDisplays, string>();
displayMap.set(eDisplays.block, "block");
displayMap.set(eDisplays.inline, "inline");
displayMap.set(eDisplays.inlineBlock, "inline-block");
displayMap.set(eDisplays.flex, "flex");
displayMap.set(eDisplays.inlineFlex, "inline-flex");
displayMap.set(eDisplays.grid, "grid");
displayMap.set(eDisplays.table, "table");
displayMap.set(eDisplays.tableRow, "table-row");
displayMap.set(eDisplays.listItem, "list-item");
displayMap.set(eDisplays.none, "none");
