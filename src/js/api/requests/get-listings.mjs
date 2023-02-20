import { routeListingData } from "../../components/route-listing-data.mjs";
import { AUCTIONS_URL } from "../env.mjs";
import { guestOption } from "../options/guest-option.mjs";

export async function getListings() {
   try {
      const response = await fetch(`${AUCTIONS_URL}/listings/?sort=created&sortOrder=desc&_seller=true&_bids=true`, guestOption);
      const listings = await response.json();
      if (response.status === 200) {
         setTimeout(() => {
            routeListingData(listings);
         }, 1000);
      }
   } catch (error) {
      console.log(error);
   }
}
