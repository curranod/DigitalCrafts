input = prompt('input a number to determine if it is prime of not: ')

let isprime = true;

let inputInt = parseInt(input)
if(inputInt ===1) {
    console.log("AHHHHHH AHHHHHHHH AHHHHHHHHH")
}
else if (inputInt > 1) {
    for (let i = 2; i < inputInt; i++) {
        if (inputInt % i == 0) {
            isprime = false;
            break;
        }
    }
}
if (isprime) {
    console.log(`${input} is a prime number`);
} else {
    console.log(`${input} is not a prime number`);
}

