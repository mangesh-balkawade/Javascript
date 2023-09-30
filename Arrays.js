// // arr=[5,4,3,2,1]
// // for(i=0;i<arr.length;i++)
// // {
// //     for( j=0;j<arr.length-1-i;j++)
// //     {
// //        if(arr[i]>arr[j])
// //        {
// //         temp=arr[i]
// //         arr[i]=arr[j]
// //         arr[j]=temp
// //        }
// //     }
// // }

// // str="Mangesh   Jaysing   Balkawade"
// // arr=str.replaceAll("[ ]{2,}",'').split(" ")
// // console.log(arr);

// // str="Mangesh"
// // str="Mangesh"
// // temp=''
// // for(j=str.length-1;j>=0;j--)
// // {
// //    temp+=str.charAt(j)
// // }
// // console.log(temp);

// let str = "1010110001";

// let arr = str.split("");
// let c0 = 0;
// let c1 = 0;
// let count = 0;
// for (let i = 0, j = 0; i < arr.length; i++) {
//   if (arr[i] == "0") {
//     c0 += 1;
//   } else {
//     c1 += 1;
//   }
//   if (j < arr.length - 1) {
//     if (arr[j] == arr[j + 1]) {
//       count++;
//     }
//     j += 2;
//   }
// }

// if (c0 == c1) console.log(count);
// else console.log("Count Is Not Equal");


console.log(1+1);
console.log(1+"1"+1);
console.log("1"+1+"1");