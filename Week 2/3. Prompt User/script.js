var userName = prompt("What is your name?");

const textElement = document.querySelector("h1");

if (textElement !== null) {
    textElement.textContent = "Hello, " + userName + "!";
    textElement.style = "color: red";
} else {
  console.log("Element not found!") ;
}
