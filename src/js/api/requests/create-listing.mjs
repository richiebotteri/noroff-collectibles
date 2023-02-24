import { AUCTIONS_URL } from "../env.mjs";
import { tokenOption } from "../options/token-option.mjs";

export async function createListing(submitFormData) {
   try {
      const { method, action, ...formData } = submitFormData;
      const response = await fetch(`${AUCTIONS_URL}${action}`, tokenOption(method, formData));
      const result = await response.json();

      if (response.status === 200) {
         location.pathname = "/home.html";
      }
   } catch (error) {
      console.log(error);
   }
}
