import { deleteItem } from "../../storage/localStorage/delete.mjs";
import { loadItem } from "../../storage/localStorage/load.mjs";
import { saveItem } from "../../storage/localStorage/save.mjs";

export function deleteLoggingOut() {
   const tokenExist = loadItem("token");
   if (tokenExist) {
      const logoutBtn = document.querySelector("#logout");
      logoutBtn.addEventListener("click", () => {
         deleteItem("token");
         deleteItem("profile");
         saveItem("userOnline", false);

         setTimeout(() => {
            location.pathname = "/index.html";
         }, 1000);
      });
   }
}
