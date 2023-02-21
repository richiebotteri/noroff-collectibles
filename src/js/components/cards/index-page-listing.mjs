import { createHtmlElement } from "../../helpers/methods/create-element.mjs";
import { createCardBody } from "../card-components/card-body.mjs";
import { createHtmlMainImage } from "../card-components/card-elements/main-image.mjs";

export function createIndexPageListings(ApiListingData, listingIndex) {
   // Deconstruct API listing data
   const { id, title, description, media, tags, created, updated, endsAt, _count, bids, seller } = ApiListingData;

   // Get index page listing container
   const carouselListingContainer = document.querySelector("#carousel-listing-container");

   // Create card elements
   const cardLink = createHtmlElement("a");
   cardLink.href = `/listing-page.html?id=${id}`;

   if (listingIndex === 0) {
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

   const htmlImage = createHtmlMainImage(media, title);
   htmlImage.classList.add("img-thumbnail--homepage", "g-col-12", "g-col-md-6");

   const cardBody = createCardBody(title, description, tags, endsAt, bids);

   const loader = document.querySelector("#loader");
   loader.classList.add("d-none");

   cardLink.appendChild(alignContainer);
   alignContainer.appendChild(cardContainer);
   cardContainer.appendChild(grid);
   grid.appendChild(htmlImage);
   grid.appendChild(cardBody);

   const listingItems = carouselListingContainer.children.length;

   if (listingItems < 8) {
      carouselListingContainer.appendChild(cardLink);
   }
}
