import { createListingCard } from "./card-components/listing-card.mjs";

export function routeListingData(listingObjects) {
   listingObjects.forEach((apiListingObject, index) => {
      const { id, title, description, media, tags, created, updated, endsAt, _count, bids, seller } = apiListingObject;
      if (index < 5) {
         createListingCard(title, description, media, tags, endsAt, _count, bids, index);
      }
   });
}
