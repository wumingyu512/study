function myname(){
    var name=document.forms["form"]["name"].value;
    if (name==null || name=="")
    {alert("用户名为空");return false;}
    else if (typeof name !== string)
    {alert("用户名不可用");return false;}
}