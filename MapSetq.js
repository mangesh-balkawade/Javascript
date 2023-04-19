"use strict";
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
  for(let i=0;i<str1.length;i++)
  {
    if(m1.has(str1[i]))
    return false
    else
    m1.set(str1[i],1)
  }
  return true
}

let arr = ["apple", "banana", "apple", "orange", "banana", "grape"];
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
