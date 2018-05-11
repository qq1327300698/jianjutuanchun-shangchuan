if (window.XMLHttpRequest)
 {// code for IE7+, Firefox, Chrome, Opera, Safari
 xmlhttp=new XMLHttpRequest();
 }
 else
 {// code for IE6, IE5
 xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
 }
 xmlhttp.open("GET","../../../xml/jiemu.xml",false);
 xmlhttp.send();
 xmlDoc=xmlhttp.responseXML;

function getJiemuBq(){
    return $(".play_title a").attr("id");
};

function shengchengNR(lj,bt,js,img,d){
    $(".play_xuanji ul").append(function(j,index){
        return '<li id="'+d+'"><a href="http:../'+lj+'"><img src="'+img+'" width="100" height="60"><h1>'+bt+'</h1><h5>'+js+'</h5></a></li>';

    });
}

function shipingDZ(dz){
    alert(dz);
    return dz;
}

$(document).ready(function(){
    s=getJiemuBq();
        for(var i=0;i<=xmlDoc.getElementsByTagName(s)[0].childNodes.length;i++){
        if(i<xmlDoc.getElementsByTagName(s)[0].childNodes.length&&xmlDoc.getElementsByTagName(s)[0].childNodes[i].nodeName=="jishu"){
            var lj,d,js,img,bt;
                lj=Math.floor(i/2)+1;
                img=xmlDoc.getElementsByTagName(s)[0].childNodes[i].childNodes[7].childNodes[0].nodeValue;
                d=xmlDoc.getElementsByTagName(s)[0].childNodes[i].childNodes[3].childNodes[0].nodeValue;
                js=xmlDoc.getElementsByTagName(s)[0].childNodes[i].childNodes[5].childNodes[0].nodeValue;
                bt=xmlDoc.getElementsByTagName(s)[0].childNodes[i].childNodes[9].childNodes[0].nodeValue;
            shengchengNR(lj,bt,js,img,d);
        }
    }

    var shipingDZ=$(".play-box i").eq(0).text();
    var ids=$(".play-box i").eq(1).text();
    $(".play-box iframe").attr("src",shipingDZ);
    $("#"+ids).addClass('biankuang');
    $(".scrollbar").scrollTop($(".scrollbar").scrollTop() + $('.biankuang').offset().top - $(".scrollbar").offset().top);
    // $("#nurse").animate({ scrollTop: $("#nurse").scrollTop() + $('#tr-three').offset().top - $("#nurse").offset().top }, 1000); --有动画效果
});

// toulj+"http://www.iqiyi.com/v_19rr9hwzls.html",