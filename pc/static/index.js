console.log('执行ajax')

window.onload = function () {
    $.ajax({
        type: "GET",
        dataType: "JSON",
        url: 'http://192.168.101.107:8888/pcIndex/indexBananers', //目标地址
        success: function (res) {

            console.log('成功',res);
        },
        error: function (error) {
            console.log("失败",error)
        }
    })
}
var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
});





































