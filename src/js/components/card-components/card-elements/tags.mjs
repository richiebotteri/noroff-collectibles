export function createHtmlTags(apiTags) {
   let htmlTags = "";

   if (Array.isArray(apiTags)) {
      htmlTags = apiTags.map((item) => {
         const htmlSpan = document.createElement("div");
         htmlSpan.classList.add("data-field--tag");
         htmlSpan.innerText = item;
         return htmlSpan;
      });
   } else {
      htmlTags = [];
   }

   return htmlTags;
}
