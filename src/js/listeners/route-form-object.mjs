import { auth } from "../api/requests/auth.mjs";
import { createListing } from "../api/requests/create-listing.mjs";
import { getListings } from "../api/requests/get-listings.mjs";
import { getProfile } from "../api/requests/get-profile.mjs";

export function routeFormObject(submitFormData) {
   const { action = null } = submitFormData;
   const path = location.pathname;
   if (action === "/auth/register" || action === "/auth/login") {
      auth(submitFormData);
   } else if (action === "/listings") {
      createListing(submitFormData);
   } else {
      const searchInputValue = submitFormData.searchfield;
   }
}
