import { deleteItem } from "../../storage/localStorage/delete.mjs";

export function deleteStorageSigningOut() {
   document.addEventListener("DOMContentLoaded", () => {
      const logoutBtn = document.querySelector("#logout");
      logoutBtn.addEventListener("click", () => {
         deleteItem("token");
         deleteItem("profile");
      });
   });
}
