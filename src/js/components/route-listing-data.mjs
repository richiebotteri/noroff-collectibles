import { createCardBody } from "./card-components/card-body.mjs";
import { createHtmlMainImage } from "./card-components/card-elements/main-image.mjs";
import { createAuctionPageListings } from "./cards/auction-page-listing.mjs";
import { createIndexPageListings } from "./cards/index-page-listing.mjs";

export function routeListingData(listingObjects) {
   listingObjects.forEach((apiListingObject, index) => {
      // Route data to create card components

      const path = window.location.pathname;
      if (path === "/auctions/") {
         createAuctionPageListings(apiListingObject, index);
      } else {
         createIndexPageListings(apiListingObject, index);
      }
   });
}
