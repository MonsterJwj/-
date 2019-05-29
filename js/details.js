/**
 * Created by mqd on 2019/5/29.
 * Author by: Jiang WenJie
 */
$(function () {
    //banner 轮播
    var mySwiper = new Swiper ('.swiper-container', {
        direction: "horizontal", // 水平切换选项
        loop: true, // 循环模式选项
        speed:300,
        autoplay: {
            delay: 2000, //1秒切换一次
        },  //自动播放
        // 分页器
        pagination: {
            el: ".swiper-pagination",
            type: "fraction"
        },
    });

    <!--房源“户型、面积”部分-->
    // 获取加载更多
    var $loading = $(".loading");
    // 房源详情ajax请求
    $.ajax({
        url: "./json/details.json",
        // 在成功之前，让 加载更多 显示出来
        beforeSend:function(){
            $loading.show();
        },
        success: function (data) {
            //dot.js 模板引擎
            var template = doT.template($("#apartmentList").text());
            $(".apartment").html(template(data));
            $loading.hide();
        },
        error:function (error) {
            throw error;
        }
    });

    <!--推荐房源-->
    // 推荐房源ajax请求
    $.ajax({
        url: "./json/details.json",
        // 在成功之前，让 加载更多 显示出来
        success: function (data) {
            //dot.js 模板引擎
            var template = doT.template($("#HousingList").text());
            $("#home_list").html(template(data));
        },
        error:function (error) {
            throw error;
        }
    });

    // 百度地图API功能
    var map = new BMap.Map("allmap");    // 创建Map实例
    map.centerAndZoom(new BMap.Point(113.62, 34.75), 11);  // 初始化地图,设置中心点坐标和地图级别
    //添加地图类型控件
    map.addControl(new BMap.MapTypeControl({
        mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
        ]}));
    map.setCurrentCity("郑州");          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
});

