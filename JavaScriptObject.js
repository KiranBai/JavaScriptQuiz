// 1. Write a function to check if a given object is empty.
// function isEmptyObject(obj) {
//     return Object.keys(obj).length === 0;
// }
// const obj1 = {};
// const obj2 = { name: 'Kiran' };

// console.log(isEmptyObject(obj1)); // Output: true
// console.log(isEmptyObject(obj2)); // Output: false

// 2.  Create an object with property name, age, and occupation, and write a function to print each property and its value.
// const UserINfo = {
//     name: 'Kiran Bai',
//     age: 24,
//     occupation: 'Web Developer'
// };
// function printObj(obj) {
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             console.log(`${key}: ${obj[key]}`);
//         }
//     }
// }
// printObj( UserINfo);

// 3. Write a function to clone an object.
// function cloneObj(obj) {
//     return { ...obj };
// }
// const original = {
//     name: 'Kiran',
//     age: 24,
//     occupation: 'Web Developer'
// };

// const cloned = cloneObj(original);
// console.log(cloned);

//4. Write a function to merge two objects.
// function mergeObjects(obj1, obj2) {
//     return { ...obj1, ...obj2 };
// }
// const obj1 = {
//     name: 'Kiran',
//     age: 24
// };

// const obj2 = {
//     occupation: 'Web Developer',
//     location: 'Daherki'
// };
// const merged = mergeObjects(obj1, obj2);
// console.log(merged);

//5.  Write a function that takes an object and returns an array of its keys.
// function ObjKeys(obj) {
//     return Object.keys(obj);
// }
// const UserInfo = {
//     name: 'Kiran',
//     age: 24,
//     occupation: 'Web Developer'
// };

// const keys = ObjKeys(UserInfo );
// console.log(keys); // Output: ['name', 'age', 'occupation']

// 6.  Write a function that takes an object and returns an array of its values.
// function ObjValues(obj) {
//     return Object.values(obj);
// }
// const UserInfo = {
//     name: 'Kiran',
//     age: 24,
//     occupation: 'Web Developer'
// };
// const values = ObjValues(UserInfo);
// console.log(values); // Output: ['Kiran', 24, 'Web Developer']

// 7.  Write a function that takes an object and returns an array of key-value pairs.
// function ObjEntries(obj) {
//     return Object.entries(obj);
// }
// const UserInfo = {
//     name: 'Kiran',
//     age: 24,
//     occupation: 'Web Developer'
// };

// const entries = ObjEntries(UserInfo);
// console.log(entries);

//8. Write a function to deeply merge two nested objects.
// Not done by me
// function deepMerge(obj1, obj2) {
//     return Object.keys(obj2).reduce((acc, key) => {
//         if (obj1[key] && typeof obj2[key] === 'object' && !Array.isArray(obj2[key])) {
//             acc[key] = deepMerge(obj1[key], obj2[key]);
//         } else {
//             acc[key] = obj2[key];
//         }
//         return acc;
//     }, { ...obj1 }); 
// }
// const obj1 = {
//     name: 'Kiran',
//     details: {
//         age: 24,
//         address: {
//             city: 'Daherki',
//             zip: '65110'
//         }
//     }
// };
// const obj2 = {
//     details: {
//         address: {
//             city: 'Ghotki'
//         },
//         occupation: 'Web Developer'
//     },
//     hobbies: ['reading', 'Desiging']
// };
// const merged = deepMerge(obj1, obj2);
// console.log(merged);


//9.  Write a function to update the properties of an object using another object.
// function updateObject(target, updates) {
//     return Object.assign(target, updates);
// }
// const UserInfo = {
//     name: 'Kiran',
//     age: 24,
//     occupation: 'Web Developer'
// };
// const updates = {
//     age: 25,
//     occupation: 'Frontend Engineer',
//     location: 'Daherki'
// };
// const updatedPerson = updateObject(UserInfo, updates);
// console.log(updatedPerson);

// 10. Write a function that takes an array of objects and returns an object where the keys are the values of a specified property from each object, and the values are arrays of the remaining properties.
// Not Done By me
// function groupByProperty(arr, key) {
//     const result = {};
//     arr.forEach(obj => {
//         const keyValue = obj[key];
//         const { [key]: _, ...remainingProps } = obj;
//         if (!result[keyValue]) {
//             result[keyValue] = [];
//         }
//         result[keyValue].push(remainingProps);
//     });

//     return result;
// }
// const data = [
//     { id: 'a', name: 'Kiran', age: 24, occupation: ' Web Developer' },
//     { id: 'b', name: 'Adesh', age: 18, occupation: ' Web Designer' },
//     { id: 'a', name: 'Updesh', age: 12, occupation: 'Frontend Developer' }
// ];
// const result = groupByProperty(data, 'id');
// console.log(result);





