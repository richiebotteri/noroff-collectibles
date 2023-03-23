import { loginForm } from "./listeners/forms/login-form.mjs";
import { registerForm } from "./listeners/forms/register-form.mjs";
import { createListingForm } from "./listeners/forms/create-listing-form.mjs";
import { searchForm } from "./listeners/forms/search-form.mjs";
import { createListingPageContent } from "./components/listing-page.mjs";
import { avatarForm } from "./listeners/forms/update-avatar.mjs";
import { bidForm } from "./listeners/forms/bid-form.mjs";
import { changeInputDate } from "./helpers/change-input-date.mjs";
import { addMoreListings } from "./helpers/add-more-listings.mjs";
import { toggleSearchDisplay } from "./components/search/toggle-display.mjs";
import { getProfileAndListings } from "./api/requests/get-profile-and-listings.mjs";
import { changeElements } from "./api/auth/change-elements.mjs";
import { deleteLoggingOut } from "./api/auth/delete-logging-out.mjs";
import hasToken from "./helpers/has-token.mjs";

import { showOfflineMsg } from "./api/auth/show-offline-msg.mjs";
import { getBaseUrl } from "./helpers/get-base-url.mjs";
import getUrlPathname from "./helpers/get-url-pathname.mjs";

const baseUrl = getBaseUrl();
const urlPathName = getUrlPathname();

// Only evoked on specific pages
switch (urlPathName) {
   case baseUrl + "/index.html":
      break;
   case baseUrl + "/login-page.html":
      loginForm();
      break;
   case baseUrl + "/register-page.html":
      registerForm();
      break;
   case baseUrl + "/auctions-page.html":
      addMoreListings();
      break;
   case baseUrl + "/create-listing-page.html":
      createListingForm();
      changeInputDate();
      break;
   case baseUrl + "/profile.html":
      avatarForm();
      break;
   case baseUrl + "/listing-page.html":
      bidForm();
      createListingPageContent();
      break;
}

// Only evoked if token
if (hasToken()) {
   changeElements();
   deleteLoggingOut();
}

// Evoked on all pages
searchForm();
toggleSearchDisplay();
getProfileAndListings();
showOfflineMsg();
