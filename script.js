// String Manipulation

// how to reverse a string in javascript

function reverseString(str) {
    return str.split('').reverse().join('');
}

let originalString = "Javascript";
let reversedString = reverseString(originalString);

console.log(reversedString);


// how to count characters of a string in javascript

function count(String) {

    return String.length;

}

let letter = "Bootcamp";
let counted = count(letter);

console.log(counted);




// how to capitalize a letter in javascript

function capital(letter) {
    return letter.toUpperCase();
}

let word = "Christian";
let result = capital(word);

console.log(result);



// Array functions

// min and max value of numbers in an array
function findMaxMin() {
    const nums = [2, 4, 6, 7, 8, 1, 3, 5];
    const max = Math.max(...nums);
    const min = Math.min(...nums);

    console.log(max);
    console.log(min);
}
findMaxMin()


//sum of a given array

function Sum() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8]

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    console.log(sum);


}

Sum()


// filter array


function Men(age) {
    return age >= 20;
}

let ages = [34, 31, 20, 14, 15, 17, 18, 40];
let filtered = ages.filter(Men);

console.log(filtered);


//Mathematical functions

//factorial of a number
let n = 5

function factorial(n) {

    let ans = 1;
    if (n === 0)
        return 1;

    for (let i = 2; i <= n; i++)
        ans = ans * i;
    return ans;
}

console.log(factorial(n));


// prime number check

// program to check if a number is prime or not

// take input from the user
const numbers = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1
if (numbers === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (numbers > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < numbers; i++) {
        if (numbers % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${numbers} is a prime number`);
    } else {
        console.log(`${numbers} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}




// fibonacci

// program to generate fibonacci series up to a certain number

// take input from the user
const number = parseInt(prompt('Enter a positive number: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');
console.log(n1); // print 0
console.log(n2); // print 1

nextTerm = n1 + n2;

while (nextTerm <= number) {

    // print the next term
    console.log(nextTerm);

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}
