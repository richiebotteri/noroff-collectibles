import { AUCTIONS_URL } from "../env.mjs";
import { tokenOption } from "../options/token-option.mjs";

export async function createListing(submitFormData) {
   try {
      const { method, action, ...formData } = submitFormData;
      console.log(action);
      const response = await fetch(`${AUCTIONS_URL}${action}`, tokenOption(method, formData));
      const result = await response.json();
      console.log(result);
   } catch (error) {
      console.log(error);
   }
}
