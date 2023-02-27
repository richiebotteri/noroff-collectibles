export function addStockImage(imageArray) {
   if (Array.isArray(imageArray)) {
      return imageArray;
   } else {
      const stockImg = ["https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"];
      return stockImg;
   }
}
