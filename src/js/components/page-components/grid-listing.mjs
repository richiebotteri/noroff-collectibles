import { createHtmlElement } from "../../helpers/methods/create-element.mjs";
import { createHtmlMainImage } from "../card-components/card-elements/main-image.mjs";

import { createCardBody } from "../card-components/card-body.mjs";
import { getBaseUrl } from "../../helpers/get-base-url.mjs";

export function createGridListing(apiData) {
   // Deconstruct API listing data
   const { id, title, description, mediaArray, tagsArray, endsAtDate, bids } = apiData;
   const baseUrl = getBaseUrl();
   // Create card elements
   const cardLinkContainer = createHtmlElement("a");

   cardLinkContainer.href = `${baseUrl}/listing-page.html?id=${id}`;
   cardLinkContainer.classList.add("card-listing-y", "g-col-12", "g-col-md-6");

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
