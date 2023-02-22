export function replaceDuplicates(childNode, updatedChildNode, parentContainer) {
   let existingChildNode = childNode;

   if (existingChildNode) {
      existingChildNode.replaceWith(updatedChildNode);
   } else {
      parentContainer.appendChild(updatedChildNode);
   }
}
