import { createHtmlElement } from "../../../helpers/methods/create-element.mjs";

export function createHtmlTitle(apiTitle) {
   const htmlTitleH4 = createHtmlElement("h4");
   htmlTitleH4.classList.add("card-title", "pb-2", "m-0", "fw-bold");
   htmlTitleH4.innerText = apiTitle;
   return htmlTitleH4;
}
