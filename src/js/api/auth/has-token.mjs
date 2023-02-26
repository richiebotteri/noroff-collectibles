import { loadItem } from "../../storage/localStorage/load.mjs";
import { getProfile } from "../requests/get-profile.mjs";
import { changeElements } from "./change-elements.mjs";
import { deleteLoggingOut } from "./delete-logging-out.mjs";

export function hasToken() {
   const tokenExist = loadItem("token");

   if (tokenExist) {
      changeElements();
      deleteLoggingOut();
      getProfile();
   }
}
