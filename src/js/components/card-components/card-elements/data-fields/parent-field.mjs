import { createHtmlElement } from "../../../../helpers/methods/create-element.mjs";

export function createParentDataField() {
   const parentDiv = createHtmlElement("div");
   parentDiv.classList.add("data-field", "mb-1");
   return parentDiv;
}
