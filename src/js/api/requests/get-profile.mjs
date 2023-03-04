import { loadItem } from "../../storage/localStorage/load.mjs";
import { AUCTIONS_URL } from "../env.mjs";
import { tokenOption } from "../options/token-option.mjs";
import { createHomePageContent } from "../../components/home-profile-page.mjs";
import { formatFetchData } from "../format-fetch-data.mjs";
import { guestOption } from "../options/guest-option.mjs";

export async function getProfile() {
   try {
      const profileStorage = loadItem("profile");
      const profileName = profileStorage.name;

      const responseProfile = await fetch(`${AUCTIONS_URL}/profiles/${profileName}`, tokenOption("get"));
      const userProfile = await responseProfile.json();

      const profileListingResponse = await fetch(`${AUCTIONS_URL}/profiles/${profileName}/listings/?_bids=true&_seller=true&sort=created&sortOrder=desc`, tokenOption("get"));
      const profileListings = await profileListingResponse.json();

      const allListingsResponse = await fetch(`${AUCTIONS_URL}/listings/?limit=100&offset=100&_bids=true&_seller=true&sort=created`, guestOption());
      const allListings = await allListingsResponse.json();

      const userData = {};

      if (responseProfile.status === 200 && profileListingResponse.status === 200 && allListingsResponse.status === 200) {
         Object.defineProperties(userData, {
            profile: {
               value: userProfile,
            },
            profileListings: {
               value: formatFetchData(profileListings),
            },
            allListings: {
               value: formatFetchData(allListings),
            },
         });

         createHomePageContent(userData);
      }
   } catch (error) {
      console.log(error);
   }
}
