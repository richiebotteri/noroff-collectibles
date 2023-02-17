import { loginForm } from "./listeners/forms/login-form.mjs";
import { registerForm } from "./listeners/forms/register-form.mjs";
import { createListingForm } from "./listeners/forms/create-listing-form.mjs";
import { getListings } from "./api/requests/get-listings.mjs";

loginForm();
registerForm();
createListingForm();

getListings();
