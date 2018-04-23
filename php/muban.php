<?php
    $con=array(array('wenti1','wennr1'),array('wenti2','wennr2'),array('wenti3','wennr3'),array('wenti4','wennr4'),array('wenti5','wennr5'));
    foreach($con as $id=>$val){
        $title=$val[0];
        $content=$val[1];
        $path="article-".($id+1).".html";
        $fp=fopen("../shiping.html","r");
        $str=fread($fp,filesize("../shiping.html"));
        $str=str_replace("{title}",$title,$str);
        fclose($fp);

        $handle=fopen($path,"w");
        fwrite($handle, $str);fclose($handle);
        echo"shengcheng".$path."<br/>";
    }
?>