import { createHtmlElement } from "../../helpers/methods/create-element.mjs";
import { createHTMlDescription } from "../card-elements/description.mjs";
import { createHtmlEndsAt } from "../card-elements/ends-at.mjs";
import { createHtmlLastBid } from "../card-elements/last-bid.mjs";
import { createHtmlMainImage } from "../card-elements/main-image.mjs";
import { createHtmlTags } from "../card-elements/tags.mjs";
import { createHtmlTitle } from "../card-elements/title.mjs";
import { createCarousel } from "./carousel.mjs";

export function createListingCard(title, description, media, tags, endsAt, _count, bids, index) {
   const cardContainer = createHtmlElement("div");
   cardContainer.classList.add("card-listing-responsive", "m-sm-2");

   const grid = createHtmlElement("div");
   grid.classList.add("grid", "gap-0");

   const cardBody = createHtmlElement("div");
   cardBody.classList.add("card-body", "g-col-12", "g-col-md-6");

   const tagChildContainer = createHtmlElement("div");

   //  Main Image URL
   const htmlMainImage = createHtmlMainImage(media, title);

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

   cardContainer.appendChild(grid);

   grid.appendChild(htmlMainImage);
   grid.appendChild(cardBody);

   cardBody.appendChild(htmlTitle);
   cardBody.appendChild(tagChildContainer);
   htmlTags.forEach((htmlTag) => {
      tagChildContainer.appendChild(htmlTag);
   });

   cardBody.appendChild(htmlDescription);
   cardBody.appendChild(htmlLastBidField);
   cardBody.appendChild(htmlEndsAtField);

   createCarousel(cardContainer, index);
}
