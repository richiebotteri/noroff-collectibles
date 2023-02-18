export function removeEmptyArray(apiTagArray) {
   if (apiTagArray.length !== 0) {
      const haveEmptyString = apiTagArray.every((tag) => {
         return tag === "";
      });
      if (!haveEmptyString) {
         return apiTagArray.filter((tag) => tag !== "");
      }
   }
   return ""; // Default return statement
}
