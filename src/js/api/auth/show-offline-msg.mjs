import { displayOfflineMessage } from "../../components/validation/display-offline-msg.mjs";
import { getBaseUrl } from "../../helpers/get-base-url.mjs";
import getUrlPathname from "../../helpers/get-url-pathname.mjs";
import { deleteItem } from "../../storage/localStorage/delete.mjs";
import { loadItem } from "../../storage/localStorage/load.mjs";

export function showOfflineMsg() {
   const userOnline = loadItem("userOnline");
   const urlPathName = getUrlPathname();
   const baseUrl = getBaseUrl();

   if (userOnline === false && urlPathName === baseUrl + "/index.html") {
      displayOfflineMessage();
      deleteItem("userOnline");
      deleteItem();
   }
}
