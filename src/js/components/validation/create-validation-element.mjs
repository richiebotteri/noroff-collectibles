import { createHtmlElement } from "../../helpers/methods/create-element.mjs";

export function createValidationElement(feedbackClass, msg) {
   const messageContainer = createHtmlElement("div");
   messageContainer.classList.add(feedbackClass, "px-2");
   const messageContentTag = createHtmlElement("p");
   messageContentTag.innerText = msg;

   // Construct
   messageContainer.appendChild(messageContentTag);
   return messageContainer;
}
