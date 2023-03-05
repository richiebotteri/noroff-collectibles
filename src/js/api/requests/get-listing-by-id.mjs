import { AUCTIONS_URL } from "../env.mjs";
import { formatFetchData } from "../format-fetch-data.mjs";
import { guestOption } from "../options/guest-option.mjs";

export async function getListingById(id) {
   try {
      const response = await fetch(`${AUCTIONS_URL}/listings/${id}?_bids=true&_seller=true`, guestOption);
      const listing = await response.json();
      if (response.ok === true) {
         const array = [listing];
         return formatFetchData(array);
      }
   } catch (error) {
      console.log(error);
   }
}
