import { createHtmlElement } from "../../../../helpers/methods/create-element.mjs";

export function createChildDataFieldRight(childFieldType) {
   const childDivRight = createHtmlElement("div");
   childDivRight.classList.add(childFieldType);
   return childDivRight;
}
