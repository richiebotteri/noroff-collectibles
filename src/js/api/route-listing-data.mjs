import { createGridListing } from "../components/page-components/grid-listing.mjs";
import { createCarouselListing } from "../components/page-components/carousel-listing.mjs";
import { createIndexPageComponents } from "../components/index-page.mjs";
import { formatFetchData } from "./format-fetch-data.mjs";
import { createAuctionPageContent } from "../components/auction-page.mjs";

export function routeListingData(rawData) {
   const path = document.location.pathname;

   if (Array.isArray(rawData)) {
      const modifiedData = formatFetchData(rawData);
      modifiedData.forEach((listingData) => {
         if (path === "/Semester-Project-2/index.html") {
            const listingElement = createCarouselListing(listingData);
            createIndexPageComponents(listingElement, listingData);
         } else if (path === "/Semester-Project-2/auctions-page.html") {
            let listingElement = createGridListing(listingData);
            createAuctionPageContent(listingElement);
         }
      });
   }
}
