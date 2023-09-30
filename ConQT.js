// function findCommonUserIds(data, selectedRow) {
//   let commonUserIds = data.filter((obj1) => {
//     return selectedRow.some((obj2) => obj2.callId === obj1.callId);
//   });
//   return commonUserIds.length;
// }

// function generateRandomNumber(digits) {
//   const min = 10 ** (digits - 1);
//   const max = 10 ** digits - 1;
//   return Math.floor(min + Math.random() * (max - min + 1));
// }

function getFilterObj(req, obj) {
  let filterObj = {};
  // Accessing All Properties Of Filter Object
  filterObj = { ...obj };
  filterObj.accountStatus = 1;
  // If User Is Not SuperAdmin Then Filter Data By Organization
  if (req.loginInfo.role != "SuperAdmin") {
    filterObj.orgId = req.loginInfo.orgId;
    filterObj.orgName = req.loginInfo.orgName;
  }
  return filterObj;
}

let req = {};
let loginInfo = {
  role: "SuperAdmin",
  orgId: 1,
  orgName: "Tech Curve",
};
req.loginInfo = { ...loginInfo };
let filterObj = { id: 1, name: "Mangesh" };
filterObj = getFilterObj(req, filterObj);
console.log(filterObj);

const protectedMiddleware = (module) => {
  return (req, res, next) => {
    try {
      const moduleAccess = req.loginInfo.moduleAccess;

      // Checking If User Has The Authority To Access The Module
      if (module.includes(moduleAccess)) {
        next();
      } else {
        res.status(403).json({
          error: "You Are Not Allowed To Access This Resource",
        });
      }
    } catch (error) {
      console.error("Error in protectedMiddleware:", error);
      res.status(500).json({
        error: "An error occurred while processing your request.",
      });
    }
  };
};

let str1 =
  "Target,Leads,Contacts,Accounts,Opportunity,Products,Dashboard,Campaigns,Organizations,Administrator,Activity";
let str2 = "Target,Contacts";
console.log(str1.includes(str2));
