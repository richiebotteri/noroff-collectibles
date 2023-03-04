export function formatDate(apiDate) {
   const date = new Date(apiDate);
   const dateFormat = {
      year: "2-digit",
      month: "numeric",
      day: "numeric",
   };
   const newFormat = date.toLocaleDateString("en-GB", dateFormat);
   return newFormat;
}
