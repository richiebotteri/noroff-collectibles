import { AUCTIONS_URL } from "../env.mjs";
import { guestOption } from "../options/guest-option.mjs";

export async function getListings() {
   try {
      const response = await fetch(`${AUCTIONS_URL}/listings`, guestOption);
      const result = await response.json();
      console.log(result);
   } catch (error) {
      console.log(error);
   }
}
