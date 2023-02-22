import { auth } from "../api/requests/auth.mjs";
import { createListing } from "../api/requests/create-listing.mjs";
import { getListings } from "../api/requests/get-listings.mjs";

export function routeFormObject(submitFormData) {
   const { action = null } = submitFormData;
   if (action === "/auth/register" || action === "/auth/login") {
      auth(submitFormData);
   } else if (action === "/listings") {
      createListing(submitFormData);
   } else {
      const searchInputValue = submitFormData.searchfield;
      getListings(searchInputValue);
   }
}
