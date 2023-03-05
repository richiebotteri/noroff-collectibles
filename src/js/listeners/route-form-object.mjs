import { auth } from "../api/requests/auth.mjs";
import { createListing } from "../api/requests/create-listing.mjs";
import { getSearch } from "../api/requests/get-search-data.mjs";
import { postBid } from "../api/requests/post-bid.mjs";
import { updateAvatar } from "../api/requests/update-avatar.mjs";

export function routeFormObject(formData) {
   const { action = null } = formData;

   if (action === "/auth/register" || action === "/auth/login") {
      auth(formData);
   } else if (action === "/listings") {
      if (formData.amount) {
         postBid(formData);
      } else {
         createListing(formData);
      }
   } else if (action === "/profiles") {
      updateAvatar(formData);
   } else {
      const searchInputValue = formData.searchfield;
      getSearch(searchInputValue);
   }
}
