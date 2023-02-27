import { auth } from "../api/requests/auth.mjs";
import { createListing } from "../api/requests/create-listing.mjs";
import { getSearch } from "../api/requests/get-search-data.mjs";
import { updateAvatar } from "../api/requests/update-avatar.mjs";

export function routeFormObject(submitFormData) {
   const { action = null } = submitFormData;
   const path = location.pathname;
   if (action === "/auth/register" || action === "/auth/login") {
      auth(submitFormData);
   } else if (action === "/listings") {
      createListing(submitFormData);
   } else if (action === "/profiles") {
      updateAvatar(submitFormData);
   } else {
      const searchInputValue = submitFormData.searchfield;
      getSearch(searchInputValue);
   }
}
