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
 xmlhttp.open("GET","../../../xml/splj.xml",false);
 xmlhttp.send();
 xmlDoc=xmlhttp.responseXML;

function get_nextSibling(n)
{
y=n.nextSibling;
while (y.nodeType!=1)
  {
  y=y.nextSibling;
  }
return y;
}
// function geshu(n){
//     get_nextSibling(xmlDoc.getElementsByTagName(""))
// }
// arr=xmlDoc.getElementsByTagName("gdg")[0].getAttribute("data").split("/");
// var zxs=0;
var zxs=0,z;
function zuixin(jname){
    var myDate=new Date();
    var zdts=myDate.getDate()-7;
    var i=0,tian=0;
    var s;
    s=xmlDoc.getElementsByTagName(jname)[0].childNodes[1].nodeName;
    // alert(s);
    for(i;i<xmlDoc.getElementsByTagName(s)[0].childNodes.length;i++){
        if(xmlDoc.getElementsByTagName(s)[0].childNodes[i].nodeType==1){
            arr=xmlDoc.getElementsByTagName(s)[0].childNodes[i].getAttribute("data").split("/");
        // alert(xmlDoc.getElementsByTagName(s)[0].childNodes[1].nodeType);
        // alert(Number(arr[2]));
        // alert(zdts);
        if(Number(arr[2])>zdts)
            // alert(message);
            tian++;
        }

    }
    zxs+=tian;
    // alert(zxs);
    return tian;
}
new Vue({
    el:"#headerApp",
    data:{
        dheight: {height:"48px"},
        gdg:zuixin("gdg"),
        yyp:zuixin("yyp"),
        zyl:1,
        mht:1,
        zhl:1,
        xw:1,
        jm:1,
        zx:zxs,
    },
    methods:{
        say:function(message){
             // alert(this.dheight);
            if(this.dheight.height=="48px")
                this.dheight.height='96px';
            else
                this.dheight.height='48px';
        }
    },
    watch:{
        zx:function(){
            this.zx=5;
        }
    }
})