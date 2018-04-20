
var bq = $(".carousel-biaoqian li a div");
$(function(){
    bq.eq(0).css("background-color","#eee");
    setInterval(function(){
        dong();
    },4000);
})
function dong(){
    if($(".carousel-ul").css("left")!="-928px"){
        deng();
            $(".carousel-ul").animate({left:"-=464px"});
        }
        else{
            deng();
            $(".carousel-ul").animate({left:"0px"});
        }
}
function deng(){
    bq.css("background-color","");
    if($(".carousel-ul").css("left")=="-928px"){
        bq.eq(0).css("background-color","#eee");
    }
    if($(".carousel-ul").css("left")=="0px"){
        bq.eq(1).css("background-color","#eee");
    }
    if($(".carousel-ul").css("left")=="-464px"){
        bq.eq(2).css("background-color","#eee");
    }
}
$(".carousel-biaoqian li a div").mouseover(function() {
    $(".carousel-biaoqian li a div").css("background-color","");
    $(this).css("background-color","#eee");
});
bq.eq(0).mouseover(function(){
    $(".carousel-ul").animate({left:"0px"});
})
bq.eq(1).mouseover(function(){
    $(".carousel-ul").animate({left:"-464px"});
})
bq.eq(2).mouseover(function(){
    $(".carousel-ul").animate({left:"-928px"});
})
