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
    var $pageA=$('.page-a');
    var $pageB=$('.page-b');
    var $pageC=$('.page-c');

    //构建第一个场景页面对象
    //new pageA($pageA);

    //构建第二个场景页面对象
    new pageB($pageB);


    /*var observer = new Observer();
    new pageA(function(){
        observer.publish('completePageA');
    });
    observer.subscribe('completePageA',function(){
        changePage($pageA,'effect-out',function(){
            observer.publish('pageB');
        })
    });
    observer.subscribe('pageB',function(){
        new pageB(function(){
            observer.publish('completePageB');
        })
    });
    observer.subscribe('completePageB',function(){
        changePage($pageC,'effect-in',function(){
            observer.publish('pageC');
        })
    });*/

    //页面切换
    /*$('#choose').on('change',function(e){
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
    });*/


};


/**
 * 背景音乐
 * @param {[type]} url  [description]
 * @param {[type]} loop [description]
 */
function HTML5Audio(url, loop) {
    var audio = new Audio(url);
    audio.autoplay = true;
    audio.loop = loop || false; //是否循环
    audio.play();
    return {
        end: function(callback) {
            audio.addEventListener('ended', function() {
                callback()
            }, false);
        }
    }
}


$(function() {
    $("#xueqiao").click(function() {
        Christmas();
    });
    
    $("button:first").click(function() {
        //背景音乐
        var audio1 = HTML5Audio('music/circulation.mp3');
        audio1.end(function() {
            alert("音乐结束")
        });
    });
    $("button:last").click(function() {
        HTML5Audio('music/scene.mp3', true);
        //循环播放那
        // ? url = http://www.imooc.com/upload/media/two.mp3'
    });
    
})

