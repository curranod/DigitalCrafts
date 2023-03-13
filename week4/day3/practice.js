// const productsUl = document.getElementById('productsUl')

// fetch('https://api.escuelajs.co/api/v1/products')
// .then(response => response.json())
// .then(products => {
//     const mappedProducts = products.map(product => {
//         return `
//         <li>${product.title}</li>
//         <li>${product.description}</li>
//         <img src='${product.images[0]}'>
//         `
//     })
//     productsUl.innerHTML += mappedProducts.join('')
// })


// const productsUl = document.getElementById('productsUl')
// const addProductBttn = document.getElementById('addProductBttn')
// const emailInput = document.getElementById('emailInput')
// const typeInput = document.getElementById('typeInput')
// const sizeInput = document.getElementById('sizeInput')
// const priceInput = document.getElementById('priceInput')

// function displayOrders() {
// fetch('https://troubled-peaceful-hell.glitch.me/orders')
// .then(response => response.json())
// .then(products => {
//     const mappedProducts = products.map(product => {
//         return `
//         <li>${product.email}</li>
//         <li>${product.type}</li>
//         <li>${product.size}</li>
//         <li>${product.price}</li>
//         `
//     })
//     productsUl.innerHTML += mappedProducts.join('')
// })
// }


// function addOrder() {
//     body = {
//         email: emailInput.value,
//         type: typeInput.value,
//         size: sizeInput.value,
//         price: parseFloat(priceInput.value)
//     }
//     fetch('https://troubled-peaceful-hell.glitch.me/orders', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(body)
// })
// }
// displayOrders()
// addProductBttn.addEventListener('click', addOrder)

