"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayMap = exports.eDisplays = void 0;
var eDisplays;
(function (eDisplays) {
    eDisplays[eDisplays["block"] = 0] = "block";
    eDisplays[eDisplays["inline"] = 1] = "inline";
    eDisplays[eDisplays["inlineBlock"] = 2] = "inlineBlock";
    eDisplays[eDisplays["flex"] = 3] = "flex";
    eDisplays[eDisplays["inlineFlex"] = 4] = "inlineFlex";
    eDisplays[eDisplays["grid"] = 5] = "grid";
    eDisplays[eDisplays["table"] = 6] = "table";
    eDisplays[eDisplays["tableRow"] = 7] = "tableRow";
    eDisplays[eDisplays["listItem"] = 8] = "listItem";
    eDisplays[eDisplays["none"] = 9] = "none";
})(eDisplays || (exports.eDisplays = eDisplays = {}));
exports.displayMap = new Map();
exports.displayMap.set(eDisplays.block, "block");
exports.displayMap.set(eDisplays.inline, "inline");
exports.displayMap.set(eDisplays.inlineBlock, "inline-block");
exports.displayMap.set(eDisplays.flex, "flex");
exports.displayMap.set(eDisplays.inlineFlex, "inline-flex");
exports.displayMap.set(eDisplays.grid, "grid");
exports.displayMap.set(eDisplays.table, "table");
exports.displayMap.set(eDisplays.tableRow, "table-row");
exports.displayMap.set(eDisplays.listItem, "list-item");
exports.displayMap.set(eDisplays.none, "none");
//# sourceMappingURL=display.js.map