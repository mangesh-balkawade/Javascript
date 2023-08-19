// // // // // // // // let userData = [
// // // // // // // //   {
// // // // // // // //     name: "Mangesh",
// // // // // // // //     age: 20,
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     name: "shubham",
// // // // // // // //     age: 24,
// // // // // // // //   },
// // // // // // // // ];

// // // // // // // // // function getData() {
// // // // // // // // //   console.log(userData);
// // // // // // // // // }

// // // // // // // // // // function setData(user) {
// // // // // // // // // //   setTimeout(() => {
// // // // // // // // // //     userData.push(user);
// // // // // // // // // //   }, 2000);
// // // // // // // // // // }

// // // // // // // // // // setData({ name: "om", age: 25 });
// // // // // // // // // // getData();

// // // // // // // // // function setData2(user) {
// // // // // // // // //   let promise = new Promise((resolve, reject) => {
// // // // // // // // //     setTimeout(() => {
// // // // // // // // //       userData.push(user);
// // // // // // // // //       let flag = true;
// // // // // // // // //       if (flag) {
// // // // // // // // //         resolve();
// // // // // // // // //       } else {
// // // // // // // // //         reject();
// // // // // // // // //       }
// // // // // // // // //     }, 2000);
// // // // // // // // //   });
// // // // // // // // //   return promise;
// // // // // // // // // }

// // // // // // // // // let prom = setData2({ name: "om", age: 23 });
// // // // // // // // // prom.then(getData).catch((err) => {
// // // // // // // // //   console.log("unable to add");
// // // // // // // // // });

// // // // // // // // // async function setData(user) {
// // // // // // // // //   setTimeout( () => {

// // // // // // // // //   }, 10000);
// // // // // // // // //   await userData.push(user);
// // // // // // // // // }
// // // // // // // // // setData({name:"manan"})
// // // // // // // // // console.log(userData);

// // // // // // // // str = "12";
// // // // // // // // no = parseInt(str);
// // // // // // // // console.log(no);
// // // // // // // // const fun = () => {};

// // // // // // // // obj1 = {
// // // // // // // //   name: "mangesh",
// // // // // // // //   fun: function (no1, no2) {
// // // // // // // //     return no1 + no2;
// // // // // // // //   },
// // // // // // // // };

// // // // // // // // console.log(obj1.fun(1, 2));

// // // // // // // str="Mangesh"
// // // // // // // console.log(str.slice(-2,-1));
// // // // // // // arr=[1,2,3,4]
// // // // // // // console.log(arr.slice(-1));
// // // // // // let map=new Map()
// // // // // // map.set(1,2)
// // // // // // console.log(map);

// // // // // let regex = /[A-Z][A-Za-z]+/g;
// // // // // console.log(regex.test("Ma1"));

// // // // // console.log("Man123".replace(/[^a-zA-Z]/g, ""));

// // // // // class AgeExc extends Error {
// // // // //   constructor(msg) {
// // // // //     super(msg);
// // // // //   }
// // // // // }
// // // // // try {
// // // // //   throw new AgeExc("Age is invalid");
// // // // // } catch (err) {
// // // // // //   console.log(err.message);
// // // // // // }

// // // // // let str="Manggesh";
// // // // // let map=new Map();
// // // // // for(let i=0;i<str.length;i++)
// // // // // {
// // // // //   if(map.has(str.charAt(i)))
// // // // //   {
// // // // //     map.set(str.charAt(i),map.get(str.charAt(i))+1);
// // // // //   }
// // // // //   else
// // // // //   {
// // // // //     map.set(str.charAt(i),1);
// // // // //   }
// // // // // }

// // // // // console.log(map);

// // // // function add(no1, no2) {
// // // //   return no1 + no2;
// // // // }

// // // // console.log(add(1, 2, 3));

// // // // var fptr = function (no1, no2) {
// // // //   return no1 + no2;
// // // // };

// // // // console.log(fptr(1, 2));

// // // // var fptr1=(no1,no2)=>no1+no2
// // // // console.log(fptr1(1,2));

// // // // let customerObj={
// // // //   name:"Mangesh",
// // // //   age:20,
// // // //   dislay:()=>{
// // // //     console.log(this.name+" "+this.age+" ");

// // // //   }
// // // // }

// // // // customerObj.dislay()

// // // str = "Mangesh";
// // // str1 = str.split("");
// // // for (let i = 0, j = str1.length - 1; i < j; i++, j--) {
// // //   let temp = str1[i];
// // //   str1[i] = str1[j];
// // //   str1[j] = temp;
// // // }

// // // console.log(str1.join(""));

// // // class AgeInvalidExe extends Error {
// // //   constructor(msg) {
// // //     super(msg);
// // //   }
// // // }

// // // try {
// // //   throw new AgeInvalidExe("Hi Mangesh");
// // // } catch (err) {
// // //   console.log(err.message);
// // // }

// // // let str='Mangesh'
// // // let regex=/[A-Z][a-zA-Z]+/g
// // // console.log(regex.test(str));

// // // console.log(a);

// // // //var a=10
// // // console.log(a);

// // // function disp()
// // // {
// // //   console.log("hi");
// // //    var a=20;
// // //   console.log(a);
// // // }

// // function outer(no1,no2){
// //   return function(no3){
// //     return no1+no2+no3;
// //   }
// // }

// // let functionRef=outer(100,200);
// // console.log(functionRef(300));

// let user_data = [
//   {
//     name: "Mangesh",
//     age: 20,
//   },
//   {
//     name: "shubham",
//     age: 30,
//   },
// ];

// function dislay() {
//   console.log(user_data);
// }

// let promise = new Promise((resolve, reject) => {
//   let flag = true;

//   setTimeout(() => {
//     user_data.push({ name: "ram", age: 35 });
//     if (true) {
//       resolve();
//     }
//     reject();
//   }, 2000);
// });

// promise.then(dislay).catch((err) => {
//   console.log(err.message);
// });


let user={
  name:"mangesh",
  age:20,
  password:"Mangesh@123"
}
// spread cha actual use 
let user2={...user};

delete user2.password;

user2.salary=2000

console.log(user2);