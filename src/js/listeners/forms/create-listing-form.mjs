import { getFormData } from "../get-form-data.mjs";
export function createListingForm() {
   const createListing = document.querySelector("#create-listing-form");
   getFormData(createListing);
}
