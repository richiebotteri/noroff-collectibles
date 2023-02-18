import { createListingCard } from "./card-components/listing-card.mjs";
import { createHtmlBids } from "./card-elements/bids.mjs";
import { createHTMlDescription } from "./card-elements/description.mjs";
import { createHtmlEndsAt } from "./card-elements/ends-at.mjs";
import { createHtmlLastBid } from "./card-elements/last-bid.mjs";
import { createHtmlMainImage } from "./card-elements/main-image.mjs";
import { createHtmlStartDate } from "./card-elements/started.mjs";
import { createHtmlTags } from "./card-elements/tags.mjs";
import { createHtmlTitle } from "./card-elements/title.mjs";

export function routeListingData(listingObjects) {
   //  listingObjects.forEach((apiListingObject) => {
   // });
   const { id, title, description, media, tags, created, updated, endsAt, _count, bids, seller } = listingObjects;

   createListingCard(title, description, media, tags, created, endsAt, _count, bids);
}
