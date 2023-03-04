import { showOnlineMessage } from "../../components/validation/online-message.mjs";
import { deleteItem } from "../../storage/localStorage/delete.mjs";
import { loadItem } from "../../storage/localStorage/load.mjs";
import { getProfile } from "../requests/get-profile.mjs";
import { changeElements } from "./change-elements.mjs";
import { deleteLoggingOut } from "./delete-logging-out.mjs";

export function hasToken() {
   const path = location.pathname;
   const tokenExist = loadItem("token");

   if (tokenExist) {
      changeElements();
      deleteLoggingOut();
      if (path === "/Semester-Project-2/profile.html") getProfile();
   } else {
      const userOnline = loadItem("userOnline");

      if (userOnline === false && path === "/Semester-Project-2/index.html") {
         showOnlineMessage();
         deleteItem("userOnline");
      }
   }
}
