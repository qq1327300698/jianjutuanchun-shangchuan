<?php
    // $xml = simplexml_load_file("../xml/splj.xml");
        // print_r($xml);
        // echo "<br>";

        function renwu($rname,$zpm){
            $xml = simplexml_load_file("../xml/jiemu.xml");
            $zongshu=0;
            foreach($xml as $rm){
                if($rm->getName()==$rname){
                    foreach($rm as $zuopin){
                       if($zuopin->getName()==$zpm)
                        foreach($zuopin as $xlj){
                            $zongshu++;
                            if(!file_exists($cmkdir)){
                                $cmkdir="../".$rname."/".$zpm."/".$zongshu;
                                mkdir($cmkdir,0777,true);
                            }

                            // $path="../yy/article-".".html";
                            $path="../".$rname."/".$zpm."/".$zongshu."/"."index.html";
                            $fp=fopen("../shiping.html","r");
                            $str=fread($fp,filesize("../shiping.html"));
                            $str=str_replace("{title}",$xlj,$str);
                            fclose($fp);
                            // echo $path;

                            $handle=fopen($path,"wb");
                            fwrite($handle,$str);
                            fclose($handle);
                            echo "shenghceng".$path."<br>";
                        }
                    }
                }
                else{

                }
            }
        }

    renwu("yyp","xazc");
    // $con=array(array('wenti1','wennr1'),array('wenti2','wennr2'),array('wenti3','wennr3'),array('wenti4','wennr4'),array('wenti5','wennr5'));
    // foreach($con as $id=>$val){
    //     $title=$val[0];
    //     $content=$val[1];
    //     $path="article-".($id+1).".html";
    //     $fp=fopen("../shiping.html","r");
    //     $str=fread($fp,filesize("../shiping.html"));
    //     $str=str_replace("{title}",$title,$str);
    //     fclose($fp);

    //     $handle=fopen($path,"w");
    //     fwrite($handle, $str);fclose($handle);
    //     echo"shengcheng".$path."<br/>";
    // }
?>