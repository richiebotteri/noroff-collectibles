/**
 * Load value-item from localStorage
 * @export
 * @module loadItem
 * @param {string} key add string key from localStorage
 * @returns returns a javascript value, converted from JSON
 * @example
 *```js
 * //Load profile object from localStorage
 * //with the key "profile"
 * const profileObject = loadItem("profile");
 *
 * //console logging the profileObject
 * console.log(profileObject);
 *```
 */
// load local storage item
export function loadItem(key) {
   try {
      const storedValue = localStorage.getItem(key);
      return JSON.parse(storedValue);
   } catch {
      return null;
   }
}
