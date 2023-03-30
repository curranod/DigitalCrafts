// let dogsUl = document.getElementById('dogsUl')
// let request = new XMLHttpRequest()

// request.addEventListener('load', function() {
//     console.log(this)
//     const result = JSON.parse(this.responseText)
//     const dogs = result
//     const dogFacts = dogs.map(dog => {
//         return `<li>${dog.fact}</li>`
//     })
//     dogsUl.innerHTML = dogFacts.join('')
// })

// request.open("GET", "https://island-bramble.glitch.me/dog-facts")
// request.send()

// const button = document.querySelector('button')
// const image = document.querySelector('img')

// button.addEventListener('click', function() {
//     const request = new XMLHttpRequest();

//     request.addEventListener('load', function(){
//         const parsed = JSON.parse(this.response)
//         image.setAttribute('src', `${parsed.message}`)
//     })

//     request.open('GET', 'https://dog.ceo/api/breeds/image/random')
//     request.send()
// })