// // CLASSES 

// // Class represents a blue print 

// /*
// Car (Class = Blueprint)
// - make 
// - model 
// - vin 
// // When you use a blue print to create an actual concrete car that is known as an object  
// House (Class)
// - sq feet 
// - no of stories
// - no of bed rooms 
// - no of bath rooms
// */

// let someCar = { make: 'Honda', model: 'Accord' }

// // Blue print 
// class Car {
//   constructor(make, model) {
//     this.make = make
//     this.model = model
//   }
// }

// //let make = prompt('Enter make: ')
// //let model = prompt('Enter model ')


// // myCar is an actual concrete object representing Honda Accord 
// let myCar = new Car('Honda', 'Accord') // creating an object of Car class //  new is telling you that you are creating object
// console.log(myCar)
// console.log(myCar.make, myCar.model) // 


// let car2 = new Car('Toyota', 'Camry')
// console.log(car2)


// class Table {
//   constructor(width, height, material) {
//     this.width = width
//     this.height = height
//     this.material = material
//   }
// }

// // creating an object/instance of a Table 
// let cherryWoodTable = new Table(100, 100, 'Wood') 
// console.log(cherryWoodTable)

// let plasticTable = new Table(20, 20, 'Plastic')
// console.log(plasticTable)

// cherryWoodTable.width = 99 
// console.log(cherryWoodTable)
// //activity 1

// // class Table {
// //     constructor(heigth, length, material) {
// //     this.height = heigth
// //     this.length =length
// //     this.material = material
// //     }
// // }
// // let coffeeTable = new Table(10, 10, "wood")
// // let diningRoomTable = new Table(10, 10, "metal")
// // let kitchenTable = new Table(20, 50, "wood")

// // CLASSES 

// // Class represents a blue print 

// /*
// Car (Class = Blueprint)
// - make 
// - model 
// - vin 
// // When you use a blue print to create an actual concrete car that is known as an object  
// House (Class)
// - sq feet 
// - no of stories
// - no of bed rooms 
// - no of bath rooms
// */

// let someCar = { make: 'Honda', model: 'Accord' }

// // Blue print 
// class Car {
//   constructor(make, model) {
//     this.make = make
//     this.model = model
//     this.currentGear = 'N'
//   }

//   drive() {
//     console.log('Driving...')
//   }

//   brake() {

//   }

//   changeGear(gear) {
//     this.currentGear = gear 
//   }

// }

// let anotherCar = new Car('Honda', 'Civic') 
// console.log(anotherCar)
// // change gear 
// anotherCar.changeGear('D')
// console.log(anotherCar)


// //let make = prompt('Enter make: ')
// //let model = prompt('Enter model ')


// // myCar is an actual concrete object representing Honda Accord 
// let myCar = new Car('Honda', 'Accord') // creating an object of Car class //  new is telling you that you are creating object
// console.log(myCar)
// console.log(myCar.make, myCar.model) // 


// let car2 = new Car('Toyota', 'Camry')
// console.log(car2)


// class Table {
//   constructor(width, height, material) {
//     this.width = width
//     this.height = height
//     this.material = material
//   }
// }

// // creating an object/instance of a Table 
// let cherryWoodTable = new Table(100, 100, 'Wood') 
// console.log(cherryWoodTable)

// let plasticTable = new Table(20, 20, 'Plastic')
// console.log(plasticTable)

// cherryWoodTable.width = 99 
// console.log(cherryWoodTable)


// // A company can have many employees 

// class Company {
//   constructor(name) {
//     // this means that the property will be available to the objects of type Company
//     this.name = name 
//     this.employees = [] 
//   }
// }

// class Employee {
  
//   constructor(firstName, lastName) {
//     this.firstName = firstName 
//     this.lastName = lastName
//     this.hoursWorked = 0 
//     this.eligibleForBonus = false 
//   }

//   work() {
//     // increment hoursWorked by +8 hours 
//     this.hoursWorked += 8 

//     if(this.hoursWorked > 40) {
//       this.eligibleForBonus = true 
//     }

//   }


// }

// let company = new Company('HEB')
// console.log(company.name) 

// let employee = new Employee('John', 'Doe')
// console.log(employee.hoursWorked)
// employee.work() 
// console.log(employee.hoursWorked)
// employee.work() 
// employee.work() 
// employee.work() 
// employee.work() 
// employee.work() 
// console.log(employee)

// // add employee to a company 
// company.employees.push(employee)
// console.log(company.employees)

// let newEmployee = new Employee('Steven', 'Doe')
// console.log(newEmployee)

// newEmployee = employee 
// console.log(newEmployee)
// newEmployee.firstName = 'Mary'

// console.log(newEmployee)
// console.log(employee)

//ACTIVITY 2

// class User {
//     constructor(firstName, lastName) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.addresses = []
//     }
// }
// class address {
//     constructor(street, city, state, zip) {
//         this.street = street
//         this.city = city
//         this.state = state
//         this.zip = zip
//     }
// }
// let John = new User ('John', 'Doe' )

// let johnsAddress1 = new address('way', 'houston', 'tx', '77380')

// let johnsAddress2 = new address('street', 'nyc', 'ny', '12345')

// John.addresses.push(johnsAddress1, johnsAddress2)

// console.log(John.addresses)
// for(let index = 0; index < John.addresses.length; index++) {
//     console.log(John.addresses[index])
// }

// ACTIVITY 3

// class BankAccount {
//     constructor(accountBalance, accountNumber) {
//         this.accountBalance = accountBalance
//         this.accountNumber = accountNumber
//     }
//     deposit (amount) {
//         this.accountBalance += amount
//     }
//     withdrawal (amount) {
//         this.accountBalance -= amount
//     }
//     transfer (amount, destinationAccount) {
//         this.accountBalance -= amount
//         destinationAccount.accountBalance += amount
//     }

// }

// let wellsFargo = new BankAccount (0, 5)
// let chase = new BankAccount (0, 6)
// wellsFargo.deposit(100)
// console.log(wellsFargo.accountBalance)
// wellsFargo.withdrawal(50)
// console.log(wellsFargo.accountBalance)
// wellsFargo.transfer(25, chase)
// console.log(wellsFargo.accountBalance)
// console.log(chase.accountBalance)

//extra practice



// let array = [1, 2, 3, 4]
// let sum = 0
// for (let index = 0 ; index < array.length; index++) {
//     sum += array[index]
// }
// console.log(sum)



let words = ['cat', 'dog', 'bog', 'bmmf', 'ehhhhh']
for (let index = 0; index < words.length; index++) {
    console.log(words[index].length)
}