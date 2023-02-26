import { createHtmlElement } from "../../../helpers/methods/create-element.mjs";

export function createHtmlImages(mediaSources, title) {
   const carouselItem = createHtmlElement("div");
   carouselItem.dataset.bsInterval = "10000";
   carouselItem.classList.add("carousel-item", "pe-1");

   const imageElement = createHtmlElement("img");
   imageElement.classList.add("img-thumbnail--listing");

   imageElement.alt = title;

   if (typeof mediaSources === "string") {
      imageElement.src = mediaSources;
   } else {
      mediaSources.forEach((mediaSource) => {
         imageElement.src = mediaSource;
      });
   }

   const defaultImage = "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

   imageElement.onerror = () => {
      imageElement.src = defaultImage;
   };

   carouselItem.appendChild(imageElement);

   return carouselItem;
}
