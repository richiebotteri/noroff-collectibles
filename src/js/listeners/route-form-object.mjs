import { auth } from "../api/requests/auth.mjs";
import { createListing } from "../api/requests/create-listing.mjs";

export function routeFormObject(submitFormData) {
   const { action } = submitFormData;
   if (action === "/auth/register" || action === "/auth/login") {
      auth(submitFormData);
   } else if (action === "/listings") {
      createListing(submitFormData);
   }
}
