import { displayValidationMessage } from "../helpers/methods/display-validation-msg.mjs";

export function giveValidationMessage(isValidForm, form) {
   form.classList.add("was-validated");
   const formData = new FormData(form);

   for (const [key] of formData.entries()) {
      switch (key) {
         case "title":
            const titleContainer = document.querySelector("#title-group");

            displayValidationMessage(isValidForm, titleContainer, "This field is required");
            break;
         case "endsAt":
            const endsAtContainer = document.querySelector("#endsAt-group");

            displayValidationMessage(isValidForm, endsAtContainer, "This field is required");
            break;
         case "username":
            const usernameContainer = document.querySelector("#name-group");

            displayValidationMessage(isValidForm, usernameContainer, "Your username should only include letters, numbers, and underscores.");
            break;
         case "email":
            const emailContainer = document.querySelector("#email-group");

            displayValidationMessage(isValidForm, emailContainer, "Your email should be a valid Noroff email address, which starts with your username, followed by the domain '@stud.noroff.no'. or '@noroff.no'");
            break;
         case "password":
            const passwordContainer = document.querySelector("#password-group");
            displayValidationMessage(isValidForm, passwordContainer, "Your password must be at least 8 characters long.");
            break;
      }
   }
}
