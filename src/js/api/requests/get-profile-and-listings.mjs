import { loadItem } from "../../storage/localStorage/load.mjs";
import { AUCTIONS_URL } from "../env.mjs";
import { tokenOption } from "../options/token-option.mjs";
import { createHomePageContent } from "../../components/home-profile-page.mjs";
import { formatFetchData } from "../format-fetch-data.mjs";
import { guestOption } from "../options/guest-option.mjs";
import { sliceApiData } from "../../helpers/slice-api-data.mjs";
import { routeListingData } from "../route-listing-data.mjs";
import path from "../../helpers/path.mjs";
import hasToken from "../../helpers/has-token.mjs";

export async function getProfileAndListings(loadMoreListings = 10) {
   try {
      const fetchApiData = {};

      // Fetch profile data if on profile page and has token
      if (path() === "/Semester-Project-2/profile.html" && hasToken()) {
         const profileStorage = loadItem("profile");
         const profileName = profileStorage.name;

         const responseProfile = await fetch(`${AUCTIONS_URL}/profiles/${profileName}`, tokenOption("get"));
         const userProfile = await responseProfile.json();

         const profileListingResponse = await fetch(`${AUCTIONS_URL}/profiles/${profileName}/listings/?_bids=true&_seller=true&sort=created&sortOrder=desc`, tokenOption("get"));
         const profileListings = await profileListingResponse.json();

         // Adds profile and profile listings to object
         if (responseProfile.status === 200 && profileListingResponse.status === 200) {
            Object.defineProperties(fetchApiData, {
               profile: {
                  value: userProfile,
               },
               profileListings: {
                  value: formatFetchData(profileListings),
               },
            });
         }

         // Remove loader if zero posts
         if (profileListings.length === 0) {
            const loader = document.querySelector("#loader");
            loader.classList.add("d-none");
         }
      }

      const allListingsResponse = await fetch(`${AUCTIONS_URL}/listings/?limit=100&offset=100&_bids=true&_seller=true&sort=created`, guestOption());
      const allListings = await allListingsResponse.json();

      // Adds all listings data to object and sends data to auctions and listing page
      if (allListingsResponse.status === 200) {
         Object.defineProperties(fetchApiData, {
            allListings: {
               value: formatFetchData(allListings),
            },
         });

         // Slice listing entries in portions of 10 listings per load
         if (path() === "/Semester-Project-2/auctions-page.html") {
            const loadMoreBtn = document.querySelector("#load-more");
            loadMoreBtn.classList.replace("d-none", "d-block");
         }
         const selectedListings = sliceApiData(fetchApiData.allListings, loadMoreListings);

         routeListingData(selectedListings);
      }

      // Send all data to profile page if token exist
      if (path() === "/Semester-Project-2/profile.html" && hasToken()) {
         createHomePageContent(fetchApiData);
      }
   } catch (error) {
      console.log(error);
   }
}
