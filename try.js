function check(){
    $(document).ready(function(){("form").submit(function(){
        var name=document.forms["form"]["name"].value;
        if (name==null || name=="")
        {$("#name").css("border-color","red");
            alert("用户名为空");return false;}
        else {alert("ok!");}
    });
});
}
