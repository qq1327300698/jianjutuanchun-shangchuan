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
 xmlhttp.open("GET","./xml/splj.xml",false);
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
arr=xmlDoc.getElementsByTagName("gdg")[0].getAttribute("data").split("/");
var zxs=0;
function zuixin(jname){
    var myDate=new Date();
    var zdts=myDate.getDate()-7;
    var i=0,tian=0;
    for(i;i<xmlDoc.getElementsByTagName(jname).length;i++){
        arr=xmlDoc.getElementsByTagName(jname)[i].getAttribute("data").split("/");
        // alert(Number(arr[1]));
        // alert(zdts);
        if(Number(arr[1])>zdts)
            // alert(message);
            tian++;
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
        yyp:zuixin("gdg"),
        zyl:zuixin("gdg"),
        mht:zuixin("gdg"),
        zhl:zuixin("gdg"),
        xw:zuixin("gdg"),
        jm:zuixin("gdg"),
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