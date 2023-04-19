function revstr(str){
    if(str.length==0){
        return ""
    }
   return  revstr(str.substring(1))+str[0]
  
}

console.log(revstr("Mangesh"));

class A 
{
    constructor(){
        this.name=''
        this.roll=0
    }

    
}

// prototype

obj1={   // by default ha object la extends karto tyachya jya properties ahet tya bhetatat
    name:"MAngesh",
    fptr:function (){
        console.log("obj1 fun1");
    }
}

obj2={
    roll:10,
    __proto__:obj1 // obj1 extends sarkh jal sagalya properties milnar
}

console.log(obj2.fptr()); // automatic properties alya 
// apan jar 3 object kele ani mg 3 rya object amdhi jar property nasel to 2 madhe baghnar ani mg first
// madhe

// obj2.prototype=obj1  // as pn chalat

// existing madhe add karaych asel tar
// Array madhe mi sum navachi method add keli
Array.prototype.sum=function(){  
arr=this
sum=0
for (let index = 0; index < arr.length; index++) {
    sum+=arr[index]
}
return sum
}

arr=[1,2,3]
console.log(arr.sum());

//arr=arr.map(ele=>ele+2)
sum=arr.reduce((e1,e2)=>e1+e2)
console.log(sum);