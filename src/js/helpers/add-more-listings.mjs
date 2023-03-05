import { getProfileAndListings } from "../api/requests/get-profile-and-listings.mjs";

export function addMoreListings() {
   const loadMoreBtn = document.querySelector("#load-more");
   let addListings = 10;

   loadMoreBtn.onclick = () => {
      addListings += 10;
      if (addListings !== 100) {
         getProfileAndListings(addListings);
      } else {
         loadMoreBtn.classList.add("disabled", "d-none");
      }
   };
}
