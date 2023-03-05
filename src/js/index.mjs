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
import path from "./helpers/path.mjs";
import { showOfflineMsg } from "./api/auth/show-offline-msg.mjs";

// Only evoked on specific pages
if (path() === "/Semester-Project-2/login-page.html" || path() === "/Semester-Project-2/forms.html") {
   loginForm();
} else if (path() === "/Semester-Project-2/register-page.html") {
   registerForm();
} else if (path() === "/Semester-Project-2/auctions-page.html") {
   addMoreListings();
} else if (path() === "/Semester-Project-2/create-listing-page.html") {
   createListingForm();
   changeInputDate();
} else if (path() === "/Semester-Project-2/profile.html") {
   avatarForm();
} else if (path() === "/Semester-Project-2/listing-page.html") {
   bidForm();
   createListingPageContent();
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
