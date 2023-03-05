import { AUCTIONS_URL } from "../env.mjs";
import { tokenOption } from "../options/token-option.mjs";

export async function createListing(submitFormData) {
   try {
      const { method, action, ...formData } = submitFormData;
      const response = await fetch(`${AUCTIONS_URL}${action}`, tokenOption(method, formData));
      const result = await response.json();

      const failMsgContainer = document.querySelector("#api-fail-msg");
      const failMsgText = document.querySelector("#api-fail-msg-text");

      if (response.status === 201) {
         const createSuccessMsg = document.querySelector("#create-success-msg");
         successMsg.classList.replace("d-none", "d-block");

         setTimeout(() => {
            location.pathname = "/Semester-Project-2/profile.html";
         }, 1500);
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
