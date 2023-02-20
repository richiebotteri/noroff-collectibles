import { createAuctionPageListings } from "./cards/auction-page-listing.mjs";
import { createIndexPageListings } from "./cards/index-page-listing.mjs";
import { createListingPageContent } from "./listing-page.mjs";

export function routeListingData(listingObjects) {
   listingObjects.forEach((apiListingObject, index) => {
      // Route data to create card components

      const path = document.location.pathname;

      if (path === "/index.html" || path === "/Semester-Project-2/") {
         createIndexPageListings(apiListingObject, index);
      } else if (path === "/auctions/" || path === "/Semester-Project-2/auctions/") {
         createAuctionPageListings(apiListingObject, index);
      } else if (path === "/listing-details/" || path === "/Semester-Project-2/listing-details/") {
         createListingPageContent(apiListingObject, index);
      }
   });
}
