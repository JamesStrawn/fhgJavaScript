const textElement = document.querySelector("h1");

if (textElement !== null) {
  textElement.addEventListener("click", () => {
    textElement.textContent = "Hello there!";
  });
} else {
  console.log("Element not found!") ;
}
