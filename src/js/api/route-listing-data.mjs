import { loadItem } from "../storage/localStorage/load.mjs";
import { createGridListing } from "../components/page-components/grid-listing.mjs";
import { createCarouselListing } from "../components/page-components/carousel-listing.mjs";
import { createListingPageContent } from "../components/listing-page.mjs";
import { createHomePageContent } from "../components/home-profile-page.mjs";
import { createAuctionPageContent } from "../components/auction-page.mjs";
import { createIndexPageComponents } from "../components/index-page.mjs";

export function routeListingData(apiData) {
   const path = document.location.pathname;

   if (apiData && Array.isArray(apiData.mediaArray)) {
      // Listing Data
      if (path === "/index.html" || path === "/Semester-Project-2/index.html") {
         const listing = createCarouselListing(apiData);
         createIndexPageComponents(listing, apiData);
      } else if (path === "/auctions-page.html" || path === "/Semester-Project-2/auctions-page.html") {
         let listing = createGridListing(apiData);
         createAuctionPageContent(listing, apiData);
      } else if (path === "/listing-page.html" || path === "/Semester-Project-2/listing-page.html") {
         createListingPageContent(apiData);
      } else if (path === "/home.html") {
         const { seller } = apiData;
         const sellerName = seller.name;

         const profile = loadItem("profile");
         const profileName = profile.name;

         if (sellerName === profileName) {
            let listing = createGridListing(apiData);
            createHomePageContent(listing);
         }
      }
   } else {
      // Profile
      createHomePageContent(apiData);
   }
}
