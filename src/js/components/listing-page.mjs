import { createHtmlElement } from "../helpers/methods/create-element.mjs";
import { createCardBodyExpanded } from "./card-components/card-body-expanded.mjs";
import { createHtmlImages } from "./card-components/card-elements/images.mjs";
import { createHtmlMainImage } from "./card-components/card-elements/main-image.mjs";
import { createHtmlTags } from "./card-components/card-elements/tags.mjs";

export function createListingPageContent(ApiListingData, index) {
   const url = new URL(document.location);
   const queryStringId = url.searchParams.get("id");

   // Deconstruct API listing data
   const { id, title, description, media, tags, created, updated, endsAt, _count, bids, seller } = ApiListingData;
   const mediaArray = media;
   // Only displaying cards with images
   if (mediaArray.length >= 1 && queryStringId === id) {
      const titleSection = document.querySelector("#listing-title-section");

      if (titleSection.children.length === 0) {
         // HEADER SECTION

         const tagsContainer = createHtmlElement("div");
         tagsContainer.classList.add("d-flex", "flex-wrap", "gap-1");
         const listingTitle = createHtmlElement("h1");
         listingTitle.classList.add("text-capitalize");
         listingTitle.innerText = title;
         const listingTagsArray = createHtmlTags(tags);

         titleSection.appendChild(listingTitle);
         titleSection.appendChild(tagsContainer);

         listingTagsArray.forEach((listingTag) => {
            tagsContainer.appendChild(listingTag);
         });

         // CONTENT SECTION
         const listingDataContainer = document.querySelector("#listing-data-container");

         // carousel
         const mediaCarousel = document.querySelector("#media-carousel");
         const carouselIndicatorContainer = document.querySelector("#listing-carousel-indicators");
         const mediaCarouselContainer = document.querySelector("#media-carousel-container");

         // Card body
         const cardBody = createCardBodyExpanded(created, bids, endsAt, _count);

         // Switch image carousel if more than one image

         if (mediaArray.length === 1) {
            const mainImage = createHtmlMainImage(media, title);
            mainImage.classList.add("img-thumbnail--listingpage-static", "g-col-12", "g-col-lg-6");
            listingDataContainer.appendChild(mainImage);
         } else {
            mediaArray.forEach((item, index) => {
               const carouselIndicatorButton = createHtmlElement("button");
               carouselIndicatorButton.setAttribute("aria-label", `Slide ${index}`);
               carouselIndicatorButton.setAttribute("aria-current", "true");
               carouselIndicatorButton.classList.add("active");
               carouselIndicatorButton.dataset.bsSlideTo = `${index}`;
               carouselIndicatorButton.dataset.bsTarget = `#media-carousel`;
               carouselIndicatorContainer.appendChild(carouselIndicatorButton);

               let carouselMediaItem = "";
               carouselMediaItem = createHtmlImages(item, title);

               if (index < 1) {
                  mediaCarouselContainer.appendChild(carouselMediaItem);
                  carouselMediaItem.classList.add("active");
               } else {
                  mediaCarouselContainer.appendChild(carouselMediaItem);
               }

               mediaCarousel.classList.remove("d-none");
            });
         }

         listingDataContainer.appendChild(cardBody);
      }
   }
}
