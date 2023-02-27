import { createHtmlElement } from "../../../helpers/methods/create-element.mjs";
import { showLastBid } from "../../../helpers/methods/show-last-bid.mjs";
import { createChildDataFieldLeft } from "./data-fields/child-field-left.mjs";
import { createChildDataFieldRight } from "./data-fields/child-field-right.mjs";
import { createParentDataField } from "./data-fields/parent-field.mjs";

export function createHtmlLastBid(bids) {
   const bidsAmount = showLastBid(bids);

   const parentDiv = createParentDataField();

   const childDivLeft = createChildDataFieldLeft("data-field--left");
   const childDivRight = createChildDataFieldRight("data-field--right-accent");

   const childContentLeft = createHtmlElement("p");
   const childContentRight = createHtmlElement("p");

   childContentLeft.innerText = "Last Bid";

   if (typeof bidsAmount === "number") {
      childContentRight.innerText = bidsAmount;
   } else {
      childContentRight.innerText = bidsAmount;
   }
   parentDiv.appendChild(childDivLeft);
   parentDiv.appendChild(childDivRight);

   childDivLeft.appendChild(childContentLeft);
   childDivRight.appendChild(childContentRight);

   return parentDiv;
}
