
function palindrome(input) {

    const length = input.length;

    for (let i = 0; i < length / 2; i++) {

        if (input[i] !== input[length - 1 - i]) {
            return 'This word is not a palindrome';
        }
    }
    return 'This word is a palindrome!';
}

const input = prompt('Enter a word to determine if it is a paindrome or not: ');

const value = palindrome(input);

console.log(value);