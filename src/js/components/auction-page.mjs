export function createAuctionPageContent(listing, apiData) {
   const listingGridContainer = document.querySelector("#listing-auction-grid");
   const allListingsCount = document.querySelector("#all-listings-count");
   const listingCount = apiData.length;

   listingGridContainer.appendChild(listing);
   allListingsCount.innerText = `Total (${listingCount})`;
}