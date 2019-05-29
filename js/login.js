/**
 * Created by mqd on 2019/5/29.
 * Author by: Jiang WenJie
 */
window.onload = function () {
    var username = document.getElementById("user");
    var pwd = document.getElementById("pwd");
    var res_pwd = document.getElementById("res_pwd");
    var errText = document.getElementsByClassName("errText");

    username.onblur = function () {
        //用户名的判断
        //判断“用户名请输入4~10位的数字字母组合”的正则表达式
        var userReg = /^1(32|33|34|35|86|58|36)\d{8}$/g;
        if (!(userReg.test(username.value))){
            errText[0].innerText = "手机号格式不正确";
            return false;
        }else {
            username.style.border = "1px solid #61b16a";
            errText[0].innerText = "";
        }
    };

    //密码的判断
    //判断“密码必须由数字、字母字符组成的不少于6位字符”正则表达式
    var pwdReg = /^[a-z0-9]+$/g;

    pwd.onblur = function () {
        if (!(pwd.value.length>6)){
            errText[1].innerText = "密码不能少于6位";
            return false;
        }else if (!(pwdReg.test(pwd.value))){
            errText[1].innerText = "密码必须由数字、字母字符组成的不少于6位字符";
            return false;
        }else {
            pwd.style.border = "1px solid #61b16a";
            errText[1].innerText = "";
        }
    };
    return false;
};

$(function () {
    $("#reg").on("tap",function () {
        $.ajax({
            url:"https://www.apiopen.top/login",
            data:{
                key: "00d91e8e0cca2b76f515926a36db68f5",
                phone:$("#user").val(),
                passwd:$("#pwd").val()
            },
            success:function (data) {
                if (data.code === 200) {
                    window.location.href = "./index.html";
                } else if (data.code === 202) {
                    alert(data.msg);
                }
            },
            error:function (err) {
                throw err;
            }
        })
    })
});