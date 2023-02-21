import { createFormObject } from "./create-form-object.mjs";

export function getFormData(form) {
   const submittedForm = form;
   submittedForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const formElements = new FormData(event.target);

      const formAttribute = event.target.attributes;
      if (formAttribute.method && formAttribute.action) {
         const method = formAttribute.method.value;
         const action = formAttribute.action.value;

         createFormObject(formElements, method, action);
      } else {
         createFormObject(formElements);
      }
   });
}
