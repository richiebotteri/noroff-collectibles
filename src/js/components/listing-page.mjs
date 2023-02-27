import { createHtmlElement } from "../helpers/methods/create-element.mjs";
import { showLastBid } from "../helpers/methods/show-last-bid.mjs";
import { createBidElement } from "./bids/createBidElement.mjs";
import { createHtmlImages } from "./card-components/card-elements/images.mjs";
import { createHtmlMainImage } from "./card-components/card-elements/main-image.mjs";
import { createHtmlTags } from "./card-components/card-elements/tags.mjs";

export function createListingPageContent(apiData) {
   const url = new URL(document.location);
   const queryStringId = url.searchParams.get("id");

   // Deconstruct API listing data
   const { id, title, description, mediaArray, tagsArray, createdDate, updatedDate, endsAtDate, bidsCount, bids, seller } = apiData;

   if (queryStringId === id) {
      const lastBidAmount = showLastBid(bids);

      // Title section
      //

      const listingTitle = document.querySelector("#listing-title");
      listingTitle.innerText = title;

      const tagsContainer = document.querySelector("#listing-tags");
      const listingTagsArray = createHtmlTags(tagsArray);

      listingTagsArray.forEach((listingTag) => {
         tagsContainer.appendChild(listingTag);
      });

      // Top card section
      //

      // Card body
      const listingBids = document.querySelector("#listing-bids");
      listingBids.innerText = bidsCount;

      const listingLastBid = document.querySelector("#listing-last-bid");
      listingLastBid.innerText = lastBidAmount;

      const listingCreated = document.querySelector("#listing-created");
      listingCreated.innerText = createdDate;

      const listingDeadline = document.querySelector("#listing-deadline");
      listingDeadline.innerText = endsAtDate;

      // Media
      const listingImgContainer = document.querySelector("#listing-img-container");
      const mediaCarousel = document.querySelector("#media-carousel");
      const carouselIndicatorContainer = document.querySelector("#listing-carousel-indicators");
      const mediaCarouselContainer = document.querySelector("#media-carousel-container");

      if (mediaArray.length === 1) {
         // Generate single image
         const mainImage = createHtmlMainImage(mediaArray, title);
         mainImage.classList.add("img-thumbnail--listing", "g-col-6");
         listingImgContainer.replaceWith(mainImage);
      } else {
         // Generate image carousel
         listingImgContainer.classList.add("d-none");
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

      // Description
      const listingDescription = document.querySelector("#listing-description");
      listingDescription.innerText = description;

      // Seller
      const sellerImage = document.querySelector("#seller-image");
      const sellerName = document.querySelector("#seller-name");
      const sellerEmail = document.querySelector("#seller-email");
      const sellerAuctionsWon = document.querySelector("#seller-auctions-won");

      const { avatar, email, name, wins } = seller;
      const totalWins = wins.length;

      sellerImage.src = avatar;
      sellerImage.alt = name;

      sellerName.innerHTML = name;
      sellerEmail.innerHTML = email;
      sellerAuctionsWon.innerText = totalWins;

      // Bid history

      const bidContainer = document.querySelector("#bid-container");
      const listingBidderElement = createBidElement(bids);

      if (Array.isArray(listingBidderElement)) {
         listingBidderElement.forEach((listingBid) => {
            bidContainer.appendChild(listingBid);
         });
      }
   }
}
