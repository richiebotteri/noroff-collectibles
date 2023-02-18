import { createHtmlElement } from "../../helpers/methods/create-element.mjs";

export function createHtmlMainImage(media, title) {
   const imageChildTag = createHtmlElement("img");
   imageChildTag.classList.add("my-card-img", "g-col-12", "g-col-md-6");
   imageChildTag.alt = title;

   const firstImage = media[0];
   const defaultImage = "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

   imageChildTag.onerror = () => {
      imageChildTag.src = defaultImage;
   };

   if (firstImage) {
      imageChildTag.src = media[0];
      if (imageChildTag.width < 320) {
         imageChildTag.src = defaultImage;
      }
   } else {
      imageChildTag.src = defaultImage;
   }

   return imageChildTag;
}
