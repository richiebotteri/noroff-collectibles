import { routeFormObject } from "./route-form-object.mjs";

export function createFormObject(formElements, method, action) {
   const inputDataObject = {};
   for (const [key, value] of formElements.entries()) {
      inputDataObject[key] = value;
   }

   const submitFormData = Object.assign(inputDataObject, {
      method: method,
      action: action,
   });

   routeFormObject(submitFormData);
}
