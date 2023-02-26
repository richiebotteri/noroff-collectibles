import { AUCTIONS_URL } from "../env.mjs";
import { guestOption } from "../options/guest-option.mjs";
import { routeListingData } from "../route-listing-data.mjs";

export async function getListings() {
   try {
      const response = await fetch(`${AUCTIONS_URL}/listings/?sort=created&sortOrder=desc&_seller=true&_bids=true`, guestOption);
      const listings = await response.json();
      if (response.status === 200) {
         routeListingData(listings);
      }
   } catch (error) {
      console.log(error);
   }
}
