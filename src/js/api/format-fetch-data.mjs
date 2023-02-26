import { formatStringData } from "../helpers/format-string-data.mjs";
import { formatBids } from "../helpers/methods/format-bids.mjs";
import { formatDate } from "../helpers/methods/format-date.mjs";
import { removeEmptyArray } from "../helpers/methods/remove-empty-array.mjs";
import { trimArray } from "../helpers/methods/trim-array.mjs";

export function formatFetchData(apiDataArray) {
   let formattedApiDataArray = [];

   apiDataArray.forEach((apiData, index) => {
      const { id, title, description, media, tags, created, updated, endsAt, _count, bids, seller } = apiData;
      // String

      const formattedTitle = formatStringData(title);
      const formattedDesc = formatStringData(description);

      const removedEmptyTags = removeEmptyArray(tags);
      const trimmedTagsArray = trimArray(removedEmptyTags);

      const mediaArray = removeEmptyArray(media);

      const createDate = formatDate(created);
      const endsAtDate = formatDate(endsAt);
      const updatedDate = formatDate(updated);

      const bidsCount = _count.bids;

      const formattedBids = formatBids(bids);

      const formattedApiDataObject = {
         index: index,
         id: id,
         title: formattedTitle,
         description: formattedDesc,
         tagsArray: trimmedTagsArray,
         mediaArray: mediaArray,
         createdDate: createDate,
         endsAtDate: endsAtDate,
         updatedDate: updatedDate,
         bidsCount: bidsCount,
         bids: formattedBids,
         seller: seller,
      };

      formattedApiDataArray.push(formattedApiDataObject);
   });

   return formattedApiDataArray;
}
