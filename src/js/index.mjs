import { loginForm } from "./listeners/forms/login-form.mjs";
import { registerForm } from "./listeners/forms/register-form.mjs";
import { createListingForm } from "./listeners/forms/create-listing-form.mjs";
import { getListings } from "./api/requests/get-listings.mjs";
import { searchForm } from "./listeners/forms/search-form.mjs";

import { hasToken } from "./api/auth/has-token.mjs";
import { createListingPageContent } from "./components/listing-page.mjs";
import { avatarForm } from "./listeners/forms/update-avatar.mjs";
import { bidForm } from "./listeners/forms/bid-form.mjs";

const path = location.pathname;

if (path === "/login-page.html" || path === "/forms.html") {
   loginForm();
} else if (path === "/register-page.html") {
   registerForm();
} else if (path === "/create-listing-page.html") {
   createListingForm();
} else if (path === "/home.html") {
   avatarForm();
} else if (path === "/listing-page.html") {
   bidForm();
   createListingPageContent();
}

getListings();
searchForm();

hasToken();
