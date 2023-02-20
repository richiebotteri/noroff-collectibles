import { createHtmlElement } from "../../helpers/methods/create-element.mjs";
import { createHtmlBids } from "./card-elements/bids.mjs";
import { createHtmlEndsAt } from "./card-elements/ends-at.mjs";
import { createHtmlLastBid } from "./card-elements/last-bid.mjs";
import { createHtmlStartDate } from "./card-elements/started.mjs";

export function createCardBodyExpanded(created, bids, endsAt, _count) {
   const cardBody = createHtmlElement("div");
   cardBody.classList.add("card-body", "g-col-12", "g-col-lg-6", "p-0", "d-flex", "flex-column", "justify-content-center");
   const bidsElement = createHtmlBids(_count);

   const lastBidElement = createHtmlLastBid(bids);
   lastBidElement.classList.replace("mb-1", "mb-2");

   const createdElement = createHtmlStartDate(created);

   const endsAtElement = createHtmlEndsAt(endsAt);
   endsAtElement.classList.replace("mb-1", "mb-2");

   const registerButtonElement = createHtmlElement("button");
   registerButtonElement.href = "/register/";
   registerButtonElement.classList.add("btn", "btn-accent-dark", "w-100");
   registerButtonElement.innerText = "Register Now";

   // Construct expanded card-body
   cardBody.appendChild(bidsElement);
   cardBody.appendChild(lastBidElement);
   cardBody.appendChild(createdElement);
   cardBody.appendChild(endsAtElement);
   cardBody.appendChild(registerButtonElement);

   return cardBody;
}
