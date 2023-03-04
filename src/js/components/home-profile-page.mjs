import { createGridListing } from "./page-components/grid-listing.mjs";

export function createHomePageContent(userData) {
   const { profile, profileListings, allListings } = userData;

   profileListings.forEach((profileListing) => {
      const listingsContainer = document.querySelector("#profil-listing-auction-grid");
      const listingElement = createGridListing(profileListing);
      listingsContainer.appendChild(listingElement);
   });

   const { credits, wins, email, name, _count, avatar } = profile;
   const profileWinsContainer = document.querySelector("#profil-listing-win-grid");
   const profileWinCountContainer = document.querySelector("#profile-listing-win-count");

   const listingsCount = _count.listings;
   let winsCount = 0;

   if (wins.length) {
      winsCount = wins.length;
   }

   allListings.forEach((listing) => {
      const { id } = listing;
      if (wins.includes(id)) {
         const listingWon = listing;
         const listingElement = createGridListing(listingWon);
         profileWinsContainer.appendChild(listingElement);
         profileWinCountContainer.innerText = `Total (${winsCount})`;
      }
   });

   // Profile.html content containers
   const profileImage = document.querySelector("#profile-image");
   const profileName = document.querySelector("#profile-name");
   const profileEmail = document.querySelector("#profile-email");
   const profileAuctionsWon = document.querySelector("#profile-auctions-won");
   const profileCredits = document.querySelector("#profile-credits");
   const profileListingCount = document.querySelector("#profile-listing-count");

   // Add api data to containers
   profileImage.src = avatar;
   profileName.innerHTML = name;
   profileEmail.innerHTML = email;
   profileAuctionsWon.innerText = winsCount;
   profileCredits.innerText = credits;
   profileListingCount.innerText = `Total (${listingsCount})`;

   // Toggle my listings and wins sections
   const listingSectionToggleBtn = document.querySelector("#listings-toggle-btn");
   const listingsWonToggleBtn = document.querySelector("#wins-toggle-btn");

   const listingSection = document.querySelector("#my-listings-container");
   const winSection = document.querySelector("#my-wins-container");

   const toggleSectionVisibility = (event) => {
      const button = event.target;
      if (button.classList.contains("data-field--right-button")) {
         listingsWonToggleBtn.classList.add("active");
         listingSectionToggleBtn.classList.remove("active");

         listingSection.classList.add("d-none");
         winSection.classList.remove("d-none");
      } else {
         listingsWonToggleBtn.classList.remove("active");
         listingSectionToggleBtn.classList.add("active");

         listingSection.classList.remove("d-none");
         winSection.classList.add("d-none");
      }
   };

   listingSectionToggleBtn.addEventListener("click", toggleSectionVisibility);
   listingsWonToggleBtn.addEventListener("click", toggleSectionVisibility);
}
