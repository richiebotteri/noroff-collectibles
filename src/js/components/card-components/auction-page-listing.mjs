import { createHtmlElement } from "../../helpers/methods/create-element.mjs";

export function createAuctionListings(cardBody, htmlImage, index) {
   const listingAuctionGrid = document.querySelector("#listing-auction-grid");

   const cardLinkContainer = createHtmlElement("a");
   cardLinkContainer.href = "/listing-details/";
   cardLinkContainer.classList.add("card-listing-y", "g-col-12", "g-col-md-6", "g-col-lg-4", "d-block");

   htmlImage.classList.remove("my-card-img");
   htmlImage.classList.remove("g-col-12");
   htmlImage.classList.remove("g-col-md-6");
   htmlImage.classList.add("card-img-top");

   cardLinkContainer.appendChild(htmlImage);
   cardLinkContainer.appendChild(cardBody);

   listingAuctionGrid.appendChild(cardLinkContainer);
}
