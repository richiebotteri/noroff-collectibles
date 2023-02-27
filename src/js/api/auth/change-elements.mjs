// import { deleteLoggingOut } from "./delete-logging-out.mjs";

export function changeElements() {
   const path = location.pathname;

   if (path === "/auctions-page.html" || path === "/listing-page.html") {
      // Change header links
      const darkBtnLinks = document.querySelectorAll("a[href='register-page.html']");
      const homeLinks = document.querySelectorAll("a[href='index.html']");

      const headerRegisterBtn = darkBtnLinks[0];
      const listingRegisterBtn = darkBtnLinks[1];
      const loginBtn = document.querySelector("a[href='login-page.html']");

      const createListingBtn = document.querySelector("a[href='create-listing-page.html']");
      const logoutBtn = document.querySelector("#logout");
      const bidButton = document.querySelector("#bid-button");

      const logoLink = homeLinks[0];

      // hide buttons
      headerRegisterBtn.classList.add("d-none");
      loginBtn.classList.add("d-none");

      if (listingRegisterBtn) {
         listingRegisterBtn.classList.add("d-none");
      }

      // show button
      logoutBtn.classList.replace("d-none", "d-block");
      createListingBtn.classList.replace("d-none", "d-block");

      if (bidButton) {
         bidButton.classList.replace("d-none", "d-block");
      }

      // change href
      logoLink.href = "/home.html";
   }
}
