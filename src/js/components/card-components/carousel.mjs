import { createHtmlElement } from "../../helpers/methods/create-element.mjs";

export function createCarousel(listingCard) {
   const carouselListingContainer = document.querySelector("#carousel-listing-container");

   const cardLink = createHtmlElement("a");
   cardLink.href = "/listing-details/";
   cardLink.classList.add("carousel-item", "d-block", "text-decoration-none");

   const alignContainer = createHtmlElement("div");
   alignContainer.classList.add("w-100", "d-flex", "justify-content-center");

   const cardContainer = listingCard;
   console.log(cardContainer);

   cardLink.appendChild(alignContainer);
   alignContainer.appendChild(cardContainer);

   carouselListingContainer.appendChild(cardLink);
}
