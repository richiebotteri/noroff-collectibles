import { getFormData } from "../get-form-data.mjs";
export function avatarForm() {
   const avatarForm = document.querySelector("#avatar-form");
   getFormData(avatarForm);
}
