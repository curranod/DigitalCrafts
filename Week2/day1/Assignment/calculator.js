let input1 = prompt('input the number you would like to calculate: ')

let input1int = parseInt(input1)

let input2 = prompt('input the operator:+-*/ ')

let input3 = prompt('input the 2nd number you would like to calculate')

let input3int = parseInt(input3)

function add(a, b){
    let result = (a + b)
    console.log(result)
}
function subtract(a, b){
    let result = (a - b)
    console.log(result)
}
function multiply(a, b){
    let result = (a * b)
    console.log(result)
}
function divide(a, b){
    let result = (a / b)
    console.log(result)
}

if(input2 == '+') {
    add(input1int, input3int)
}
else if(input2 == '-') {
    subtract(input1int, input3int)
}
else if(input2 == '*') {
    multiply(input1int, input3int)
}
else if(input2 == '/') {
    divide(input1int, input3int)
}
else{
    console.log('AHHHHH AHHHHH AHHHHHHHHH')
}