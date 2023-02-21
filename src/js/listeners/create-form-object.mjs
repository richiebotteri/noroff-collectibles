import { formatStringData } from "../helpers/format-string-data.mjs";
import { stringToArray } from "../helpers/methods/string-to-array.mjs";
import { routeFormObject } from "./route-form-object.mjs";

export function createFormObject(formElements, method = null, action = null) {
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

   if (method && action) {
      // Adds method and action to the form element object
      const extendedDataObject = Object.assign(inputDataObject, {
         method: formatStringData(method),
         action: formatStringData(action),
      });

      if (action !== "/listings") {
         routeFormObject(extendedDataObject);
      } else {
         // converts media and tags to array.
         const { media, tags } = extendedDataObject;
         Object.defineProperties(extendedDataObject, {
            media: {
               value: stringToArray(media),
            },
            tags: {
               value: stringToArray(tags),
            },
         });

         routeFormObject(extendedDataObject);
      }
   } else {
      routeFormObject(inputDataObject);
   }
}
