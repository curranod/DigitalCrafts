const allOrders = document.getElementById('allOrders')
const emailInput = document.getElementById('emailInput')
const typeInput = document.getElementById('typeInput')
const sizeInput = document.getElementById('sizeInput')
const priceInput = document.getElementById('priceInput')
const submitOrderBttn = document.getElementById('submitOrderBttn')
const selectedEmail = document.getElementById('selectedEmail')
const emailSearch = document.getElementById('emailSearch')
const deleteSearch = document.getElementById('deleteSearch')
const searchEmailBttn = document.getElementById('searchEmailBttn')
const deleteBttn = document.getElementById('deleteBttn')

function showAllOrders() {
    let request = new XMLHttpRequest()
    request.addEventListener('load', function() {
        const orders = JSON.parse(this.response)
        let ordersMapped = orders.map((orders) => {
            return `<h1>${orders.email}'s Order</h1>
            <ul>
            <li>${orders.email}</li>
            <li>${orders.type}</li>
            <li>${orders.size}</li>
            <li>${orders.price}</li>
            </ul>
            `
        })
        allOrders.innerHTML = ordersMapped.join('')
})
request.open("GET", "https://troubled-peaceful-hell.glitch.me/orders")
request.send()
}

function addOrders() {
    const request = new XMLHttpRequest()
    request.open("POST", "https://troubled-peaceful-hell.glitch.me/orders")
    const body = {
        email: emailInput.value,
        type: typeInput.value,
        size: sizeInput.value,
        price: parseFloat(priceInput.value)
    }
    request.setRequestHeader('Content-Type', 'application/json')
    request.send(JSON.stringify(body))
}

submitOrderBttn.addEventListener('click', addOrders)

function getByEmail() {
    const request = new XMLHttpRequest()
    request.addEventListener('load', function() {
    const parsed = JSON.parse(this.response)
    console.log(parsed)
    const orderByEmail = `
            <h1>${parsed.email}'s Order</h1>
            <ul>
            <li>${parsed.email}</li>
            <li>${parsed.type}</li>
            <li>${parsed.size}</li>
            <li>${parsed.price}</li>
            </ul>
    `
    selectedEmail.innerHTML += orderByEmail
   
})
const userEmail = emailSearch.value
request.open('GET', `https://troubled-peaceful-hell.glitch.me/orders/${userEmail}`)
request.send()

}
searchEmailBttn.addEventListener('click', getByEmail)

function deleteByEmail() {
    let request = new XMLHttpRequest()
    request.addEventListener('load', function() {
        console.log(this.response)
    })
    const deleteValue = deleteSearch.value
    request.open('DELETE', `https://troubled-peaceful-hell.glitch.me/orders/${deleteValue}`)
    request.send()
}

deleteBttn.addEventListener('click', deleteByEmail)



showAllOrders()