import { createHtmlElement } from "../../helpers/methods/create-element.mjs";

export function createHtmlMainImage(media) {
   const imageChildTag = createHtmlElement("img");
   imageChildTag.classList.add("my-card-img", "g-col-12", "g-col-md-6");
   imageChildTag.src = media[0];
   return imageChildTag;
}
