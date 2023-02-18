import { trimString } from "./trim-string.mjs";

export function stringToArray(string) {
   let stringArray = "";
   if (string.includes(",")) {
      stringArray = string.split(",").map((tag) => {
         return trimString(tag);
      });
      return stringArray;
   } else {
      stringArray = string.trim().split();
   }
   return stringArray;
}
