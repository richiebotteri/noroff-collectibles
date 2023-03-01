import { createHtmlElement } from "../../helpers/methods/create-element.mjs";
import { createCardBody } from "../card-components/card-body.mjs";
import { createHtmlMainImage } from "../card-components/card-elements/main-image.mjs";

export function createCarouselListing(apiData) {
   // Deconstruct API listing data

   const { id, title, description, mediaArray, tagsArray, endsAtDate, bids } = apiData;

   // Create card elements
   const cardLink = createHtmlElement("a");
   cardLink.href = `/Semester-Project-2/listing-page.html?id=${id}`;

   const { index } = apiData;

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

   const htmlImage = createHtmlMainImage(mediaArray, title);
   htmlImage.classList.add("img-thumbnail--homepage", "g-col-12", "g-col-md-6");

   const cardBody = createCardBody(title, description, tagsArray, endsAtDate, bids);

   const loader = document.querySelector("#loader");
   loader.classList.add("d-none");

   cardLink.appendChild(alignContainer);
   alignContainer.appendChild(cardContainer);
   cardContainer.appendChild(grid);
   grid.appendChild(htmlImage);
   grid.appendChild(cardBody);

   return cardLink;
}
