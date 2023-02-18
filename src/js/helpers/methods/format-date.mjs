export function formatDate(apiDate) {
   const date = new Date(apiDate);
   const dateFormat = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
   };
   const newFormat = date.toLocaleDateString("en-GB", dateFormat);
   return newFormat;
}
