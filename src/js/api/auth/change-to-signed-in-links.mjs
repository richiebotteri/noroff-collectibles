export function changeToSignedInLinks() {
   const lightBtnLink = document.querySelector("a[href='login-page.html']");
   const darkBtnLinks = document.querySelectorAll("a[href='register-page.html']");
   const homeLinks = document.querySelectorAll("a[href='index.html']");
   const bidButton = document.querySelector("#bid-button");
   homeLinks.forEach((homeLink) => {
      homeLink.href = "home.html";
   });

   darkBtnLinks.forEach((darkBtnLink, index) => {
      if (index === 0) {
         darkBtnLink.href = "create-listing-page.html";
         darkBtnLink.innerText = "Create Listing";
      } else if (index === 1) {
         darkBtnLink.classList.add("d-none");
         bidButton.classList.replace("d-none", "d-block");
      }
   });

   lightBtnLink.href = "index.html";
   lightBtnLink.innerText = "Logout";
   lightBtnLink.id = "logout";
}
