function myname(){
    var name=document.forms["form"]["name"].value;
    if (name==null || name=="")
    {alert("用户名为空");return false;}
    else if (typeof name !== string)
    {alert("用户名不可用");return false;}
}
function mypwd(){
    var pwd=document.forms["form"]["pwd"].value;
    var rpwd=document.forms["form"]["rpwd"].value;
    if (pwd != rpwd)
    {
        alert("密码不一致，请重新输入");
        return false;
    }
}
function phone(){}