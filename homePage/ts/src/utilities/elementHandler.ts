import { eDisplays, displayMap } from "./constraints/display";

export class elementHandler {
  element: HTMLElement;

  constructor(selector: string) {
    this.element = <HTMLElement>document.querySelector(selector);
  }
  /**
   * Change Display is able to alter the display type of an element.
   */
  display(type: eDisplays) {
    this.element.style.display = "" + displayMap.get(type);
  }
  /**
   * change opacity is able to alter the opacity of an element,
   * from 0(transparent) to 1(full)
   */
  opacity(type: number) {
    this.element.style.opacity = "" + type;
  }
  marginLeft(type: number) {}
  marginRight(type: number) {}
  borderLeft(type: number) {}
  borderRight(type: number) {}
}
export class imageHandler extends elementHandler {
  constructor(selector: string) {
    super(selector);
  }
  resizePX(width: number, height: number) {
    this.element.style.width = width + "px";
    this.element.style.height = height + "px";
  }
  resizeH(height: number) {
    this.element.style.height = height + "px";
  }
  resizeW(width: number) {
    this.element.style.width = width + "px";
  }
}
