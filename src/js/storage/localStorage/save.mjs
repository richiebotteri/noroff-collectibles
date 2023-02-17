/**
 * Save value-item to localStorage
 * @export
 * @module saveItem
 * @param {string} key add string key
 * @param {*} value add any param type
 * @example
 *```js
 * //add an object to localStorage
 * const profile = {
 * userName: "tom",
 * email: "tom@example.com",
 * }
 *
 * //saves profile object to localStorage
 * //with the key "profile"
 * saveItem("profile", profile);
 *
 * //if value is an numberString
 * //it will be converted to a number value
 *```
 */
export function saveItem(key, value) {
   localStorage.setItem(key, JSON.stringify(value));
}
