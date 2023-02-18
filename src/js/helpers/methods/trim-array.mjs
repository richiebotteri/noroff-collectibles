import { trimString } from "./trim-string.mjs";

export function trimArray(tags) {
   if (typeof tags === "object") {
      const trimmedArray = tags.map((tag) => {
         return trimString(tag);
      });
      return trimmedArray;
   }
}
