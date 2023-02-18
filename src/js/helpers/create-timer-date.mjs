export function createTimerDate(endDate) {
   const countDownDate = new Date(endDate).getTime();

   // Get the current date and time
   const now = new Date().getTime();

   // Calculate the difference between the current time and the time to count down to
   const distance = countDownDate - now;

   // Calculate minutes, seconds, and milliseconds from the difference
   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
   const hours = Math.floor(distance / (1000 * 60 * 60));
   const minutes = Math.floor(distance / (1000 * 60));
   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

   let timerContent = "";
   if (days !== 0) {
      timerContent = `<p>${days} days left</p>`;
   } else {
      if (hours !== 0) {
         timerContent = `<p>${hours} hours left</p>`;
      } else {
         if (minutes !== 0) {
            timerContent = `<p>${minutes} minutes left</p>`;
         } else {
            if (seconds !== 0) {
               timerContent = `<p>${minutes} minutes left</p>`;
            } else {
               clearInterval(timer);
               timerContent = `<p>Auction is over</p>`;
            }
         }
      }
   }

   return timerContent;
}
