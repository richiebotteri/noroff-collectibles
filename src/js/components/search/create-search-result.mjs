import { formatFetchData } from "../../api/format-fetch-data.mjs";
import { createSearchResultElement } from "./html-result-element.mjs";

export function createSearchResult(rawApiData, search) {
   const formattedData = formatFetchData(rawApiData);

   formattedData.forEach((listing) => {
      const { id, title, description, mediaArray, tagsArray, endsAtDate, bids } = listing;

      const filterOptions = [id, title, description];

      let flattened = filterOptions.flat();

      const filter = flattened.map((filterData) => {
         if (filterData) {
            return filterData;
         }
      });

      const searchResultContainer = document.querySelector("#search-results-container");
      const searchResultListings = document.querySelector("#search-result-listings");
      const searchForm = document.querySelector("#search-form");

      flattened.forEach((filter) => {
         if (filter) {
            const listingItems = searchResultListings.children;

            if (filter.includes(search)) {
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
   });
}
