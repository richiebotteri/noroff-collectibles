import { loadItem } from "../storage/localStorage/load.mjs";

export default () => {
   const hasToken = loadItem("token");
   return hasToken;
};
