import { getFormData } from "../get-form-data.mjs";
export function createListing() {
   const createListing = document.querySelector("#create-listing-form");
   getFormData(createListing);
}
