import { deleteItem } from "../../storage/localStorage/delete.mjs";

export function deleteTokenSigningOut() {
   document.addEventListener("DOMContentLoaded", () => {
      const logoutBtn = document.querySelector("#logout");
      logoutBtn.addEventListener("click", () => {
         deleteItem("token");
      });
   });
}
