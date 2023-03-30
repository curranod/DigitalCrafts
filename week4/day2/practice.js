// let catBttn = document.getElementById('catBttn')
// let facts = document.getElementById('facts')
// let request = new XMLHttpRequest() 


// catBttn.addEventListener(click, factFetch())

// function factFetch () {
// request.addEventListener('load', function() {
//     const cats = JSON.parse(this.responseText)
//     const catFacts = cats.data
//     console.log(catFacts)
//     facts.innerHTML = catFacts
// })
// request.open('GET', 'https://meowfacts.herokuapp.com/')
// request.send()
// }
// factFetch()

const titleInput = document.getElementById('titleInput')
const symbolInput = document.getElementById('symbolInput')
const priceInput = document.getElementById('priceInput')
const quantityInput = document.getElementById('quantityInput')
const button = document.getElementById('button')
const bla = document.getElementById('bla')

function generatestocks () {
const request = new XMLHttpRequest()
request.addEventListener('load', function() {
    const stocksInfo = JSON.parse(this.responseText)
    console.log(stocksInfo)
    shmocks = stocksInfo.map((stocksInfo) => {
    return `<ul>
    <li>${stocksInfo.title}</li>
    <li>${stocksInfo.symbol}</li>
    <li>${stocksInfo.price}</li>
    <li>${stocksInfo.quantity}</li>
    </ul>
    `
    })
    bla.innerHTML = shmocks.join('')
})
request.open('GET', "https://endurable-bead-polo.glitch.me/stocks")
request.send()
}
generatestocks()

button.addEventListener('click', addStock)

function addStock() {
    const request = new XMLHttpRequest()
    request.open('POST', "https://endurable-bead-polo.glitch.me/stocks")
    const body = {
        symbol: symbolInput.value,
        title: titleInput.value,
        price: parseFloat(priceInput.value),
        quantity: parseInt(quantityInput.value),
    }
    request.setRequestHeader('Content-Type', 'application/json')
    request.send(JSON.stringify(body))
    generatestocks()
}
