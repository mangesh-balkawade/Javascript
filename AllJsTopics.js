//"use strict";
// let var const

var a = 200; // golabal veriable
function add(no1) {
  c = 1000; // gloabal veriable
  var a = 100;
  if (true) {
    let b = 10;
    console.log(a); // local veriable
  }
  //  console.log(b); //block scope
}

// console.log(b);

// == ani ===
console.log("1" == 1); // string int madhe honar
console.log(1 === "1"); // strong checking

// // datatypes:
// // Number String Boolean Object Null Undefined Nan -

// // type conversion
var no1 = 123;
str1 = no1.toString(); // toString chalat
str1 = "123";
var no1 = 1 + Number(str1);
console.log(no1 + "no1");

// // functions
function add(no1) {
  console.log(no1 + 1); // STR CAT
  console.log(1 + no1 + "a"); //1+no strcat
  // -1 kel tar Nan
}
add(1);
// add(1,2) // first parameter ghet rest sodun det
add("10"); // string concatination

object1 = {
  name: "mangesh",
  age: 10,
  disp: function () {
    console.log(this.age + " " + this.name);
  },
};

console.log(object1);
object1.name = "shibha";
console.log(object1);

object1.disp()
str1 = "mangesh";

console.log(str1.substring(1));
console.log(str1.contains('m'));

// array
arr = [1, 2, 3]
arr = Array(1, 2, 3, 4)
arr = new Array(1, 2, 3, 4, 5)
console.log(arr);

arr = [1, 2, 3, [4, 5, 6]]
console.log(arr[3][0]); // array in array la access karaych asel tar
arr.forEach((e) => { console.log(e); })
for (let i in arr) {
  console.log(i); // index yeto mhanje keys
}

set1 = new Set()
set1.add(1)

map1 = new Map()
map1[1] = 1
console.log(map1);

// Map and set

function countFreqElement(arr) {
  let map1 = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map1.has(arr[i])) {
      map1.set(arr[i], map1.get(arr[i]) + 1);
    } else {
      map1.set(arr[i], 1);
    }
  }
  return map1;
}

function countSumTarget(arr, target) {
  let icnt = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        icnt = icnt + 1;
      }
    }
  }
  return icnt;
}

function firstNonRepeat(str1) {
  for (let i = 0; i < str1.length; i++) {
    if (str1.substring(i + 1).includes(str1[i]) == false) {
      return str1[i];
    }
  }
}
function firstNonRepeat2(str1) {
  let map1 = new Map();
  for (let i = 0; i < str1.length; i++) {
    if (map1.has(str1[i])) map1.set(str1[i], map1.get(str1[i]) + 1);
    else map1.set(str1[i], 1);
  }
  for (let key of map1.keys()) {
    if (map1.get(key) == 1) return key;
  }
}

function elementinarrboth(arr1, arr2) {
  let s1 = new Set(arr1);
  let s2 = new Set(arr2);
  let op = [];
  s1.forEach((ele) => {
    if (s2.has(ele)) op.push(ele);
  });
  return op;
}

function uniquestr(str1) {
  let m1 = new Map();
  for (let i = 0; i < str1.length; i++) {
    if (m1.has(str1[i]))
      return false
    else
      m1.set(str1[i], 1)
  }
  return true
}

arr = ["apple", "banana", "apple", "orange", "banana", "grape"];
console.log(countFreqElement(arr));
arr = [1, 2, 3, 4, 5];
console.log(countSumTarget(arr, 6));
console.log(firstNonRepeat2("abcaabde"));
let s1 = new Set();
s1.add(1);
s1.add(2);
for (let i of s1) {
  console.log(i);
}

s1.forEach((e) => {
  console.log(e);
});

console.log(elementinarrboth([1, 2, 3, 4, 5], [1, 2, 3]));

// weak map and weak set accept only objects

// regex

