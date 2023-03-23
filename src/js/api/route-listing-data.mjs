import { createGridListing } from "../components/page-components/grid-listing.mjs";
import { createCarouselListing } from "../components/page-components/carousel-listing.mjs";
import { createIndexPageComponents } from "../components/index-page.mjs";
import { createAuctionPageContent } from "../components/auction-page.mjs";
import getUrlPathname from "../helpers/get-url-pathname.mjs";
import { getBaseUrl } from "../helpers/get-base-url.mjs";

export function routeListingData(allListingsData) {
   if (Array.isArray(allListingsData)) {
      const baseUrl = getBaseUrl();
      const urlPathName = getUrlPathname();

      allListingsData.forEach((listingData) => {
         if (urlPathName === baseUrl + "/index.html") {
            const listingElement = createCarouselListing(listingData);
            createIndexPageComponents(listingElement, listingData);
         } else if (urlPathName === baseUrl + "/auctions-page.html") {
            let listingElement = createGridListing(listingData);
            createAuctionPageContent(listingElement);
         }
      });
   }
}
