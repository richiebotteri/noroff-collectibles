import { loadItem } from "../../storage/localStorage/load.mjs";
import { AUCTIONS_URL } from "../env.mjs";
import { tokenOption } from "../options/token-option.mjs";
import { createHomePageContent } from "../../components/home-profile-page.mjs";
import { formatFetchData } from "../format-fetch-data.mjs";

export async function getProfile() {
   try {
      const profileStorage = loadItem("profile");
      const profileName = profileStorage.name;

      const responseProfile = await fetch(`${AUCTIONS_URL}/profiles/${profileName}`, tokenOption("get"));
      const userProfile = await responseProfile.json();

      const responseListings = await fetch(`${AUCTIONS_URL}/profiles/${profileName}/listings/?_bids=true&_seller=true`, tokenOption("get"));
      const listings = await responseListings.json();

      const userData = {};

      if (responseProfile.status === 200 && responseListings.status === 200) {
         Object.defineProperties(userData, {
            profile: {
               value: userProfile,
            },
            profileListings: {
               value: formatFetchData(listings),
            },
         });
         createHomePageContent(userData);
      }
   } catch (error) {
      console.log(error);
   }
}
