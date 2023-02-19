import { createAuctionPageListings } from "./cards/auction-page-listing.mjs";
import { createIndexPageListings } from "./cards/index-page-listing.mjs";

export function routeListingData(listingObjects) {
   listingObjects.forEach((apiListingObject, index) => {
      // Route data to create card components

      const path = window.location.pathname;
      if (path === "/auctions/" || path === "/Semester-Project-2/auctions/") {
         createAuctionPageListings(apiListingObject, index);
      } else if (path === "/index.html" || path === "/Semester-Project-2/") {
         createIndexPageListings(apiListingObject, index);
      }
   });
}
