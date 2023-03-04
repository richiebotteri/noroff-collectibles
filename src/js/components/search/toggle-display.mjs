export function toggleSearchDisplay() {
   const searchInput = document.querySelector("#search-input");
   const headerContainer = document.querySelector("header");

   const searchResultsContainer = document.querySelector("#search-results-container");

   const closeResultContainer = () => {
      searchResultsContainer.classList.remove("d-block");
   };

   searchInput.addEventListener("click", closeResultContainer);
   headerContainer.addEventListener("mouseleave", closeResultContainer);
}
