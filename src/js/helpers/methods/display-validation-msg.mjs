import { createValidationElement } from "../../components/validation/create-validation-element.mjs";
import { replaceDuplicates } from "./replace-duplicates.mjs";

export function displayValidationMessage(isValidForm, inputParentContainer, feedbackMsg) {
   if (isValidForm) {
      const validMsg = createValidationElement("valid-feedback", "Looks good");
      const isMsg = inputParentContainer.querySelector(".valid-feedback");
      replaceDuplicates(isMsg, validMsg, inputParentContainer);
   } else {
      const invalidMsg = createValidationElement("invalid-feedback", feedbackMsg);
      const isMsg = inputParentContainer.querySelector(".invalid-feedback");
      replaceDuplicates(isMsg, invalidMsg, inputParentContainer);
   }
}
