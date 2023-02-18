import { createHtmlElement } from "../../helpers/methods/create-element.mjs";

export function createCarousel(cardBody, htmlImage, index) {
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

   const cardContainer = createHtmlElement("div");
   cardContainer.classList.add("card-listing-responsive", "m-sm-2");

   const grid = createHtmlElement("div");
   grid.classList.add("grid", "gap-0");

   // Construct Component

   cardLink.appendChild(alignContainer);
   alignContainer.appendChild(cardContainer);

   cardContainer.appendChild(grid);

   grid.appendChild(htmlImage);
   grid.appendChild(cardBody);

   carouselListingContainer.appendChild(cardLink);
}
