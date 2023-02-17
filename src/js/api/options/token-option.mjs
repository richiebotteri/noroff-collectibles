import { loadItem } from "../../storage/localStorage/load.mjs";

// For users with account token
export function tokenOption(method, formData) {
   const option = {
      method: method,
      headers: {
         "Content-type": "application/json",
         Authorization: `Bearer ${loadItem("token")}`,
      },
      body: JSON.stringify(formData),
   };

   return option;
}
