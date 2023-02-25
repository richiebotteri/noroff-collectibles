import { routeListingData } from "../../components/route-listing-data.mjs";
import { loadItem } from "../../storage/localStorage/load.mjs";
import { AUCTIONS_URL } from "../env.mjs";
import { tokenOption } from "../options/token-option.mjs";

export async function getProfile() {
   try {
      const profile = loadItem("profile");
      const profileName = profile.name;

      const response = await fetch(`${AUCTIONS_URL}/profiles/${profileName}`, tokenOption("get"));
      const userProfile = await response.json();

      if (response.status === 200) {
         setTimeout(() => {
            routeListingData(userProfile);
         }, 1000);
      }
   } catch (error) {
      console.log(error);
   }
}
