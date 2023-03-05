import { createHtmlElement } from "../../helpers/methods/create-element.mjs";
import { formatDate } from "../../helpers/methods/format-date.mjs";
import { shortenBidName } from "../../helpers/methods/shorten-bid-name.mjs";

export function createBidElement(bids) {
   if (Array.isArray(bids)) {
      let bidsElements = [];

      bids.forEach((bid, index) => {
         const { amount, bidderName, created } = bid;

         const bidNumber = index + 1;

         const bidContainer = createHtmlElement("tr");
         bidContainer.classList.add("bg-light-blue-1");

         const bidderIndex = createHtmlElement("th");
         bidderIndex.setAttribute("scope", "row");
         bidderIndex.classList.add("ps-2");
         bidderIndex.innerText = bidNumber;

         const bidderBidCreated = createHtmlElement("td");
         bidderBidCreated.innerText = formatDate(created);
         bidderBidCreated.classList.add("hide-table-cell");

         const bidderNameElement = createHtmlElement("td");

         if (bidderName.length > 10) {
            const shortBidderName = shortenBidName(bidderName);
            bidderNameElement.innerText = shortBidderName;
         } else {
            bidderNameElement.innerText = bidderName;
         }
         bidderNameElement.classList.add("text-capitalize");

         const bidderBidAmount = createHtmlElement("td");
         bidderBidAmount.innerText = `${amount} Cr.`;
         bidderBidAmount.classList.add("text-capitalize");

         bidContainer.appendChild(bidderIndex);
         bidContainer.appendChild(bidderBidCreated);
         bidContainer.appendChild(bidderNameElement);
         bidContainer.appendChild(bidderBidAmount);

         bidsElements.push(bidContainer);
      });

      return bidsElements;
   }
}
