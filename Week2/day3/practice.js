// OBJECTS
// attributes are the same as properties

// let car = {
//     make: 'Honda',
//     model: 'Accord',
//     year: '2010',
//     hasTurbo: false
// }
// let car2 = {
//     make: 'Toyota',
//     model: 'Camry',
//     year: '1998',
//     hasTurbo: True
// }

// console.log(car.make)
//displays only the make of the car variable

//ACTIVITY 1

// let firstName = prompt('What is your first name?')
// let lastName = prompt('what is your last name')
// let greetGenerator = {
//     usrName1: firstName,
//     usrName2: lastName
// }
// console.log(`My name is ${greetGenerator.usrName2}, ${greetGenerator.usrName1}  `)

// let john = {id: '123', name: 'John'}
// let mary = {id: '345', name: 'Mary'}
// let students = [john, mary]
// let student = students[0]
// line 35 data type is object because its calling an object from an array of objects

//loop through an array and print all of the students
// for(let index = 0; index  < students.length; index++) {
//     let person = students[index]
//     console.log(student)
//     conosole.log(student.name)
// }

//NESTED OBJECT

// let customer = {customerId: '123', name: 'John Doe', addresses: [
//     {
//     street: '123 bob',
//     state: 'TX',
//     zipCode: '77381',
//     },
//     {
//     street: '122 gob',
//     state: 'TX',
//     zipCode: '77381',
//     }
// ]
// }
// console.log(customer)

// console.log(customer.addresses)

// for(let index = 0; index < customer.addresses)

let customer = {firstName: 'Curran', lastName: 'Odonoghue', addressOne: {
    street: 'bob way', 
    city: 'The Woodlands',
    state: 'TX'
}, addressTwo: {
    street: 'shmob way', 
    city: 'The Shwoodlands',
    state: 'SHTX'
}
}
console.log(customer.addressOne)
console.log(customer.addressTwo)