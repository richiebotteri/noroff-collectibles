export function createHtmlTitle(apiTitle) {
   const htmlTitleH4 = document.createElement("h4");
   htmlTitleH4.classList.add("card-title", "pb-2", "m-0", "fw-bold");
   htmlTitleH4.innerText = apiTitle;
   return htmlTitleH4;
}
