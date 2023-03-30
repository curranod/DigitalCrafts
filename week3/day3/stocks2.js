const symbolInput = document.getElementById('symbol');
const searchButton = document.getElementById('search-button');
const stockName = document.getElementById('stock-name');
const stockPrice = document.getElementById('stock-price');

let intervalId = null;

function searchStockQuote() {
  const stock = getStockQuote(symbol);
    stockName.innerText = `Name: ${stock.name}`;
    stockPrice.innerText = `Price: $${stock.price.toFixed(2)}`;
}

searchButton.addEventListener('click', () => {
  searchStockQuote();
  intervalId = setInterval(searchStockQuote, 2000);
});
