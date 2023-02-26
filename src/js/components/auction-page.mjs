export function createAuctionPageContent(listing, apiData) {
   const listingGridContainer = document.querySelector("#listing-auction-grid");
   const allListingsCount = document.querySelector("#all-listings-count");

   const listingCount = apiData.index;

   listingGridContainer.appendChild(listing);
   allListingsCount.innerText = `Total (${listingCount})`;
}
