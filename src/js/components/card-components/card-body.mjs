import { createHTMlDescription } from "./card-elements/description.mjs";
import { createHtmlEndsAt } from "./card-elements/ends-at.mjs";
import { createHtmlElement } from "../../helpers/methods/create-element.mjs";
import { createHtmlLastBid } from "./card-elements/last-bid.mjs";
import { createHtmlTitle } from "./card-elements/title.mjs";
import { addStringLimit } from "../../helpers/methods/add-string-limit.mjs";

export function createCardBody(title, description, tags, endsAt, bids) {
   const cardBody = createHtmlElement("div");
   cardBody.classList.add("card-body", "g-col-12", "g-col-md-6", "d-flex", "flex-column", "justify-content-between", "pb-3");

   const tagChildContainer = createHtmlElement("div");

   //  Card Body Content
   const htmlTitle = createHtmlTitle(title);
   htmlTitle.classList.add("text-capitalize");

   const wrapper = createHtmlElement("div");
   const htmlLastBidField = createHtmlLastBid(bids);
   const htmlEndsAtField = createHtmlEndsAt(endsAt);

   const descriptionLimit = addStringLimit(description);
   const htmlDescription = createHTMlDescription(descriptionLimit);
   htmlDescription.classList.add("text-capitalize");

   //  Create Component

   cardBody.appendChild(htmlTitle);
   cardBody.appendChild(tagChildContainer);

   cardBody.appendChild(htmlDescription);

   wrapper.appendChild(htmlLastBidField);
   wrapper.appendChild(htmlEndsAtField);
   cardBody.appendChild(wrapper);

   return cardBody;
}
