import { createHtmlElement } from "../../../../helpers/methods/create-element.mjs";

export function createChildDataFieldLeft(childFieldType) {
   const childDivLeft = createHtmlElement("div");
   childDivLeft.classList.add(childFieldType);
   return childDivLeft;
}
