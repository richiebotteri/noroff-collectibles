import { AUCTIONS_URL } from "../env.mjs";
import { tokenOption } from "../options/token-option.mjs";

export async function postBid(bidFormData) {
   try {
      const failMsgContainer = document.querySelector("#api-fail-msg");
      const failMsgText = document.querySelector("#api-fail-msg-text");
      const url = new URL(document.location);
      const id = url.searchParams.get("id");
      const { method, action, ...formData } = bidFormData;

      const response = await fetch(`${AUCTIONS_URL}${action}/${id}/bids`, tokenOption(method, formData));
      const result = await response.json();

      if (response.status === 200) {
         const successMsg = document.querySelector("#api-success-msg");
         successMsg.classList.replace("d-none", "d-block");

         setTimeout(() => {
            location.reload();
         }, 1500);
      } else if (response.status === 400) {
         failMsgContainer.classList.replace("d-none", "d-block");
         const responseErrorText = result.errors[0].message;
         failMsgText.innerText = responseErrorText;
         setTimeout(() => {
            failMsgContainer.classList.replace("d-block", "d-none");
         }, 3500);
      } else if (response.status === 403) {
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
