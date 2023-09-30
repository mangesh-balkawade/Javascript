// // class service
// // {
// //     countFreq(str)
// //     {
// //        var map=new Map();
// //         for(var i=0;i<str.length;i++)
// //         {
// //             if(map.has(str[i]))
// //             {
// //                 map.set(str[i],map.get(str[i])+1);
// //             }
// //             else
// //             {
// //                 map.set(str[i],1);
// //             }
// //         }
// //         return map
// //     }
// // }

// // sobj=new service()
// // var map =sobj.countFreq("Mangesh")
// // var arr =map.keys()

// console.log(parseInt(Math.log10(123)+1));
// console.log(101&1==1);

console.log(parseInt("123Hello"));
console.log(parseInt("Hello123"));

// function handleInvalidResponse(status) {
//   if (status === 401) {
//     // Handle unauthorized access by redirecting to the login page
//     navigate("/login");
//     toast.error("Connection timed out, Please log in to access");
//   } else if (status === 500) {
//     toast.error("Server error: Something went wrong");
//   } else if (status === 422) {
//     console.error("Validation error: Data validation failed");
//     toast.error("Please Fill The Data Accurately");
//   } else {
//     return true;
//   }
// }

function handleInvalidResponse(status) {
  switch (status) {
    case 401:
      // Handle unauthorized access by redirecting to the login page
      navigate("/login");
      toast.error("Connection timed out. Please log in to access.");
      break;
    case 500:
      toast.error("Server error: Something went wrong.");
      break;
    case 422:
      console.error("Validation error: Data validation failed.");
      toast.error("Please fill out the data accurately.");
      break;
    default:
      // Handle other unknown status codes or return true if necessary
      return true;
  }
}

let flag = handleInvalidResponse(200);
if (flag == true) {
  // Ith Kay Karaychay Te Kar
  console.log(true);
}
