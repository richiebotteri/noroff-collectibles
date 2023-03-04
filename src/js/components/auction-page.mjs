export function createAuctionPageContent(listing) {
   const listingGridContainer = document.querySelector("#listing-auction-grid");
   const allListingsCount = document.querySelector("#all-listings-count");

   listingGridContainer.appendChild(listing);

   const generatedListingEntries = listingGridContainer.querySelectorAll("a").length;

   allListingsCount.innerText = `Total (${generatedListingEntries})`;
}
