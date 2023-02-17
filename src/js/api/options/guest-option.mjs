export function guestOption() {
   const option = {
      method: "get",
      headers: {
         "Content-type": "application/json",
      },
   };

   return option;
}
