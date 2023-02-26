export function createIndexPageComponents(listing, apiData) {
   // Get index page listing container
   const carouselListingContainer = document.querySelector("#carousel-listing-container");
   const { index } = apiData;

   if (index < 5) {
      carouselListingContainer.appendChild(listing);
   }
}
