import { formatStringData } from "../helpers/format-string-data.mjs";
import { stringToArray } from "../helpers/methods/string-to-array.mjs";
import { routeFormObject } from "./route-form-object.mjs";

export function createFormObject(formElements, method, action) {
   const inputDataObject = {};

   // Converts form elements into an object with key/value pares
   for (const [key, value] of formElements.entries()) {
      if (key === "name" || key === "email" || key === "password" || key === "endsAt") {
         inputDataObject[key] = value;
      } else {
         const formattedKey = formatStringData(key);
         const formattedValue = formatStringData(value);
         inputDataObject[formattedKey] = formattedValue;
      }
   }

   // Adds method and action to the form element object
   const formDataObject = Object.assign(inputDataObject, {
      method: formatStringData(method),
      action: formatStringData(action),
   });

   console.log(formDataObject);

   if (action !== "/listings") {
      routeFormObject(formDataObject);
   } else {
      // converts media and tags to array.
      const { media, tags } = formDataObject;
      Object.defineProperties(formDataObject, {
         media: {
            value: stringToArray(media),
         },
         tags: {
            value: stringToArray(tags),
         },
      });

      routeFormObject(formDataObject);
   }
}
