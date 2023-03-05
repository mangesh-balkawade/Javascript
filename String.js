 s="Mangesh";
console.log(s.substring(0));
console.log(s.slice(0,3));
console.log(s.replace("a","m"));

str=""
for(i=0;i<5;i++)
{
    for(j=0;j<i;j++)
    {
        if((j%2)===0)
        str+="*"
        else
        str+="#"
    }
    str+="\n"
}
console.log(str);

