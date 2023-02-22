import { createFormObject } from "./create-form-object.mjs";
import { giveValidationMessage } from "./give-validation-msg.mjs";

export function getFormData(form) {
   const submittedForm = form;
   submittedForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      // Check Validation
      const isValidForm = form.reportValidity();
      if (isValidForm) {
         giveValidationMessage(isValidForm, form);
         const formElements = new FormData(form);
         const formAttribute = event.target.attributes;
         if (formAttribute.method && formAttribute.action) {
            formElements.append("method", formAttribute.method.value);
            formElements.append("action", formAttribute.action.value);

            createFormObject(formElements);
         } else {
            createFormObject(formElements);
         }
      } else {
         giveValidationMessage(isValidForm, form);
      }
   });
}
