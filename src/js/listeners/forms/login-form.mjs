import { getFormData } from "../get-form-data.mjs";
export function loginForm() {
   const loginForm = document.querySelector("#login-form");
   getFormData(loginForm);
}
