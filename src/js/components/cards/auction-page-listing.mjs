import { createHtmlElement } from "../../helpers/methods/create-element.mjs";
import { createHtmlMainImage } from "../card-components/card-elements/main-image.mjs";
import { createTotalListingHtml } from "../card-components/card-elements/total-listings.mjs";

import { createCardBody } from "../card-components/card-body.mjs";

export function createAuctionPageListings(ApiListingData, listingIndex) {
   // Deconstruct API listing data
   const { id, title, description, media, tags, created, updated, endsAt, _count, bids, seller } = ApiListingData;

   // Get index page listing container and total listings title
   const listingAuctionGrid = document.querySelector("#listing-auction-grid");
   const totalListingsContainer = document.querySelector("#listing-count");

   // Create card elements
   const totalListingParagraph = createTotalListingHtml(listingIndex);

   const cardLinkContainer = createHtmlElement("a");
   cardLinkContainer.href = "./listing-details/";
   cardLinkContainer.classList.add("card-listing-y", "g-col-12", "g-col-md-6", "g-col-lg-4", "d-block");

   const htmlImage = createHtmlMainImage(media, title);
   htmlImage.classList.add("img-thumbnail");

   const cardBody = createCardBody(title, description, tags, endsAt, bids);

   // Construct Auction Page Card
   cardLinkContainer.appendChild(htmlImage);
   cardLinkContainer.appendChild(cardBody);
   listingAuctionGrid.appendChild(cardLinkContainer);
   totalListingsContainer.replaceChildren(totalListingParagraph);
}
