import { createHtmlElement } from "../../../helpers/methods/create-element.mjs";
import { removeEmptyArray } from "../../../helpers/methods/remove-empty-array.mjs";
import { createChildDataFieldLeft } from "./data-fields/child-field-left.mjs";
import { createChildDataFieldRight } from "./data-fields/child-field-right.mjs";
import { createParentDataField } from "./data-fields/parent-field.mjs";

export function createHtmlLastBid(bids) {
   const removedEmptyBid = removeEmptyArray(bids);

   let bidAmount = "";
   if (typeof removedEmptyBid === "string") {
      bidAmount = "no bids";
   } else {
      const lastBid = bids.pop();
      const { amount } = lastBid;
      bidAmount = `$${amount}`;
   }

   const parentDiv = createParentDataField();

   const childDivLeft = createChildDataFieldLeft("data-field--left");
   const childDivRight = createChildDataFieldRight("data-field--right-accent");

   const childContentLeft = createHtmlElement("p");
   const childContentRight = createHtmlElement("p");

   childContentLeft.innerText = "Last Bid";
   childContentRight.innerText = bidAmount;
   parentDiv.appendChild(childDivLeft);
   parentDiv.appendChild(childDivRight);

   childDivLeft.appendChild(childContentLeft);
   childDivRight.appendChild(childContentRight);

   return parentDiv;
}
