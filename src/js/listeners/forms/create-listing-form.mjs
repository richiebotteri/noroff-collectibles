import { getFormData } from "../get-form-data.mjs";
export function createListingForm() {
   const createListing = document.querySelector("#listing-form");
   getFormData(createListing);
}
