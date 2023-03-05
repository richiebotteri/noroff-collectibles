import path from "../../helpers/path.mjs";

export function changeElements() {
   if (path() === "/Semester-Project-2/auctions-page.html" || path() === "/Semester-Project-2/listing-page.html") {
      const darkBtnLinks = document.querySelectorAll("a[href='register-page.html']");
      const homeLinks = document.querySelectorAll("a[href='index.html']");

      const headerRegisterBtn = darkBtnLinks[0];
      const registerToBidBtn = document.querySelector("#register-to-bid");
      const loginBtn = document.querySelector("a[href='login-page.html']");

      const createListingBtn = document.querySelector("a[href='create-listing-page.html']");
      const logoutBtn = document.querySelector("#logout");
      const bidForm = document.querySelector("#bid-form");

      const footerCta = document.querySelector("footer > .container");

      // hide buttons
      headerRegisterBtn.classList.add("d-none");
      loginBtn.classList.add("d-none");
      footerCta.classList.add("d-none");

      if (registerToBidBtn) {
         registerToBidBtn.classList.add("d-none");
      }

      // show button
      logoutBtn.classList.replace("d-none", "d-block");
      createListingBtn.classList.replace("d-none", "d-block");

      if (bidForm) {
         bidForm.classList.replace("d-none", "d-block");
      }

      // change href
      homeLinks.forEach((homeLink, index) => {
         homeLink.href = "/Semester-Project-2/profile.html";
         if (index === 1) {
            homeLink.innerText = "Profile";
         }
      });
   }
}
