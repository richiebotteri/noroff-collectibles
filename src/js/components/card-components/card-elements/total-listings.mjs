import { createHtmlElement } from "../../../helpers/methods/create-element.mjs";

export function createTotalListingHtml(totalListings) {
   const correctedNumber = totalListings + 1;
   const paragraph = createHtmlElement("p");
   paragraph.classList.add("text-capitalize", "fs-4");
   paragraph.innerText = `Total (${correctedNumber})`;
   return paragraph;
}
