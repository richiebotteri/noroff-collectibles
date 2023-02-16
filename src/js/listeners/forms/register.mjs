import { getFormData } from "../get-form-data.mjs";
export function registerForm() {
   const registerForm = document.querySelector("#register-form");
   getFormData(registerForm);
}
