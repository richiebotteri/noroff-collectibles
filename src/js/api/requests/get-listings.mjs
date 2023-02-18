import { routeListingData } from "../../components/route-listing-data.mjs";
import { AUCTIONS_URL } from "../env.mjs";
import { guestOption } from "../options/guest-option.mjs";

export async function getListings() {
   try {
      const response = await fetch(`${AUCTIONS_URL}/listings/8857ef11-069e-467c-acbe-aff6a795ab19/?_seller=true&_bids=true`, guestOption);
      const listings = await response.json();
      if (response.status === 200) {
         routeListingData(listings);
      }
   } catch (error) {
      console.log(error);
   }
}
