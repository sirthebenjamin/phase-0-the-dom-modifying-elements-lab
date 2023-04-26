// select the existing header element
const oldHeader = document.querySelector('main#main');

// remove the existing header element from the DOM
oldHeader.remove();

// create a new header element
const newHeader = document.createElement('h1');

// set the new header element's id to 'victory'
newHeader.setAttribute('id', 'victory');

// set the text of the new header element
newHeader.textContent = 'YOUR-NAME is the champion';

// add the new header element to the document's body
document.body.appendChild(newHeader);