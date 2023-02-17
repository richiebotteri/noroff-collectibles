import { createFormObject } from "./create-form-object.mjs";

export function getFormData(form) {
   const submittedForm = form;
   submittedForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const formElements = new FormData(event.target);
      const method = event.target.attributes.method.value;
      const action = event.target.attributes.action.value;

      createFormObject(formElements, method, action);
   });
}
