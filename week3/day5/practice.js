
// const counterHeading = document.getElementById('counterHeading')
// const incrementCounterButton = document.getElementById('incrementCounterButton')
// const registerForm = document.getElementById('registerForm')


// function performGreeting() {
//     return "HELLO"

// }

// console.log(performGreeting())

// registerForm.addEventListener('submit', (event) => {
//     console.log('SUBMIT FIRED')
//     // This prevents the form from being submitted 
//     console.log(event.preventDefault())

// })


// let counter = 0 

// incrementCounterButton.addEventListener('click', () => {
//     counter++
//     counterHeading.innerHTML = counter 
// })


/*
const firstName = 'John'
const lastName = 'Doe'

const counterHeading = document.getElementById('counterHeading')

// The counter value is 99
//counterHeading.innerHTML = `the counter value is ${counter}` 

// setInterval 


function add(a, b) {

}

add(4,5)

function greet(name) {

}

greet('Mary')

function openBankAccount(accountNo, balance) {

}

openBankAccount('123', 100)

function incrementCounter(counterCallback) {

    let counter = 0    
    setInterval(function(){ 
        counter++
        counterCallback(counter)
        //console.log(counter)
    }, 2000)

}

// how to call incrementCounter function 
incrementCounter(function(ctr) {
    console.log(ctr)
})




function foo(a, b, c) {

    c() 

}


foo(10, 34, function() {

})


function loadProducts(fetchProductsCallback) {

    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(products => {
        fetchProductsCallback(products)
    })
}

loadProducts(function(allProducts) {
    console.log(allProducts)
})

*/

//CALLBACK PRACTICE

//1--------------------------------------------------------------

// function delay(callback, delayTime) {
//     setTimeout(callback, delayTime)
// }

// function sayHello() {
//     console.log('Hello!');
// }

// delay(sayHello, 1000);

//2----------------------------------------------------------------

// function repeat(callback, intervalTime) {
//     setInterval(callback, intervalTime)
// }

// function urMom() {
//     console.log('Ur mom')
// }

// repeat(urMom, 1000)

//3-----------------------------------------------------------------

// let stupidArray = [1, 2, 3, 4, 5, 6, 7, 5, 8, 9]

// function arraySorter(filterFunctionName, arrayName) {
//     filterFunctionName(arrayName)
// }

// function filteredArray(array) {
//     let filteredArray = array.filter(function(number) {
//         return number == 5
//     })
//     console.log(filteredArray)
// }

// arraySorter(filteredArray, stupidArray)

//4------------------------------------------------------------------

// let names = ['john','jacob', 'jingle', 'heimer', 'Schmidt']

// function mappa(mapFunction, arrayToMap) {
//     mapFunction(arrayToMap)
// }

// function bobMapper(array) {
//     let mappedArray = array.map(function(name) {
//         return name + 'bob'
//     })
//     console.log(mappedArray)
// }

// mappa(bobMapper, names)

//5------------------------------------------------------------------

// let stupidArray = [1, 2, 3, 4, 5, 6, 7, 5, 8, 9]

// function reducer(reduceFunction, arrayToReduce, initial) {
//     reduceFunction(arrayToReduce, initial)
// }

// function addReducer (array, initial) {
//     let reducedArray = array.reduce(function(bla, shma) {
//         return bla += shma
//     }, initial)
//     console.log(reducedArray)
// }

// reducer(addReducer, stupidArray, 4)

let numbers = [1, 2, 3, 4, 5, 6, 7, 5, 8, 9]

function findBigNum(array, numFinder) {
    numFinder(array)
}

function numFinder(array) {
    let biggestNum = array [0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > biggestNum) {
            biggestNum = array[i]
        }
    }
    console.log(biggestNum)
}

findBigNum(numbers, numFinder)