// arr=[5,4,3,2,1]
// for(i=0;i<arr.length;i++)
// {
//     for( j=0;j<arr.length-1-i;j++)
//     {
//        if(arr[i]>arr[j])
//        {
//         temp=arr[i]
//         arr[i]=arr[j]
//         arr[j]=temp
//        }
//     }
// }

// str="Mangesh   Jaysing   Balkawade"
// arr=str.replaceAll("[ ]{2,}",'').split(" ")
// console.log(arr);

// str="Mangesh"
str="Mangesh"
temp=''
for(j=str.length-1;j>=0;j--)
{
   temp+=str.charAt(j)
}
console.log(temp);

