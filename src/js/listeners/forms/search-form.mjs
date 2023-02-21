import { getFormData } from "../get-form-data.mjs";
export function searchForm() {
   const searchForm = document.querySelector("#search-form");

   getFormData(searchForm);
}
