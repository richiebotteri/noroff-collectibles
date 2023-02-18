/**
 * Converts plain stringHtml to html with DOMparser
 * @export
 * @module createParseDoc
 * @param {string} htmlString has a string of html that will be converted to html elements
 * @return sends back a parserDocument with the fully rendered html version of the htmlString.
 */
export function createParseDoc(htmlString) {
   const parser = new DOMParser();
   const parseDocument = parser.parseFromString(`${htmlString}`, "text/html");
   return parseDocument;
}
