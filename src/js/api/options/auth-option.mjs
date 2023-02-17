export function authOption(method, formData) {
   const option = {
      method: method,
      headers: {
         "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
   };

   return option;
}
