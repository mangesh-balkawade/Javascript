function reverseString(str)
{
   if(str.length==0)
   return ""
   else
   return str[str.length-1]+reverseString(str.substring(0,str.length-1))
}

console.log(reverseString("Mangesh"));