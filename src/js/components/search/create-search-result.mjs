// import { formatStringData } from "../../helpers/format-string-data.mjs";
// import { createSearchResultElement } from "./html-result-element.mjs";

export function createSearchResult(apiData, search) {
   // let apiDataObject = {};
   // const { id, title } = apiDataObject;
   // let filterOptions = [];
   // if (apiData) {
   //    const { id, title, description, tagsArray } = apiData;
   //    Object.defineProperties(apiDataObject, {
   //       id: {
   //          value: id,
   //          writable: true,
   //       },
   //       title: {
   //          value: title,
   //          writable: true,
   //       },
   //    });
   //    filterOptions.push(id, title, description);
   //    if (Array.isArray(tagsArray)) {
   //       filterOptions.push = tagsArray;
   //    }
   // }
   // console.log(filterOptions, search);
   // const searchResultContainer = document.querySelector("#search-results-container");
   // const searchResultListings = document.querySelector("#search-result-listings");
   // const searchForm = document.querySelector("#search-form");
   // if (searchValue.length) {
   //    console.log(filterOptions);
   // }
   /*    flattened.forEach((filter) => {
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
   }; */
}
