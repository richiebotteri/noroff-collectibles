export function formatFormDate(endsAtDate) {
   const date = new Date(endsAtDate);
   const isoFormatDate = date.toISOString();

   return isoFormatDate;
}
