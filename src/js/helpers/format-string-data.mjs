import { stringToLowerCase } from "./methods/string-to-lowercase.mjs";
import { trimString } from "./methods/trim-string.mjs";

export function formatStringData(string) {
   const trimmedString = trimString(string);
   const lowerCaseString = stringToLowerCase(trimmedString);
   return lowerCaseString;
}
