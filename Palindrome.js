function chkPalindrome(no)
{
var temp=no
var rev=0;
while(no>0)
{
    rev=rev*10+no%10
    no=parseInt(no/10)
    
}
if(rev==temp)
return true
return false
}

console.log(chkPalindrome(121));