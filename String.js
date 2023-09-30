//  s="Mangesh";
// console.log(s.substring(0));
// console.log(s.slice(0,3));
// console.log(s.replace("a","m"));

// str=""
// for(i=0;i<5;i++)
// {
//     for(j=0;j<i;j++)
//     {
//         if((j%2)===0)
//         str+="*"
//         else
//         str+="#"
//     }
//     str+="\n"
// }
// console.log(str);


// str1="Mangesh"
// arr=str1.split('')
// for(let i=0,j=arr.length-1;i<j;i++,j--){
//     temp=arr[i]
//     arr[i]=arr[j]
//     arr[j]=temp
// }
// str1=arr.join('')
// console.log(str1);

// str1="MAn 109 man 100"
// arr=str1.split(" ")
// for (i in arr){
//     console.log(Number(i)+1==NaN);
// }
// arr=[1,2,3,4]
// console.log(arr);
// arr.sort((e1,e2)=>{
//     return e2-e1;
// })
// console.log(arr.join(""));
// console.log(parseFloat("12.3"));

// let str="Mangesh Balkawade Darwali";
// let rev="";
// for(let i of str.split(" ")){
//     rev=rev+i.split("").reverse().join("")+" ";
// }
// console.log(rev.trim());

let obj={
    name:"Mangesh",
    age:20
}

let str=JSON.stringify(obj);
console.log(str.split);
let obj2=JSON.parse(str);
console.log(obj2);