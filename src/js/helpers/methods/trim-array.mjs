import { formatStringData } from "../format-string-data.mjs";

export function trimArray(tags) {
   if (typeof tags === "object") {
      const formattedArray = tags.map((tag) => {
         return formatStringData(tag);
      });
      return formattedArray;
   } else {
      return "no tags";
   }
}
