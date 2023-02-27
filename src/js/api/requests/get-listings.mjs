import { AUCTIONS_URL } from "../env.mjs";
import { guestOption } from "../options/guest-option.mjs";
import { routeListingData } from "../route-listing-data.mjs";

export async function getListings() {
   try {
      const response = await fetch(`${AUCTIONS_URL}/listings/?_bids=true&_seller=true&_active=true&sort=created&sortOrder=desc`, guestOption);
      const listings = await response.json();

      if (response.status === 200) {
         routeListingData(listings);
      }
   } catch (error) {
      console.log(error);
   }
}
