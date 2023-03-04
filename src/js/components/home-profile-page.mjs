import { createGridListing } from "./page-components/grid-listing.mjs";

export function createHomePageContent(userData) {
   const { profile, profileListings } = userData;

   profileListings.forEach((profileListing) => {
      const listingsContainer = document.querySelector("#profil-listing-auction-grid");
      const listingElement = createGridListing(profileListing);
      listingsContainer.appendChild(listingElement);
   });

   const { credits, wins, email, name, _count, avatar } = profile;
   let winsCount = 0;
   if (wins.length) {
      winsCount = wins.length;
   }

   const listingsCount = _count.listings;

   // Home.html page profile content containers
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
}
