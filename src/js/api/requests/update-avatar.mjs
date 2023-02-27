import { loadItem } from "../../storage/localStorage/load.mjs";
import { AUCTIONS_URL } from "../env.mjs";
import { tokenOption } from "../options/token-option.mjs";

export async function updateAvatar(submitFormData) {
   try {
      const profile = loadItem("profile");
      const profileUsername = profile.name;

      const { method, action, ...formData } = submitFormData;

      const response = await fetch(`${AUCTIONS_URL}${action}/${profileUsername}/media`, tokenOption(method, formData));
      const result = await response.json();
      if (response.status === 200) {
         const successMsg = document.querySelector("#api-success-msg");
         successMsg.classList.replace("d-none", "d-block");

         setTimeout(() => {
            location.reload();
         }, 1500);
      }
   } catch (error) {
      console.log(error);
   }
}
