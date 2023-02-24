import { loadItem } from "../../storage/localStorage/load.mjs";
import { changeToSignedInLinks } from "./change-to-signed-in-links.mjs";
import { deleteTokenSigningOut } from "./delete-token-signing-out.mjs";

export function ifTokenDoTask() {
   const isToken = loadItem("token");
   const path = location.pathname;

   if (isToken) {
      deleteTokenSigningOut();
      if (path === "/auctions-page.html") {
         changeToSignedInLinks();
      }
   } else {
   }
}
