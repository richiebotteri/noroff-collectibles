import { displayOfflineMessage } from "../../components/validation/display-offline-msg.mjs";
import path from "../../helpers/path.mjs";
import { deleteItem } from "../../storage/localStorage/delete.mjs";
import { loadItem } from "../../storage/localStorage/load.mjs";

export function showOfflineMsg() {
   const userOnline = loadItem("userOnline");

   if (userOnline === false && path() === "/index.html") {
      displayOfflineMessage();
      deleteItem("userOnline");
      deleteItem();
   }
}
