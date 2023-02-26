import { createSearchResult } from "../../components/search/create-search-result.mjs";
import { AUCTIONS_URL } from "../env.mjs";
import { guestOption } from "../options/guest-option.mjs";

export async function getSearch(searchValue) {
   try {
      const response = await fetch(`${AUCTIONS_URL}/listings/?sort=created&sortOrder=desc&_seller=true&_bids=true`, guestOption);
      const listings = await response.json();
      if (response.status === 200) {
         createSearchResult(listings, searchValue);
      }
   } catch (error) {
      console.log(error);
   }
}
