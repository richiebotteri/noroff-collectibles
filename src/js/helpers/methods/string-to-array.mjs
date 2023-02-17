export function stringToArray(string) {
   let stringArray = "";
   if (string.includes(",")) {
      stringArray = string.split(",").map((tag) => {
         return tag.trim();
      });
      return stringArray;
   } else {
      stringArray = string.trim().split();
   }
   return stringArray;
}
