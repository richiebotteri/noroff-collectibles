import { createHtmlElement } from "../../helpers/methods/create-element.mjs";
import { formatDate } from "../../helpers/methods/format-date.mjs";

export function createBidElement(bids) {
   if (Array.isArray(bids)) {
      let bidsElements = [];

      bids.forEach((bid, index) => {
         const { amount, bidderName, created } = bid;
         const bidNumber = index + 1;

         const bidContainer = createHtmlElement("tr");

         const bidderIndex = createHtmlElement("th");
         bidderIndex.setAttribute("scope", "row");
         bidderIndex.classList.add("ps-2");
         bidderIndex.innerText = bidNumber;

         const bidderBidCreated = createHtmlElement("td");
         bidderBidCreated.innerText = formatDate(created);

         const bidderNameElement = createHtmlElement("td");
         bidderNameElement.innerText = bidderName;

         const bidderBidAmount = createHtmlElement("td");
         bidderBidAmount.innerText = amount;

         bidContainer.appendChild(bidderIndex);
         bidContainer.appendChild(bidderBidCreated);
         bidContainer.appendChild(bidderNameElement);
         bidContainer.appendChild(bidderBidAmount);

         bidsElements.push(bidContainer);
      });

      return bidsElements;
   } else {
      return bids;
   }
}
