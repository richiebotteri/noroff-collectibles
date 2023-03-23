import { getBaseUrl } from "../../helpers/get-base-url.mjs";
import { createHtmlElement } from "../../helpers/methods/create-element.mjs";

export function createSearchResultElement(title, id) {
   const baseUrl = getBaseUrl();
   const linkElement = createHtmlElement("a");
   linkElement.classList.add("btn", "btn-accent-light", "p-2", "search-result-border", "rounded-0", "w-100", "text-start");
   linkElement.innerText = title;

   linkElement.href = `${baseUrl}/listing-page.html?id=${id}`;
   linkElement.id = id;

   return linkElement;
}