let str1 = "Mangesh  Balkawade  Man"
let str2 = str1.replace(/[ ]{2,}/g, " ")
console.log(str2);

try {
  let i = 10 / 0
  console.log(o);

}
catch (err) {
  //
  console.log(err);
}
finally {

}

// custome exception
class AgeNotValidExc extends Error {
  constructor(msg) {
    super(msg)
  }
}

try {
  throw new AgeNotValidExc("age not valid")
}
catch (err) {
  console.log(err.message);
}

// // // // // // hoistting

// console.log(b);  // error yeto not define mhanun

// // // // // console.log(a); // undefine
var a = 10

// // // // // classes in js
class Emp {
  company; // prperty characteristics

  // // // //   // constructor act karto builder sarkh jewadh deyil tewadh gheto
  constructor(name, age, sal) {
    this.name = name;
    this.age = age;
    this.sal = sal;
  }

  // function overloading not possible
  f1() {
    console.log("f1");
  }
  // last val fucntion ghet
  f1(n1) {
    console.log("f1" + n1);
  }
}

class Der extends Emp {
  f1() {
    console.log("der");
  }
}

let emp1 = new Emp("MAn", 23, 100000);
console.log(emp1);
let emp2 = new Emp("mm", 223);
console.log(emp2);
emp1.f1(); // undefine denar
// e3=new Der()
// e3.f1()

// // // // // inheritance

class Base {

  constructor(no1) {
    this.no1 = no1;
  }
  f1() {
    console.log("f1");
  }
}

class Derive extends Base {
  constructor(no1, no2) {
    // super() chalat
    // super(no1);
    this.no2 = no2
  }
  f1() {
    super.f1()
    return this.no1 + this.no2
  }
}
let obj = new Derive(1, 2)
console.log(obj.f1());

// // // // // Modules
// // // // import { reverseString} from './StringRev.js'
// // // // console.log(reverseString("mangesh"));

// // // // // prototype

obj1 = {   // by default ha object la extends karto tyachya jya properties ahet tya bhetatat
  name: "MAngesh",
  fptr: function () {
    console.log("obj1 fun1");
  }
}

obj2 = {
  roll: 10,
  __proto__: obj1 // obj1 extends sarkh jal sagalya properties milnar
}

// console.log(obj2.fptr()); // automatic properties alya
// apan jar 3 object kele ani mg 3 rya object amdhi jar property nasel to 2 madhe baghnar ani mg first
// madhe

// // // // // obj2.prototype=obj1  // as pn chalat

// // existing madhe add karaych asel tar
// // Array madhe mi sum navachi method add keli
Array.prototype.sum = function () {
  arr = this
  sum = 0
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index]
  }
  return sum
}

arr = [1, 2, 3]
console.log(arr.sum());

arr = arr.map(ele => ele + 2)  // filter same he java sarkh
sum = arr.reduce((e1, e2) => e1 + e2)
console.log(sum);

// call apply bind

user1 = {
  name: "mangesh",
  roll: 21,
  address: "Darwali"
}

user2 = {
  name: "shubham",
  roll: 22,
  address: "Pune"
}

// generic functiion ahe je user1 dila ki tyachi details dakhvin ani user2 dila ki tyachi
function printDetrails() {
  console.log(this);
}

// call

// reusabilty pratek object madhe mala nay method lihayla lagli
printDetrails.call(user1)  // user1 chi details send karna
printDetrails.call(user2) // user2 chi details show karnar

// call la mu argumnent detoy

printDetrails2 = function (sal, desig) {
  console.log(this.name + " " + sal + ' ' + desig);
}

// apply
printDetrails2.call(user1, 10000, "SE") // call
printDetrails2.apply(user1, [2000, "SE"]) // fakt instead of seprate arguments we can pass the arraylist here

// // bind
// // it is similar to call but the difrresnce is instread of directaly calling
// // we stored it in the veriable and the call it

