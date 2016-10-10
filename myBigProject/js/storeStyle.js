/**
 * Created by Administrator on 2016/10/10.
 */
$('#yijiaPhoneList').hover(function () {
    $('#header').css({"height":"170px","backgroundColor":"rgba(255,255,255,.9)","transition":"all .5s"});
    $('#yijiaPhone ').fadeIn();
    $('#yijiaStore').fadeOut();
});

$('#yijiaStoreList').hover(function () {
    $('#header').css({"height":"170px","backgroundColor":"rgba(255,255,255,.9)","transition":"all .5s"});
    $('#yijiaPhone ').fadeOut();
    $('#yijiaStore').fadeIn();
});

$('#service,#blog,#Community,.threeIcon').hover(function () {
    $('#header').css({"height":"85px","backgroundColor":"rgba(255,255,255,0)","transition":"all .5s"});
    $('#yijiaPhone').fadeOut();
    $('#yijiastore').fadeOut();
});

$('#yijiaLogo').hover(function () {
    $('#header').css({"height":"85px","backgroundColor":"rgba(255,255,255,0)","transition":"all .5s"});
    $('#yijiaPhone').fadeOut();
    $('#yijiastore').fadeOut();
});

$("#header").mouseleave(function () {
    $('#header').css({"height":"85px","backgroundColor":"rgba(255,255,255,0)","transition":"all .5s"});
    $('#yijiaPhone').fadeOut();
    $('#yijiastore').fadeOut();
});
