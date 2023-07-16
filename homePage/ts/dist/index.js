"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
alert("helloooo");
const screenWidth = screen.width;
const screenHeight = screen.height;
let mainImage = document.querySelector("#mainImage");
let imageBorder = document.querySelector(".container");
const imageHeight = screenHeight / 2;
const borderHeight = imageHeight + 100;
mainImage.style.height = imageHeight + " px";
mainImage.style.width = imageHeight + " px";
imageBorder.style.width = borderHeight + "px";
imageBorder.style.height = borderHeight + "px";
alert("hello");
//# sourceMappingURL=index.js.map