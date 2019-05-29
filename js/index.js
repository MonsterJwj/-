/**
 * Created by mqd on 2019/5/28.
 * Author by: Jiang WenJie
 */
$(function () {
    // 获取加载更多
    var $loading = $(".loading");
    // 热门房源详情ajax请求
    $.ajax({
        url: "./json/home.json",
        // 在成功之前，让 加载更多 显示出来
        beforeSend:function(){
            $loading.show();
        },
        success: function (data) {
            //dot.js 模板引擎
            var template = doT.template($("#homeList").text());
            $("#home_list").html(template(data));
            $loading.hide();
        },
        error:function (error) {
            throw error;
        }
    });

    // 热门关注、友情链接切换
    $(".hot_tit>span").on("tap",function () {
        var i = $(this).index();//下标第一种写法
        //var i = $(".hot_tit").index(this);//下标第二种写法
        $(this).addClass("hot_light").siblings().removeClass("hot_light");
        $(".hot_cont ul").eq(i).show().siblings().hide();
    });

    // 热门房源详情ajax请求
    $.ajax({
        url: "./json/home.json",
        // 在成功之前，让 加载更多 显示出来
        beforeSend:function(){
            $loading.show();
        },
        success: function (data) {
            //dot.js 模板引擎
            var template = doT.template($("#hotList").text());
            $(".hot_cont").html(template(data));
            $loading.hide();
        },
        error:function (error) {
            throw error;
        }
    });

    // 置底导航 关闭
    $(".botNav>i").on("tap",function () {
        $(".bottomNav").hide();
    });

    //跳转详情页
    $("#home_list").on("tap","li",function () {
        window.location.href = "./details.html";
    })
});
