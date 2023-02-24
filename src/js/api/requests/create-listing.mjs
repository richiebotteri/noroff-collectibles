import { AUCTIONS_URL } from "../env.mjs";
import { tokenOption } from "../options/token-option.mjs";

export async function createListing(submitFormData) {
   try {
      const { method, action, ...formData } = submitFormData;
      const response = await fetch(`${AUCTIONS_URL}${action}`, tokenOption(method, formData));
      const result = await response.json();
      if (response.status === 201) {
         setTimeout(() => {
            location.pathname = "/home.html";
         }, 1000);
      }
   } catch (error) {
      console.log(error);
   }
}
