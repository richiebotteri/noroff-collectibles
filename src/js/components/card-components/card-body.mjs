import { createHTMlDescription } from "./card-elements/description.mjs";
import { createHtmlEndsAt } from "./card-elements/ends-at.mjs";
import { createHtmlElement } from "../../helpers/methods/create-element.mjs";
import { createHtmlLastBid } from "./card-elements/last-bid.mjs";
import { createHtmlTags } from "./card-elements/tags.mjs";
import { createHtmlTitle } from "./card-elements/title.mjs";

export function createCardBody(title, description, tags, endsAt, bids) {
   const cardBody = createHtmlElement("div");
   cardBody.classList.add("card-body", "g-col-12", "g-col-md-6");

   const tagChildContainer = createHtmlElement("div");

   //  Card Body Content
   const htmlTitle = createHtmlTitle(title);
   const htmlTags = createHtmlTags(tags);
   const htmlLastBidField = createHtmlLastBid(bids);
   const htmlEndsAtField = createHtmlEndsAt(endsAt);
   const htmlDescription = createHTMlDescription(description);

   if (htmlTags.length === 0) {
      tagChildContainer.classList.add("d-none");
      htmlDescription.classList.replace("card-text", "card-text--hideTags");
   } else {
      tagChildContainer.classList.add("pb-2");
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
