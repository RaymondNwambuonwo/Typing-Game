const RandQuote = `http://api.quotable.io/random`;

function getQuote() {
  fetch(RandQuote)
    .then(response => response.json())
    .then(data => data.content);
}
