import { showOnlineMessage } from "../../components/validation/online-message.mjs";
import { deleteItem } from "../../storage/localStorage/delete.mjs";
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
   } else {
      const userOnline = loadItem("userOnline");
      const path = location.pathname;

      if (userOnline === false && path === "/Semester-Project-2/index.html") {
         showOnlineMessage();
         deleteItem("userOnline");
      }
   }
}
