import { createAuctionPageListings } from "./cards/auction-page-listing.mjs";
import { createIndexPageListings } from "./cards/index-page-listing.mjs";
import { createListingPageContent } from "./listing-page.mjs";
import { createSearchResult } from "./search/create-search-result.mjs";

export function routeListingData(listingObjects, searchValue) {
   listingObjects.forEach((apiListingObject, index) => {
      // Route data to create card components

      const path = document.location.pathname;
      if (path === "/index.html" || path === "/Semester-Project-2/index.html") {
         createIndexPageListings(apiListingObject, index);
      } else if (path === "/auctions-page.html" || path === "/Semester-Project-2/auctions-page.html") {
         createAuctionPageListings(apiListingObject, index);
      } else if (path === "/listing-page.html" || path === "/Semester-Project-2/listing-page.html") {
         createListingPageContent(apiListingObject, index);
      }

      if (searchValue) {
         // Global Header
         createSearchResult(apiListingObject, index, searchValue);
      }
   });
}
