let str1 = "4 6 90 2 1 78";
let str2="2 1 67 47"

let arr = str2.split(" ");
console.log(arr);
let even = [];
let odd = [];

for (let i = 0; i < arr.length; i++) {
  if (parseInt(arr[i]) % 2 == 0) {
    even.push(i);
  } else {
    odd.push(i);
  }
}

even.length == 1 ? console.log(even[0] + 1) : console.log(odd[0] + 1);
