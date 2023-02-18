import { createAuctionListings } from "./card-components/auction-page-listing.mjs";
import { createListingCard } from "./card-components/listing-card.mjs";

export function routeListingData(listingObjects) {
   listingObjects.forEach((apiListingObject, index) => {
      const { id, title, description, media, tags, created, updated, endsAt, _count, bids, seller } = apiListingObject;

      createListingCard(title, description, media, tags, endsAt, _count, bids, index);
   });
}
