import { saveItem } from "../../storage/localStorage/save.mjs";
import { AUCTIONS_URL } from "../env.mjs";
import { authOption } from "../options/auth-option.mjs";

export async function auth(submitFormData) {
   try {
      const { method, action, ...formData } = submitFormData;

      const response = await fetch(`${AUCTIONS_URL}${action}`, authOption(method, formData));
      const result = await response.json();

      if (action === "/auth/login" && response.status === 200) {
         const { accessToken, ...profile } = result;
         saveItem("token", accessToken);
         saveItem("profile", profile);
         saveItem("userOnline", true);
         const signInMsg = document.querySelector("#sign-in-out-msg");
         signInMsg.classList.replace("d-none", "d-block");
         setTimeout(() => {
            location.pathname = "/profile.html";
         }, 1000);
      }

      if (action === "/auth/register" && response.status === 201) {
         const registerSuccessMsg = document.querySelector("#register-success-msg");
         registerSuccessMsg.classList.replace("d-none", "d-block");
         setTimeout(() => {
            location.pathname = "/login.html";
         }, 1000);
      }
   } catch (error) {
      console.log(error);
   }
}
