import { loginForm } from "./listeners/forms/login-form.mjs";
import { registerForm } from "./listeners/forms/register-form.mjs";
import { createListingForm } from "./listeners/forms/create-listing-form.mjs";
import { getListings } from "./api/requests/get-listings.mjs";

const path = location.pathname;

if (path === "/login/") {
   loginForm();
} else if (path === "/register/") {
   registerForm();
} else if (path === "/create-listing/") {
   createListingForm();
} else {
   getListings();
}
