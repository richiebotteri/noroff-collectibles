export function createHtmlTitle(apiTitle) {
   const htmlTitleH4 = document.createElement("h4");
   htmlTitleH4.classList.add("card-title", "pb-1", "m-0", "fw-semibold");
   htmlTitleH4.innerText = apiTitle;
   return htmlTitleH4;
}
