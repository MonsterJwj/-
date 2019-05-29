
(function () {
    var supportsOrientationChange = 'onorientationchange' in window ? 'orientationchange' : 'resize';
    var timeoutId;
    function setRem() {
        var clientWidth = document.documentElement.clientWidth;
        var nowPX = clientWidth / 320 * 100;
        document.documentElement.style.fontSize = nowPX + 'px';
    }
    setRem();
    //窗口大小改变时调用
    window.onresize = setRem;
    // 利用orientationchange来测试手机旋转
    window.addEventListener(supportsOrientationChange, function () {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function () {
            setRem();
        }, 300);
    }, false);
})();
