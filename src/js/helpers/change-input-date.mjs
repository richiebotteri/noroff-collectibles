import { formatFormDate } from "./methods/format-form-date.mjs";

export function changeInputDate() {
   const dateControl = document.querySelector('input[type="datetime-local"]');
   const date = Date.now();
   const correctFormat = formatFormDate(date);

   const slicedDate = correctFormat.slice(0, 16);
   const year = slicedDate.slice(0, 4);
   const month = slicedDate.slice(5, 7);
   const day = slicedDate.slice(8, 16);

   const addOneMonth = parseInt(month) + 1;
   const convertToString = addOneMonth.toString();
   const convertToDoubleDigit = convertToString.padStart(2, "0");

   const maxDate = `${year}-${convertToDoubleDigit}-${day}`;

   dateControl.value = slicedDate;
   dateControl.min = slicedDate;
   dateControl.max = maxDate;
}