let bind1 = printDetrails.bind(user1)
bind1()

// closures

function f1(no1) {  // no1 ani no2 lexical scope madhe work kartat khalchya anonymous function madhe
  let no2 = 20
  return function (no3) {
    return no1 + no2 + no3
  }
}

let fptr = f1(10) // ith jewha call kela tevha tyane no1,no2 chi value ghetali
// //                 // pn function sampl tari no1 and no2 chya values jevha apan fptr la call kelya tevh
// //                 // reserve rahilya tyala clousure mhantat ani lexical scope
// //                 // jo bakichya languages madhe nahiye karan jevha function sampat techa ji stackframe te
// //                 // delete hote
console.log(fptr(30));  // 60 aal

// // // static

class A {
  static a1 = 10
  static f1() {
    console.log("static");
  }
}

A.f1()
console.log(A.a1);
a = new A()
//a.f1() // not allowed in js
// console.log(a.a1); // not allowed undefine yet

// // spread and rest

// // rest combine karto
// // spread separate karto
function add(...arr) {
  return arr.reduce((e1, e2) => {
    return e1 + e2
  })
}

function add2(no1, no2, no3) {
  return no1 + no2 + no3
}

arr = [1, 2, 3, 4, 5]

console.log(add2(...arr));
// spread kel ani arr madhalya jewadhy function la lagtil tewadhych value ghetaly

// object madhe pn use hoto
student1 = {
  name: "Mangesh",
  roll: 20
}

let { ...rest } = student1; // rest use jala combine karayla

console.log(rest.name);

student2 = {
  ...student1, // spread use jala separet karayla ani properties change karnyasatho
  age: 23
}

console.log(student2.age);

// async await callback promise
let user_data = [
  {
    name: "Mangesh",
    age: 20,
  },
  {
    name: "shubvham",
    age: 30,
  },
];

function getData() {
  console.log(user_data);
}

function setData(user) {
  setTimeout(() => {
    user_data.push(user)
  }, 2000);
}

setData({ name: "om", age: 20 })

getData()
output[{ name: 'Mangesh', age: 20 }, { name: 'shubvham', age: 30 }]

//user set nahi jala karan js asynchronusly work karat

//callback

function setData(user, function_name) {
  setTimeout(() => {
    user_data.push(user)
    function_name()
  }, 2000);

  // }
  setData({ name: "om", age: 20 }, getData)

  // promise
  function setData(user) {
    let prom = new Promise((resolve, reject) => {
      setTimeout(() => {
        user_data.push(user);
        let err = false;
        if (err) {
          reject();
        }
        resolve();
      }, 2000);

    });
    return prom
  }
  // promise ch execution
  setData({ name: "om", age: 20 })
    .then(getData)
    .catch((err) => {
      console.log("err");
    });

  // async await
  async function setData1(user) {
    await setData(user);  // until that function gets executed
    getData()

  }

  setData1({ name: "om", age: 20 });

}

// Lambada Expression
let arr = []
for (let index = 0; index < 100; index++) {
  arr.push(index)
}
console.log(arr);

// Filter 
let even = arr.filter(no => (no & 1) != 1);
console.log(even);

// Map Returns The New Array Doesent Update The Existence One
let neArr = arr.map(item => item + 1);
arr = neArr;
console.log(arr);

// Reduce
let sum = arr.slice(0, 10).reduce((no1, no2) => no1 + no2)
console.log(sum);

// Some Expect The Predicate 
let flag = arr.some(no => no > 100);
console.log(flag);

// Every
flag = arr.every(no => no <= 100);
console.log(flag);

// findIndex
let index = arr.findIndex(no => (no & 1) != 1)
console.log(index);

// find
let first = arr.find(no => (no & 1) != 1)
console.log(first);

// False Values In Js
false, '', undefined, null, 0
// Remaining All Are True

// == true === false
null == undefined ? console.log(true) : console.log(false);

