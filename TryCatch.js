

function deleteUser(id)
{
    try{    if(id==10)
    {
        throw new Error("There IS Not User Associated With Id");
    }
    return true;
    }
    catch(err)
    {
        throw new Error("Unable To Delete User");
    }
}

try
{
    let flag=deleteUser(10);
    console.log(flag);
}
catch(err)
{
    console.log("Internl Server Error",err)
}

