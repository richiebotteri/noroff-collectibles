export function showLastBid(bids) {
   if (Array.isArray(bids) && bids.length) {
      const lastBid = bids.pop();
      return `${lastBid.amount} Credits`;
   } else {
      return "Be the first";
   }
}
