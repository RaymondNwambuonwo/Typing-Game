const randQuote = `http://api.quotable.io/random`;
const showQuote = document.getElementById(`quoteDisplay`);
const quoteInput = document.getElementById(`quoteInput`);
const timer = document.getElementById("timer");

quoteInput.addEventListener("input", () => {
  const arrayQuote = showQuote.querySelectorAll("span");
  const arrayValue = quoteInput.value.split("");

  let correct = true;
  arrayQuote.forEach((characterSpan, index) => {
    const character = arrayValue[index];
    if (character == null) {
      characterSpan.classList.remove("correct");
      characterSpan.classList.remove("incorrect");
      correct = false;
    } else if (character === characterSpan.innerText) {
      characterSpan.classList.add("correct");
      characterSpan.classList.remove("incorrect");
    } else {
      characterSpan.classList.remove("correct");
      characterSpan.classList.add("incorrect");
      correct = false;
    }
  });
  if (correct) showNewQuote();
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
  startTimer();
}

function startTimer() {
  timer.innerText = 0;
  setInterval(() => {}, 1000);
}

showNewQuote();
