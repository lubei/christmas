/**
 * Created by lubei on 2017/1/4.
 */
function changePage(element,effect,callback){
    element.addClass(effect).one('animationend webkitAnimationEnd',function(){
        callback && callback();
    })
}

/**
 *中间调用
 */
var Christmas=function(){
    console.log('c');
    var $pageA=$('.page-a');
    var $pageB=$('.page-b');
    var $pageC=$('.page-c');

    //页面切换
    $('#choose').on('change',function(e){
        var pageName= e.target.value;
        switch (pageName){
            case 'page-b':
                changePage($pageA,'effect-out',function(){
                    new pageB();
                })
                break;
            case 'page-c':
                changePage($pageC,'effect-in',function(){
                    new pageC();
                })
                break;
        }
    });
};

$(function(){
    Christmas();
})