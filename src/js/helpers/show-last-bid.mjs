import { removeEmptyArray } from "./methods/remove-empty-array.mjs";

export function showLastBid(bids) {
   if (typeof bids === "object") {
      return bids.amount;
   }
   return bids;
}
