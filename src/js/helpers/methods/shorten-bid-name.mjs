export function shortenBidName(string) {
   const fullString = string;
   const maxLength = 5;

   //  Trim string
   let trimmedString = fullString.substr(0, maxLength);

   //  If word is cut re-trim string
   if (trimmedString.includes(" ")) {
      trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
   }

   return trimmedString;
}
