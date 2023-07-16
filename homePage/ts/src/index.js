// import { elementHandler, imageHandler } from "../src/utilities/elementHandler";
//use enum for states
alert("helloooo");
var screenWidth = screen.width;
var screenHeight = screen.height;
var mainImage = document.querySelector("#mainImage");
var imageBorder = document.querySelector(".container");
// const mainImage = new imageHandler("#mainImage");
// let background = new imageHandler('.backShadow');
// let background = <HTMLElement>document.querySelector('.backShadow');
var imageHeight = screenHeight / 2;
var borderHeight = imageHeight + 100;
mainImage.style.height = imageHeight + " px";
mainImage.style.width = imageHeight + " px";
// mainImage.resizePX(1, 1);
imageBorder.style.width = borderHeight + "px";
imageBorder.style.height = borderHeight + "px";
// background.style.height = borderHeight + "px";
// background.style.width = borderHeight + "px";
alert("hello");
// function pageSetUp() {}
