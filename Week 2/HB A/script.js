
function setTextOnClick(selectorName, clickText)
{
  const selector = document.querySelector(selectorName);

  if (selector !== null) {
    selector.addEventListener("click", () => {
      selector.textContent = clickText;
    });
  }
  
}

setTextOnClick("h4", "Happy Birthday To You!");
setTextOnClick("h3", "Happy Birthday TO YOU!!!");
setTextOnClick("h2", "Happy Birthday DEAR ASPEN!!!");
setTextOnClick("h1", "HAPPY BIRTHDAY TO YOU!!!");

