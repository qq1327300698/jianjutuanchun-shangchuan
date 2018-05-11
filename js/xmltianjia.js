if (window.XMLHttpRequest)
 {// code for IE7+, Firefox, Chrome, Opera, Safari
 xmlhttp=new XMLHttpRequest();
 }
 else
 {// code for IE6, IE5
 xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
 }
 xmlhttp.open("GET","./xml/jiemu.xml",false);
 xmlhttp.send();
 xmlDoc=xmlhttp.responseXML;

$("#renwubt").click(function(event) {

    renwujd=xmlDoc.createElement("yyp");
    zuiwaiceng=xmlDoc.getElementsByTagName("note")[0];
    zuiwaiceng.appendChild(renwujd);
    xmlDoc.save("./xml/jiemu.xml");
});
