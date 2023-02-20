import { createHtmlElement } from "../../../helpers/methods/create-element.mjs";
import { formatDate } from "../../../helpers/methods/format-date.mjs";
import { createChildDataFieldLeft } from "./data-fields/child-field-left.mjs";
import { createChildDataFieldRight } from "./data-fields/child-field-right.mjs";
import { createParentDataField } from "./data-fields/parent-field.mjs";

export function createHtmlStartDate(apiDateCreated) {
   const parentDiv = createParentDataField();

   const childDivLeft = createChildDataFieldLeft("data-field--left");
   const childDivRight = createChildDataFieldRight("data-field--right");

   const childContentLeft = createHtmlElement("p");
   const childContentRight = createHtmlElement("p");

   childContentLeft.innerText = "Started";
   childContentRight.innerText = formatDate(apiDateCreated);
   parentDiv.appendChild(childDivLeft);
   parentDiv.appendChild(childDivRight);

   childDivLeft.appendChild(childContentLeft);
   childDivRight.appendChild(childContentRight);

   return parentDiv;
}
