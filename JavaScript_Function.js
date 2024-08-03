// 1. Write a function to check if a number is prime.
// function Prime(num) {
//     if (num <= 1) return false; 
//     if (num === 2) return true; 
//     if (num % 2 === 0) return false; 

//     for (let i = 3; i <= Math.sqrt(num); i += 2) {
//         if (num % i === 0) return false;
//     }

//     return true;
// }
// console.log(Prime(8));  // Output: false
// console.log(Prime(13)); // Output: true
// console.log(Prime(19)); // Output: true


// 2. Write a function that returns the factorial of a number.
// function factorial(n) {
//     if (n < 0) return 'Invalid input'; 
//     if (n === 0 || n === 1) return 1; 

//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log(factorial(4)); // Output: 24
// console.log(factorial(0)); // Output: 1
// console.log(factorial(6)); // Output: 720

//3. Write a function that takes a string and returns it with the first letter of each word capitalized.
// function FirstUp(str) {
//     return str
//         .split(' ') 
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) 
//         .join(' '); 
// }
// console.log(FirstUp('kiran bai')); // Output: "Kiran Bai"
// console.log(FirstUp('javascript is awesome')); // Output: "Javascript Is Awesome"

// 4. Write a function that takes another function as an argument and runs it after a specified delay.
// function delayFun(fun, delay) {
//     setTimeout(fun, delay);
// }
// delayFun(() => {
//     console.log("This message is delayed by 5 seconds ,Print Kiran Bai");
// }, 5000);

// 5. Write a function that takes an array of numbers and returns a new array with each element doubled, but only if the original element was greater than 10.
function doubleHighTen(arr) {
    const result = [];
    for (const num of arr) {
        if (num > 10) {
            result.push(num * 2);
        } else {
            result.push(num);
        }
    }
    return result;
}
const originalArray = [2, 14, 9, 25, 4];
const newArray = doubleHighTen(originalArray);
console.log(newArray); // Output: [2, 28, 9, 50, 9]
