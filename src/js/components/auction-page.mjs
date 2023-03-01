import { getListings } from "../api/requests/get-listings.mjs";

export function createAuctionPageContent(listing) {
   const listingGridContainer = document.querySelector("#listing-auction-grid");
   const allListingsCount = document.querySelector("#all-listings-count");

   const loadMoreBtn = document.querySelector("#load-more");

   listingGridContainer.insertBefore(listing, loadMoreBtn);

   const generatedListingEntries = listingGridContainer.querySelectorAll("a").length;

   allListingsCount.innerText = `Total (${generatedListingEntries})`;
}
