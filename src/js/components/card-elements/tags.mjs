import { removeEmptyArray } from "../../helpers/methods/remove-empty-array.mjs";
import { trimArray } from "../../helpers/methods/trim-array.mjs";

export function createHtmlTags(apiTags) {
   const removedEmptyTags = removeEmptyArray(apiTags);
   const trimmedTagArray = trimArray(removedEmptyTags);
   let htmlTags = "";

   if (trimmedTagArray) {
      htmlTags = trimmedTagArray.map((item) => {
         const htmlSpan = document.createElement("span");
         htmlSpan.classList.add("data-field--tag", "me-1");
         htmlSpan.innerText = item;
         return htmlSpan;
      });
   } else {
      htmlTags = [];
   }

   return htmlTags;
}
