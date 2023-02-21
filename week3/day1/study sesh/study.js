// const backgroundColor = document.getElementsByTagName('body')
// const buttonColor = document.getElementById('q1')
// buttonColor.addEventListener('click',function (){
//     buttonColor.setAttribute('style', 'color:red')
// })
// const button2Color = document.getElementById('btn')
// button2Color.addEventListener('click',function (){
//     button2Color.setAttribute('style', 'color:red')
// })

// const existingElement = document.getElementById('body')
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'An event is an action that happens in the browser. The browser produces a signal when an event occurs and provides a to execute some code when the event occurs. This usually takes place when a user is interacting with a webpage in some way. For example, when a user clicks a button an click event occurs, a click event occurs.'
// existingElement.insertAdjacentElement('afterend', newParagraph)
// const body = document.getElementById('body')
// const imageButton = document.createElement('button')
// imageButton.innerHTML = 'Click to Generate Photo'
// const randomImage = document.createElement('img')
// body.appendChild(imageButton)
// body.appendChild(randomImage)

// imageButton.addEventListener('click', function() {
//     randomImage.setAttribute('src', 'https://picsum.photos/200/300')
// })
const firstName = document.getElementById("first-name").value;
const lastName = documentt.getElementById("last-name").value;
const fullName = firstName + "" + lastName
document.getElementById("full-name").textContent = "Full Name: " + fullName