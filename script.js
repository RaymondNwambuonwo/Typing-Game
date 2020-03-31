const randQuote = `http://api.quotable.io/random`;
const showQuote = document.getElementById(`quoteDisplay`);
const quoteInput = document.getElementById(`quoteInput`);

quoteInput.addEventListener("input", () => {
  const arrayQuote = showQuote.querySelectorAll("span");
  const arrayValue = quoteInput.value.split("");
  arrayQuote.forEach((characterSpan, index) => {});
});

function getQuote() {
  return fetch(randQuote)
    .then(response => response.json())
    .then(data => data.content);
}

async function showNewQuote() {
  const quote = await getQuote();
  showQuote.innerText = quote;
  quote.split("").forEach(character => {
    const characterSpan = document.createElement("span");
    characterSpan.innerText = character;
    showQuote.appendChild(characterSpan);
  });
  quoteInput.value = null;
}

showNewQuote();
