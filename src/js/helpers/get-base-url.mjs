export function getBaseUrl() {
   const originLocation = window.location.origin;

   let baseUrl;
   if (originLocation === "https://richiebotteri.github.io") {
      baseUrl = "/Semester-Project-2";
      return baseUrl;
   } else {
      baseUrl = "";
      return baseUrl;
   }
}
