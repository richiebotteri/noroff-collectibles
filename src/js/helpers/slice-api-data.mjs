export function sliceApiData(listings, nextListings) {
   let previousPosts = nextListings - 10;

   let selectedListings = listings.slice(previousPosts, nextListings);

   return selectedListings;
}
