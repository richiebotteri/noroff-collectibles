import { createHtmlElement } from "../../helpers/methods/create-element.mjs";

export function createHTMlDescription(apiDescription) {
   const paragraphTag = createHtmlElement("p");
   paragraphTag.classList.add("fs-5", "card-text", "pt-0", "pb-2");

   if (apiDescription) {
      paragraphTag.innerText = apiDescription;
      return paragraphTag;
   } else {
      paragraphTag.innerText = "Bid on this listing now!";
      return paragraphTag;
   }
}
