import { formatStringData } from "../../helpers/format-string-data.mjs";
import { createSearchResultElement } from "./html-result-element.mjs";

export function createSearchResult(apiListingData, index, searchValue) {
   const { id, title, description, media, tags, created, updated, endsAt, _count, bids, seller } = apiListingData;

   const tagsArray = Object.values(tags);
   const cleanTagsArray = tagsArray.map((tag) => {
      const cleanedData = formatStringData(tag);

      return cleanedData;
   });

   const filterOptions = [id, title, description, cleanTagsArray];
   const flattened = filterOptions.flat();

   const filters = flattened.map((filter) => {
      if (filter) {
         const cleanedData = formatStringData(filter);
         if (filter !== "") {
            return cleanedData;
         }
      }
   });

   const searchResultContainer = document.querySelector("#search-results-container");
   const searchResultListings = document.querySelector("#search-result-listings");
   const searchForm = document.querySelector("#search-form");

   filters.forEach((filter) => {
      if (filter) {
         const listingItems = searchResultListings.children;

         if (filter.includes(searchValue)) {
            searchResultContainer.classList.add("d-block");

            if (listingItems.length) {
               const listingItemsArray = Object.values(listingItems);
               const isId = listingItemsArray.some((listingElement) => {
                  return listingElement.id === id;
               });

               if (!isId) {
                  const listingElement = createSearchResultElement(title, id);
                  searchResultListings.appendChild(listingElement);
               }
            } else {
               const listingElement = createSearchResultElement(title, id);
               searchResultListings.appendChild(listingElement);
            }
         }
      }
   });

   searchForm.onclick = () => {
      searchResultListings.replaceChildren();
   };
}
