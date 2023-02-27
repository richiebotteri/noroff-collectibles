import { getFormData } from "../get-form-data.mjs";
export function bidForm() {
   const bidForm = document.querySelector("#bid-form");
   getFormData(bidForm);
}
