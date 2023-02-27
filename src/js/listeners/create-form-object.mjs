import { formatStringData } from "../helpers/format-string-data.mjs";
import { routeFormObject } from "./route-form-object.mjs";
import { stringToArray } from "../helpers/methods/string-to-array.mjs";
import { formatFormDate } from "../helpers/methods/format-form-date.mjs";

export function createFormObject(formElements) {
   // Converts form elements into an object with key/value pares
   const inputDataObject = {};

   for (const [key, value] of formElements.entries()) {
      if (key === "username" || key === "email" || key === "password" || key === "endsAt") {
         inputDataObject[key] = value;

         if (key === "endsAt") {
            const formattedValue = formatStringData(value);

            Object.defineProperty(inputDataObject, key, {
               value: formatFormDate(value),
               enumerable: true,
            });
         }
      } else if (key === "media" || key === "tags") {
         const formattedKey = formatStringData(key);
         const formattedValue = formatStringData(value);

         Object.defineProperty(inputDataObject, key, {
            value: stringToArray(value),
            enumerable: true,
         });
      } else if (key === "amount") {
         Object.defineProperty(inputDataObject, key, {
            value: parseFloat(value),
            enumerable: true,
         });
      } else {
         const formattedKey = formatStringData(key);
         const formattedValue = formatStringData(value);

         inputDataObject[formattedKey] = formattedValue;
      }
   }

   routeFormObject(inputDataObject);
}
