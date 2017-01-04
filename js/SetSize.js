var docEl = document.documentElement,
     resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
     recalc = function () {
         var container=document.querySelector('.container');
         var proportion=900/1440;
         container.style.height=container.clientWidth*proportion+'px';
  };

window.addEventListener(resizeEvt, recalc, false);
document.addEventListener('DOMContentLoaded', recalc, false);
