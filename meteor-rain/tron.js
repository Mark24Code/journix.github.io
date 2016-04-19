// $(function() {
//     var max_width = parseInt($(window).width());
//     var max_height = parseInt($(window).height());
//     function aa() {
//         for(var i=0;i<2;i++) {
//             var rx = parseInt(Math.random()*max_width);
//             var ry = parseInt(Math.random()*max_height);
//             $('.meteor').prepend('<div></div>').css({'left':rx,'top':0});
//             $('.meteor').children('div').eq(0).animate({'left':0,'top':ry},200);
//         }
//     }
//     aa();
//     setInterval(function() {
//         aa();
//     },2000);
//     setInterval(function(){
//         for(var jj=0;jj<$('.meteor>div').size()/2;jj++){
//             $('.meteor>div').eq($('.meteor>div').size()-jj).remove();
//         }
//     },200)
// });



$(function(){
    var max_width = parseInt($(window).width());
    var max_height = parseInt($(window).height());

    function TronLight(){
        for(var i=0;i<24;i++){
            var random_x = parseInt(Math.random()*max_width);
            var random_y = parseInt(Math.random()*max_height);
            console.log('x:'+random_x+",y:"+random_y);
            var atom = $('<div class="atom"></div>').css({'left':random_x,'top':random_y}).animate({'top':parseInt(random_y+(max_height/2))}, 4000);
            $('.tron_area').prepend(atom);
            // $('.tron_area').children('div').eq(parseInt(Math.random()*$('.tron_area').size())).animate({'top':parseInt(random_y+(max_height/3))}, 1000);
        }
    }

    TronLight();

    setInterval(function(){
        TronLight();
    },1000);

    setInterval(function(){
        for(var count = 0;count<$('.tron_area>div.atom').size()/2;count++){
            $('.tron_area>div.atom').eq(0).remove();
        }
    },(1000+4000)/24-5);

})