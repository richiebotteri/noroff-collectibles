import { createHTMlDescription } from "./card-elements/description.mjs";
import { createHtmlEndsAt } from "./card-elements/ends-at.mjs";
import { createHtmlElement } from "../../helpers/methods/create-element.mjs";
import { createHtmlLastBid } from "./card-elements/last-bid.mjs";
import { createHtmlTags } from "./card-elements/tags.mjs";
import { createHtmlTitle } from "./card-elements/title.mjs";
import { addStringLimit } from "../../helpers/methods/add-string-limit.mjs";

export function createCardBody(title, description, tags, endsAt, bids) {
   const cardBody = createHtmlElement("div");
   cardBody.classList.add("card-body", "g-col-12", "g-col-md-6");

   const tagChildContainer = createHtmlElement("div");

   //  Card Body Content
   const htmlTitle = createHtmlTitle(title);
   const htmlTags = createHtmlTags(tags);
   const htmlLastBidField = createHtmlLastBid(bids);
   const htmlEndsAtField = createHtmlEndsAt(endsAt);

   const descriptionLimit = addStringLimit(description);

   const htmlDescription = createHTMlDescription(descriptionLimit);

   if (htmlTags.length === 0) {
      tagChildContainer.classList.add("d-none");
   } else {
      tagChildContainer.classList.add("d-flex", "flex-wrap", "gap-1", "pb-2");
   }

   //  Create Component

   cardBody.appendChild(htmlTitle);
   cardBody.appendChild(tagChildContainer);
   htmlTags.forEach((htmlTag) => {
      tagChildContainer.appendChild(htmlTag);
   });

   cardBody.appendChild(htmlDescription);
   cardBody.appendChild(htmlLastBidField);
   cardBody.appendChild(htmlEndsAtField);

   return cardBody;
}
