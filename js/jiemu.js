if (window.XMLHttpRequest)
 {// code for IE7+, Firefox, Chrome, Opera, Safari
 xmlhttp=new XMLHttpRequest();
 }
 else
 {// code for IE6, IE5
 xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
 }
 // xmlhttp.open("GET","./xml/gdg.xml",false);
 // xmlhttp.send();
 // xmlDoc=xmlhttp.responseXML;
 xmlhttp.open("GET","../../xml/jiemu.xml",false);
 xmlhttp.send();
 xmlDoc=xmlhttp.responseXML;

function getJiemuBq(){
    return $(".logo .zhuantinr .zhuantitu img").attr("id");
    // return js;
};
function caiFenBq(){
     s=getJiemuBq();
     var i=0,arr=1;
    // alert(s);
    for(i;i<xmlDoc.getElementsByTagName(s)[0].childNodes.length;i++){
        if(xmlDoc.getElementsByTagName(s)[0].childNodes[i].nodeName=="biaoqian"){
            arr=1;
            arr=xmlDoc.getElementsByTagName(s)[0].childNodes[i].childNodes[0].nodeValue.split("/");
            // .split("/");

        }

    }
    return arr;
};

function shengchengNR(lj,bt,js,img,weizhi){
    $(".xianjinr ul").append(function(j,index){
        return '<li style="display:none"><a href="./'+weizhi+'"><img src="'+img+'" width="100" height="60"><h1>'+bt+'</h1><h5>'+js+'</h5></a></li>';

    });
}

$(document).ready(function(){
    for(var i=0;i<=xmlDoc.getElementsByTagName(s)[0].childNodes.length;i++){
        if(i<xmlDoc.getElementsByTagName(s)[0].childNodes.length&&xmlDoc.getElementsByTagName(s)[0].childNodes[i].nodeName=="jishu"){
            var lj,d,js,img,bt;
                lj=xmlDoc.getElementsByTagName(s)[0].childNodes[i].childNodes[1].childNodes[0].nodeValue;
                img=xmlDoc.getElementsByTagName(s)[0].childNodes[i].childNodes[7].childNodes[0].nodeValue;
                d=xmlDoc.getElementsByTagName(s)[0].childNodes[i].childNodes[3].childNodes[0].nodeValue;
                js=xmlDoc.getElementsByTagName(s)[0].childNodes[i].childNodes[5].childNodes[0].nodeValue;
                bt=xmlDoc.getElementsByTagName(s)[0].childNodes[i].childNodes[9].childNodes[0].nodeValue;
                weizhi=Math.floor(i/2)+1;
            shengchengNR(lj,bt,js,img,weizhi);
        }
        if(i==xmlDoc.getElementsByTagName(s)[0].childNodes.length){
                // alert(Math.floor(d/10));
                var xhcs=d/10,hou=0;
                for(var k=0;xhcs-k>0;k++){
                // alert(xhcs);
                if(xhcs-k>1){
                    var qian=(k+1)*10-9;
                    hou=(k+1)*10;
                    $(".xuanjilei ul").append(function(){
                    return '<li>第'+qian+'话-第'+hou+'话</li>';
                    });
                }
                else{
                    // alert(k);
                    var zqian=hou+1;
                    var zhou=Math.floor(xhcs*10);
                    $(".xuanjilei ul").append(function(){
                    return '<li>第'+zqian+'话-第'+zhou+'话</li>';
                    });
                }
                // alert(xhcs);
                }
        }
    }
    $(".xuanjilei ul li").first().addClass('jianjileiDJ');
    $(".xianjinr ul li").each(function(i,e){
        $(e).css("display","inline-block");
        if(i==9)
            return false;
    })
    $(".xuanjilei ul").children().click(function(){
        $(".xuanjilei ul li").removeClass('jianjileiDJ');
        $(this).addClass('jianjileiDJ');
        $(".xianjinr ul li").hide();
        var qian=$(this).index()*10;
        var hou=($(this).index()+1)*10;
        $(".xianjinr ul li").slice(qian,hou).css("display","inline-block");
        //function(){$(this).index();}
    })
    $(".nav .nav_num li").eq(2).click(function(event) {
        alert("没做好");
    });

});

new Vue({
    el:"#headerApp",
    data:{
        jiemubq:caiFenBq(),
    },
    methods:{

    }
});
new Vue({
    el:"#sectionApp",
    data:{
        jishu:{
            lj:1,
            shu:1,
        }
    },
    methods:{

    }
});