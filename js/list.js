/**
 * Created by mqd on 2019/5/29.
 * Author by: Jiang WenJie
 */
$(function () {
    var $tabLi = $(".tabTitle li");
    var $someList = $(".someList>li");

    console.log($tabLi.find("a"));

    $tabLi.on("tap",function () {
        console.log(1);
        $(".tabTitle").css({
            position:"fixed",
            top:0,
            left:0
        });
        $(".Z-hide").show();
        var i = $(this).index();

        $tabLi.find("a").removeClass("active");
        $(this).find("a").addClass("active");

        $someList.hide();
       // 因为区域下面使用了flex布局，不能直接用display：none隐藏，所以需要判断
        if(i === 0){
            $someList.eq(i).css("display", "flex");
        } else {
            $someList.eq(i).show();
        }
        return false;
    });

    //点击空白区域的时候模板层消失，弹出层消失
    //防止点击$someList的时候 也会把模板层消失，弹出层消失
    $someList.on("tap", function() {
        return false;
    });
    $("body").on("tap", function() {
        $(".tabTitle").css({
            "position":""
        });
        $(".Z-hide").hide();
        $tabLi.find("a").removeClass("active");
        $someList.hide();
    });

    // 获取加载更多
    var $loading = $(".loading");
    // 热门房源详情ajax请求
    $.ajax({
        url: "./json/list.json",
        // 在成功之前，让 加载更多 显示出来
        beforeSend:function(){
            $loading.show();
        },
        success: function (data) {
            //dot.js 模板引擎
            var template = doT.template($("#homesList").text());
            $(".homesList").html(template(data));
            $loading.hide();
        },
        error:function (error) {
            throw error;
        }
    });

    $(".homesList").on("tap","li",function () {
        window.location.href = "./details.html";
    })
});