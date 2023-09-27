var x;
x = 5;
console.log(x);

const textElement = document.querySelector("h1");

if (textElement !== null) {
  textElement.addEventListener("click", () => {
    x += 1;
    textElement.textContent = x;
  });
} else {
  console.log("Element not found!") ;
}

const newHeading = document.createElement("h1");
const headingText = document.createTextNode("DOM manipulation with JavaScript");
newHeading.appendChild(headingText);
document.body.appendChild(newHeading);
