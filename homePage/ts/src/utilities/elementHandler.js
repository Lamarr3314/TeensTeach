"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageHandler = exports.elementHandler = void 0;
var display_1 = require("./constraints/display");
var elementHandler = /** @class */ (function () {
    function elementHandler(selector) {
        this.element = document.querySelector(selector);
    }
    /**
     * Change Display is able to alter the display type of an element.
     */
    elementHandler.prototype.display = function (type) {
        this.element.style.display = "" + display_1.displayMap.get(type);
    };
    /**
     * change opacity is able to alter the opacity of an element,
     * from 0(transparent) to 1(full)
     */
    elementHandler.prototype.opacity = function (type) {
        this.element.style.opacity = "" + type;
    };
    elementHandler.prototype.marginLeft = function (type) { };
    elementHandler.prototype.marginRight = function (type) { };
    elementHandler.prototype.borderLeft = function (type) { };
    elementHandler.prototype.borderRight = function (type) { };
    return elementHandler;
}());
exports.elementHandler = elementHandler;
var imageHandler = /** @class */ (function (_super) {
    __extends(imageHandler, _super);
    function imageHandler(selector) {
        return _super.call(this, selector) || this;
    }
    imageHandler.prototype.resizePX = function (width, height) {
        this.element.style.width = width + "px";
        this.element.style.height = height + "px";
    };
    imageHandler.prototype.resizeH = function (height) {
        this.element.style.height = height + "px";
    };
    imageHandler.prototype.resizeW = function (width) {
        this.element.style.width = width + "px";
    };
    return imageHandler;
}(elementHandler));
exports.imageHandler = imageHandler;
