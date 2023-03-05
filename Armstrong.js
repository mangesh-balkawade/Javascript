function powerx(no,power)
{
    if(power==0)
    return 1
    else
    return no*powerx(no,power-1)
}

function chkArmstrong(no)
{
 str=String(no)
 digcnt=str.length
 sum=0
temp=no
while(no>0)
{
   let digpow=powerx(no%10,digcnt)
    sum+=digpow
    no=parseInt(no/10)
    digpow=1
}
if (sum==temp)
return true
return false
}

console.log(chkArmstrong(153));