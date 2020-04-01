const randQuote = "http://api.quotable.io/random";
const showQuote = document.getElementById("quoteDisplay");
const quoteInput = document.getElementById("quoteInput");
const timerClock = document.getElementById("timer");

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

function receiveQuote() {
  return fetch(randQuote)
    .then(response => response.json())
    .then(data => data.content);
}

async function showNewQuote() {
  const quote = await receiveQuote();
  showQuote.innerHTML = "";
  quote.split("").forEach(character => {
    const characterSpan = document.createElement("span");
    characterSpan.innerText = character;
    showQuote.appendChild(characterSpan);
  });
  quoteInput.value = null;
  startTimer();
}

let startTime;
function startTimer() {
  timerClock.innerText = 0;
  startTime = new Date();
  setInterval(() => {
    timerClock.innerText = getTimerTime();
  }, 1000);
}
function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000);
}

showNewQuote();
