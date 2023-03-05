import { saveItem } from "../../storage/localStorage/save.mjs";
import { AUCTIONS_URL } from "../env.mjs";
import { authOption } from "../options/auth-option.mjs";

export async function auth(submitFormData) {
   try {
      const { method, action, ...formData } = submitFormData;

      const response = await fetch(`${AUCTIONS_URL}${action}`, authOption(method, formData));
      const result = await response.json();

      const failMsgContainer = document.querySelector("#api-fail-msg");
      const failMsgText = document.querySelector("#api-fail-msg-text");

      // Profile login success
      if (action === "/auth/login" && response.status === 200) {
         const { accessToken, ...profile } = result;
         saveItem("token", accessToken);
         saveItem("profile", profile);
         saveItem("userOnline", true);
         const signInMsg = document.querySelector("#sign-in-out-msg");
         signInMsg.classList.replace("d-none", "d-block");
         setTimeout(() => {
            location.pathname = "/Semester-Project-2/profile.html";
         }, 1000);
      }

      // Profile registration success
      if (action === "/auth/register" && response.status === 201) {
         const registerSuccessMsg = document.querySelector("#register-success-msg");
         registerSuccessMsg.classList.replace("d-none", "d-block");
         setTimeout(() => {
            location.pathname = "/Semester-Project-2/login.html";
         }, 1000);
      }

      // Profile already exist
      if (response.status === 400) {
         failMsgContainer.classList.replace("d-none", "d-block");
         const responseErrorText = result.errors[0].message;
         failMsgText.innerText = responseErrorText;
         setTimeout(() => {
            failMsgContainer.classList.replace("d-block", "d-none");
         }, 3500);
      }
   } catch (error) {
      console.log(error);
   }
}
