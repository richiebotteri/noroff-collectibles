import { createHtmlElement } from "../../helpers/methods/create-element.mjs";

export function createCarousel(listingCard, index) {
   const carouselListingContainer = document.querySelector("#carousel-listing-container");

   const cardLink = createHtmlElement("a");
   cardLink.href = "./listing-details/";
   if (index === 0) {
      cardLink.classList.add("carousel-item", "active", "text-decoration-none");
   } else {
      cardLink.classList.add("carousel-item", "text-decoration-none");
   }

   const alignContainer = createHtmlElement("div");
   alignContainer.classList.add("w-100", "d-flex", "justify-content-center");

   const cardContainer = listingCard;

   cardLink.appendChild(alignContainer);
   alignContainer.appendChild(cardContainer);

   carouselListingContainer.appendChild(cardLink);
}
