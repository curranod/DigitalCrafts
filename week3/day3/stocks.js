let quotes = {
    "APLE":{name : "Apple", price : 0},
    "AMAZ":{name : "Amazon", price :0},
    "ALBAB":{name : "Ali Baba", price :0},
    "GOOG":{name : "Google", price :0},
    "FB":{name : "Facebook", price :0}
  }
  
  function getStockQuote(symbol) {
    let stock = quotes[symbol]
    stock.price = getRandomInt(100,500)
    return quotes[symbol]
  }
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  