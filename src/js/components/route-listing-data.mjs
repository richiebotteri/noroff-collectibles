import { loadItem } from "../storage/localStorage/load.mjs";
import { createGridListing } from "./page-components/grid-listing.mjs";
import { createCarouselListing } from "./page-components/carousel-listing.mjs";
import { createListingPageContent } from "./listing-page.mjs";
import { createSearchResult } from "./search/create-search-result.mjs";
import { createHomePageContent } from "./home-profile-page.mjs";
import { createAuctionPageContent } from "./auction-page.mjs";

export function routeListingData(apiData, searchValue) {
   if (Array.isArray(apiData)) {
      apiData.forEach((apiListingObject, index) => {
         // Route data to create card components

         const path = document.location.pathname;
         if (path === "/index.html" || path === "/Semester-Project-2/index.html") {
            createCarouselListing(apiListingObject, index);
         } else if (path === "/auctions-page.html" || path === "/Semester-Project-2/auctions-page.html") {
            let listing = createGridListing(apiListingObject, index);
            createAuctionPageContent(listing, apiData);
         } else if (path === "/listing-page.html" || path === "/Semester-Project-2/listing-page.html") {
            createListingPageContent(apiListingObject, index);
         } else if (path === "/home.html") {
            const { seller } = apiListingObject;
            const sellerName = seller.name;

            const profile = loadItem("profile");
            const profileName = profile.name;

            if (sellerName === profileName) {
               console.log(apiData);
               let listing = createGridListing(apiListingObject, index);
               createHomePageContent(listing, index);
            }
         }

         if (searchValue) {
            // Global Header
            createSearchResult(apiListingObject, index, searchValue);
         }
      });
   } else {
      createHomePageContent(apiData);
   }
}
