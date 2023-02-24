export function changeToSignedInLinks() {
   const lightBtnLink = document.querySelector("a[href='login-page.html']");
   const darkBtnLink = document.querySelector("a[href='register-page.html']");
   const homeLinks = document.querySelectorAll("a[href='index.html']");

   homeLinks.forEach((homeLink) => {
      homeLink.href = "home.html";
   });

   lightBtnLink.href = "index.html";
   lightBtnLink.innerText = "Logout";
   lightBtnLink.id = "logout";

   darkBtnLink.href = "create-listing-page.html";
   darkBtnLink.innerText = "Create Listing";
}
