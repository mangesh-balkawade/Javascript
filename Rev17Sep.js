// let arr = []
// for (let index = 0; index < 100; index++) {
//     arr.push(index)
// }
// console.log(arr);

// // Filter 
// let even = arr.filter(no => (no & 1) != 1);
// console.log(even);

// // Map Returns The New Array Doesent Update The Existence One
// let neArr = arr.map(item => item + 1);
// arr = neArr;
// console.log(arr);

// // Reduce
// let sum = arr.slice(0, 10).reduce((no1, no2) => no1 + no2)
// console.log(sum);

// // Some Expect The Predicate 
// let flag = arr.some(no => no > 100);
// console.log(flag);

// // Every
// flag = arr.every(no => no <= 100);
// console.log(flag);

// // findIndex
// let index = arr.findIndex(no => (no & 1) != 1)
// console.log(index);

// // find
// let first = arr.find(no => (no & 1) != 1)
// console.log(first);

// == true === false
null == undefined ? console.log(true) : console.log(false);

let flag = 100 >= 100 ? true : false
console.log(flag);

function nullChecking(no) {
    if (no)
        return no;
    else
        null
}

flag=nullChecking(100);
console.log(flag);
flag=nullChecking(null)
console.log(flag); // undefined

