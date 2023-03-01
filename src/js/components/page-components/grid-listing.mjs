import { createHtmlElement } from "../../helpers/methods/create-element.mjs";
import { createHtmlMainImage } from "../card-components/card-elements/main-image.mjs";

import { createCardBody } from "../card-components/card-body.mjs";

export function createGridListing(apiData) {
   // Deconstruct API listing data
   const { id, title, description, mediaArray, tagsArray, endsAtDate, bids } = apiData;

   // Create card elements
   const cardLinkContainer = createHtmlElement("a");
   cardLinkContainer.id = apiData.index;

   cardLinkContainer.href = `/listing-page.html?id=${id}`;
   cardLinkContainer.classList.add("card-listing-y", "g-col-12", "g-col-md-6", "g-col-lg-4");

   const htmlImage = createHtmlMainImage(mediaArray, title);
   htmlImage.classList.add("img-thumbnail");

   const cardBody = createCardBody(title, description, tagsArray, endsAtDate, bids);

   const loader = document.querySelector("#loader");
   loader.classList.add("d-none");

   // Construct Auction Page Card
   cardLinkContainer.appendChild(htmlImage);
   cardLinkContainer.appendChild(cardBody);

   return cardLinkContainer;
}
