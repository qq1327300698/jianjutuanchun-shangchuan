/*
* @Author: Marte
* @Date:   2018-05-31 15:40:51
* @Last Modified by:   Marte
* @Last Modified time: 2018-06-02 09:10:50
*/

'use strict';
new Vue({
    el:"#sectionApp",
    data:{
        nr:showsp(),
    },
    methods:{
    },
    computed:{


    }
})


ljgx($(".biaoti-lanmu .play_title span").eq(0).attr("title"));

// alert($(".bilibili-player-video-recommend-container",document.frames("frame").document).html());
//
alert($("#player_iframe").contents().find("body>div").html());//

$(".play_xuanji ul li a").click(function() {
    $(".play_xuanji ul li").removeClass('biankuang');
    $(this).parent("li").addClass('biankuang');
    ljgx($(this).attr("id"));
});

function ljgx($bqid){
// alert($bqid);
$("#"+$bqid).parent("li").addClass('biankuang');
$.get("../../../houtai/duqu_lianjie.php?q="+$bqid,function(data,stauts){
    // alert(data);
    var n;
    if(data.match(/iqiyi/g)){
        $(".xianlu-box ul li:eq(0)").hide();
        $(".play-box iframe").attr("src","http://jx.yylep.com/?url="+data);
        $(".xianlu-box ul li:eq(1)").addClass("ljys");
        $(".xianlu-box ul li").eq(1).click(function(event) {
        $(".play-box iframe").attr("src","http://jx.yylep.com/?url="+data);
        });
        $(".xianlu-box ul li").eq(2).click(function(event) {
            $(".play-box iframe").attr("src","http://www.dgua.xyz/webcloud/?url="+data);
        });
        $(".xianlu-box ul li").eq(3).click(function(event) {
            $(".play-box iframe").attr("src","http://api.97kn.com/?url="+data);
        });
        $(".xianlu-box ul li").eq(4).click(function(event) {
            $(".play-box iframe").attr("src","http://www.wudima.com/dapi/d.php?v="+data);
        });
            $(".xianlu-box ul li").click(function() {
                $(".xianlu-box ul li").removeClass("ljys");
                $(this).addClass('ljys');
            });


    }
    if(data.match(/bilibili/g)){
    // alert(n);
        $(".xianlu-box ul li:gt(0)").hide();
        $(".xianlu-box ul li:eq(0)").addClass('ljys');
        $(".play-box iframe").attr("src",data);
    }

});
}


function showsp(){
    var str=getwyBq();
    // alert(str);
    if (window.XMLHttpRequest)
                 {// code for IE7+, Firefox, Chrome, Opera, Safari
                 xmlhttp=new XMLHttpRequest();
                 }
                 else
                 {// code for IE6, IE5
                 xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                 }

                 xmlhttp.open("GET","../../../houtai/jmSp_dq_sp.php?q="+str,false);
                 xmlhttp.send();
                 // alert(xmlhttp.responseText);
                 var xmlPHP=xmlhttp.responseText.split(",");
                 xmlPHP.pop();
                 return xmlPHP;
};
function getwyBq(){
    // alert($(".biaoti-lanmu .play_title a").attr("id"));
    return $(".biaoti-lanmu .play_title a").attr("id");
    // return js;
};




