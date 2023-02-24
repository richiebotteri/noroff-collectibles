import { loadItem } from "../storage/localStorage/load.mjs";
import { createGridListing } from "./cards/grid-listing.mjs";
import { createCarouselListing } from "./cards/carousel-listing.mjs";
import { createListingPageContent } from "./listing-page.mjs";
import { createSearchResult } from "./search/create-search-result.mjs";

export function routeListingData(listingObjects, searchValue) {
   listingObjects.forEach((apiListingObject, index) => {
      const { seller } = apiListingObject;
      const sellerName = seller.name;

      const profile = loadItem("profile");
      const profileName = profile.name;

      // Route data to create card components

      const path = document.location.pathname;
      if (path === "/index.html" || path === "/Semester-Project-2/index.html") {
         createCarouselListing(apiListingObject, index);
      } else if (path === "/home.html" && sellerName === profileName) {
         createGridListing(apiListingObject, index);
      } else if (path === "/auctions-page.html" || path === "/Semester-Project-2/auctions-page.html") {
         createGridListing(apiListingObject, index);
      } else if (path === "/listing-page.html" || path === "/Semester-Project-2/listing-page.html") {
         createListingPageContent(apiListingObject, index);
      }

      if (searchValue) {
         // Global Header
         createSearchResult(apiListingObject, index, searchValue);
      }
   });
}
