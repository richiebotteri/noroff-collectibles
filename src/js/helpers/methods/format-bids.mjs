export function formatBids(bids) {
   if (bids.length) {
      return bids;
   } else {
      let bidder = "be the first to bid!";
      return bidder;
   }
}
