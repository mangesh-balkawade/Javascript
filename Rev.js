// // let user_data = [
// //   {
// //     name: "mangesh",
// //     age: 20,
// //   },
// //   {
// //     name: "shubhma",
// //     age: 30,
// //   },
// // ];

// // function getData() {
// //   console.log(user_data);
// // }

// // function setData(user) {
// //   setTimeout(() => {
// //     user_data.push(user);
// //   }, 2000);
// // }

// // //setData({name:'om',age:20})
// // getData();

// // // callback

// // function setData2(user, callback) {
// //   setTimeout(() => {
// //     user_data.push(user);
// //     callback();
// //   }, 2000);
// // }

// // setData2({ name: "om", age: 20 }, getData);

// // function setData3(user) {
// //   let prom = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       user_data.push(user);
// //       let flag=true
// //       if(flag)
// //       resolve()
// //       else
// //       reject()
// //     }, 2000);
// //   });
// //   return prom
// // }

// // let prom=setData3({name:'om',age:100})
// // prom.then(getData).catch((err)=>console.log("Unable to add"))

// let s1 = { name: "Mangesh", age: 20, roll: 2 };
// let s2 = { ...s1 };
// s2.address = "at dawarli";
// delete s2.roll;
// console.log(s2);
// console.log(s1);
