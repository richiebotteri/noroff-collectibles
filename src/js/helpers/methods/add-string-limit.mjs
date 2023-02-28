export function addStringLimit(string) {
   const fullString = string;
   const maxLength = 30;

   //  Trim string
   let trimmedString = fullString.substr(0, maxLength);

   //  If word is cut re-trim string
   trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));

   if (string.length > 30) {
      //  Add ... symbol to text longer than maxLength
      const addMoreSymbol = `${trimmedString} ...`;
      return addMoreSymbol;
   } else {
      return trimmedString;
   }
}
