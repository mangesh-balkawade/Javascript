function revStr(str) {
  let arr = str.split("");

  //arr.reverse();
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    arr[i] = arr[j];
  }
  return arr.join("");
}

function charFreq(str) {
  let map1 = new Map();
  for (let ch of str) {
    map1.has(ch) ? map1.set(ch, map1.get(ch) + 1) : map1.set(ch, 1);
  }
  return map1;
}

function revWords(str) {
  let arr = str
    .trim()
    // /g means matching all occurence and withoyt it only first occ will be match
    .replace(/[ ]{2,}/g, " ")
    .split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split("").reverse().join("");
  }
  return arr.join(" ");
}

function chkPali(str) {
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str.charAt(i) != str.charAt(j)) return false;
  }
  return true;
}

// function chkAnagram(str1, str2) {
//   for (let i = 0; i < str1.length; i++) {
//     if (str2.includes(str1.charAt(i)) == false) {
//       return false;
//     }
//   }
//   return true;
// }

function chkAnagram(str1, str2) {
  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");
  console.log(str1, str2);
  return str1 == str2;
}

function stringRotation(str1, str2) {
  str1 = str1 + str1;
  if (str1.includes(str2)) return true;
  else return false;
}

function chkConsecutiveCount(str1) {
  let op = "";
  let arr = str1.split("");
  for (let i = 0; i < str1.length; ) {
    op += arr[i];
    let j = i + 1;
    // aaabcc
    while (j<arr.length&&arr[i] == arr[j]) {
      j++;
    }
    op += j - i;
    i = j;
  }
  return op;
}



// console.log(revStr("Mangesh"));
// console.log(charFreq("MaaNggesh"));
//console.log(revWords("  I Love   My    India"));
// console.log(chkPali("MaM"));
// console.log(chkAnagram("Man", "na"));
// console.log(chkAnagram("Mangesh", "hsegnaM"));
// console.log(stringRotation("waterbottle", "erbottlewate"));
// console.log(chkConsecutiveCount("aaabccddf"));
