<?php
    // $xml = simplexml_load_file("../xml/splj.xml");
        // print_r($xml);
        // echo "<br>";

        function renwu($rname,$zpm){
            $xml = simplexml_load_file("../xml/jiemu.xml");
            $zongshu=0;
            foreach($xml as $rm){
                if($rm->getName()==$rname){

                    foreach($rm as $id=>$zuopin){
                       if($zuopin->getName()==$zpm){
                        $cmkdir="../".$rname."/".$zpm."/";
                        if(!file_exists($cmkdir)){
                                mkdir($cmkdir,0777,true);
                            }
                            $path="../".$rname."/".$zpm."/"."index.html";
                            $fp=fopen("../jiemumuban.html","r");
                            $str=fread($fp,filesize("../jiemumuban.html"));
                            foreach($zuopin as $xlj){

                            // $str_1=str_replace("{biaoti}",$xlj,$str_1);
                            // $str_1=str_replace("{imgs}","<img src=".$xlj." width='250' height='300'>",$str_1);
                            switch ($xlj->getName()) {

                                case 'imgs':
                            $str=str_replace("{imgs}","<img src='".$xlj."' id='".$zuopin->getName()."'".' width="240" height="290">',$str);
                                    # code...
                                    break;
                                    case 'biaoti':

                            $str=str_replace("{biaoti}",$xlj,$str);
                            $str=str_replace("{jiemutitle}",$xlj.'——尖局团春——路人甲制造',$str);

                                    # code...
                                    break;
                                    case 'time':

                            $str=str_replace("{time}",$xlj,$str);

                                    # code...
                                    break;
                                    case 'dianjiliang':

                            $str=str_replace("{dianjiliang}",$xlj,$str);

                                    # code...
                                    break;
                                    case 'jianjie':

                            $str=str_replace("{jianjie}",$xlj,$str);

                                    # code...
                                    break;



                                default:
                                    # code...
                                    break;
                            }

                            }

                            fclose($fp);
                            $handle=fopen($path,"wb");
                            fwrite($handle,$str);
                            fclose($handle);
                       }
                       // $handle=fopen($path,"wb");
                       //      fwrite($handle,$str);
                       //      fclose($handle);
                       //      echo "shenghceng".$path."<br/>";

                    }
                }
                else{

                }
            }
        }

    renwu("gdg","kwjd");