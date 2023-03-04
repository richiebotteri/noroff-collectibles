import { sliceApiData } from "../../helpers/slice-api-data.mjs";
import { AUCTIONS_URL } from "../env.mjs";
import { guestOption } from "../options/guest-option.mjs";
import { routeListingData } from "../route-listing-data.mjs";

export async function getListings(loadMoreListings = 10) {
   try {
      const response = await fetch(`${AUCTIONS_URL}/listings/?limit=100&_bids=true&_seller=true&_active=true&sort=created&sortOrder=desc`, guestOption);

      const listings = await response.json();

      if (response.status === 200) {
         const selectedListings = sliceApiData(listings, loadMoreListings);

         const path = location.pathname;
         if (path === "/auctions-page.html") {
            const loadMoreBtn = document.querySelector("#load-more");
            loadMoreBtn.classList.replace("d-none", "d-block");
         }

         routeListingData(selectedListings);
      }
   } catch (error) {
      console.log(error);
   }
}
