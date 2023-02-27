export function showOnlineMessage() {
   const onlineMsg = document.querySelector("#sign-in-out-msg");
   onlineMsg.classList.replace("d-none", "d-block");
   setTimeout(() => {
      onlineMsg.classList.replace("d-block", "d-none");
   }, 3000);
}
