// Write a function to find the maximum element in an array.
// function Higher(arr) {
//     let max = arr[0]; 
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// const numbers = [5, 1, 8, 10, 3, 9, 6];
// const maxE = Higher(numbers);
// console.log(maxE);  // Output 10

// 2. Write a function to reverse an array without using the built-in reverse method.
// function Reverse(arr) {
//     let reversedArr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversedArr.push(arr[i]);
//     }
//     return reversedArr;
// }
// const numbers = [1, 2, 3, 4, 5];
// const reversedNumbers = Reverse(numbers);
// console.log(reversedNumbers); // Output: [5, 4, 3, 2, 1]

// 3. Use the map method to create a new array that contains the square of each element in the original array.
// function Square(arr) {
//     return arr.map(el => el * el);
// }
// const numbers = [2, 4, 6, 8, 10];
// const squaredNo = Square(numbers);
// console.log(squaredNo); // Output: [4, 16, 36, 64, 100]

// 4. Write a function that uses the filter method to remove all even numbers from an array.
// function removeEvenNo(arr) {
//     return arr.filter(number => number % 2 !== 0);
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const oddNumbers = removeEvenNo(numbers);
// console.log(oddNumbers); // Output: [1, 3, 5, 7, 9]

// 5. Use the reduce method to calculate the sum of all elements in an array.
// function sumArray(arr) {
//     return arr.reduce((sum, cur) => sum + cur, 0);
// }
// const numbers = [2, 4, 6, 8, 10];
// const sum = sumArray(numbers);
// console.log(sum); // Output: 15

// 6. Write a function that uses map to extract the names of all users from an array of user objects (each user object contains name and age properties).
// function UserName(users) {
//     return users.map(user => user.name);
// }
// const users = [
//     { name: 'Kiran', age: 24 },
//     { name: 'Adesh', age: 18 },
//     { name: 'Updesh', age: 12 }
// ];

// const names = UserName(users);
// console.log(names); // Output: ['Kiran', 'Adesh', 'Updesh']


// 7. Write a function that uses filter to get all the users older than 30 from an array of user objects.
// function AgeAbove30(users) {
//     return users.filter(user => user.age > 30);
// }
// const users = [
//     { name: 'Kiran', age: 24 },
//     { name: 'Adesh', age: 18 },
//     { name: 'Updesh', age: 12 },
//     { name: 'sadhna', age: 40 }
// ];

// const above30Users = AgeAbove30(users);
// console.log(above30Users); //[ { name: 'sadhna', age: 40 } ]

// 8. Use reduce to create an object that contains the counts of each unique element in an array.
// function countElements(arr) {
//     return arr.reduce((counts, element) => {
//         counts[element] = (counts[element] || 0) + 1;
//         return counts;
//     }, {});
// }
// const numbers = [1, 2, 2, 3, 3, 3, 4];
// const counts = countElements(numbers);
// console.log(counts); // Output: { '1': 1, '2': 2, '3': 3, '4': 1 }

// 9. Write a function to flatten a nested array using the reduce method.
// function Array(nestedArray) {
//     return nestedArray.reduce((flattened, element) => {
//         if (Array.isArray(element)) {
//             return flattened.concat(flattenArray(element));
//         } else {
//             return flattened.concat(element);
//         }
//     }, []);
// }
// const nestedArray = [1, [2, [3, 4], 5], [6, 7], 8];
// const flatArray = Array(nestedArray);
// console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

// 10. Use filter and map together to get an array of names of users older than 30 from an array of user objects.
function Above30(users) {
    return users
        .filter(user => user.age > 30)  
        .map(user => user.name);       
}

const users = [
    { name: 'Kiran', age: 24 },
    { name: 'Adesh', age: 18 },
    { name: 'Updesh', age: 12 },
    { name: 'Sadhna', age: 40 }
];

const names = Above30(users);
console.log(names); // Output: [ 'Sadhna' ]




