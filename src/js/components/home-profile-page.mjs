export function createHomePageContent(apiData = "") {
   if (apiData !== "") {
      if (apiData.nodeName === "A") {
         // Adds grid listings to page
         const listingGridContainer = document.querySelector("#profil-listing-auction-grid");
         listingGridContainer.appendChild(apiData);
      } else {
         // Api profile object deconstruction
         const { credits, wins, email, name, _count, avatar } = apiData;
         const winsCount = wins.length;
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
   }
}
