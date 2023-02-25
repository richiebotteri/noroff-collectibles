export function createIndexPageComponents(listing, index) {
   // Get index page listing container
   const carouselListingContainer = document.querySelector("#carousel-listing-container");

   if (index < 5) {
      carouselListingContainer.appendChild(listing);
   }
}
