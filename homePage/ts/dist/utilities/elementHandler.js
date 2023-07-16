"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageHandler = exports.elementHandler = void 0;
const display_1 = require("./constraints/display");
class elementHandler {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    display(type) {
        this.element.style.display = "" + display_1.displayMap.get(type);
    }
    opacity(type) {
        this.element.style.opacity = "" + type;
    }
    marginLeft(type) { }
    marginRight(type) { }
    borderLeft(type) { }
    borderRight(type) { }
}
exports.elementHandler = elementHandler;
class imageHandler extends elementHandler {
    constructor(selector) {
        super(selector);
    }
    resizePX(width, height) {
        this.element.style.width = width + "px";
        this.element.style.height = height + "px";
    }
    resizeH(height) {
        this.element.style.height = height + "px";
    }
    resizeW(width) {
        this.element.style.width = width + "px";
    }
}
exports.imageHandler = imageHandler;
//# sourceMappingURL=elementHandler.js.map