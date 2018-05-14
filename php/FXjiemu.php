<?php
    // $xml = simplexml_load_file("../xml/splj.xml");
        // print_r($xml);
        // echo "<br>";

        function renwu($rname,$zpm){
            $zongshu=0;
            $xml = simplexml_load_file("../xml/jiemu.xml");
            foreach($xml as $rm){
                if($rm->getName()==$rname){

                    foreach($rm as $id=>$zuopin){
                        //$zuopin->getName()==$zpm
                       if(1){
                        $cmkdir="../".$rname."/".$zpm."/";
                        if(!file_exists($cmkdir)){
                                mkdir($cmkdir,0777,true);
                            }
                            $path="../".$rname."/".$zpm."/"."index.html";
                            $fp=fopen("../jiemumuban.html","r");
                            $str=fread($fp,filesize("../jiemumuban.html"));
                            foreach($zuopin as $xlj){
                                $zongshu++;

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
                            if($xlj->getName()=="jishu"){
                                echo $zongshu;
                                $cmkdirNR="../".$rname."/".$zpm."/".$zongshu;
                        if(!file_exists($cmkdirNR)){
                                mkdir($cmkdirNR,0777,true);
                            }
                            $pathNR="../".$rname."/".$zpm."/".$zongshu."/"."index.html";
                            $fpNR=fopen("../FXshipingmuban.html","r");
                            $strNR=fread($fpNR,filesize("../FXshipingmuban.html"));
                            foreach ($xlj as $key => $value) {
                                switch ($key) {
                                    case "biaoti":$strNR=str_replace("{shipingbiaoti}","<a href='../' id='".$zuopin->getName()."'>".$value."</a>",$strNR);
                                        # code...
                                        break;
                                        case "js":$strNR=str_replace("{shipingjianjie}",$value,$strNR);
                                        # code...
                                        break;
                                        case "bt":$strNR=str_replace("{shipingbt}",$value,$strNR);
                                        # code...
                                        break;
                                        case "lj":$strNR=str_replace("{ljdz}","<i style='display:none'>".$value."</i>",$strNR);
                                        # code...
                                        break;
                                        case "d":$strNR=str_replace("{bianhao}","<i style='display:none'>".$value."</i>",$strNR);
                                        # code...
                                        break;

                                    default:
                                        # code...
                                        break;
                                }
                                # code...
                            }
                            fclose($fpNR);
                            $handleNR=fopen($pathNR,"wb");
                            fwrite($handleNR,$strNR);
                            fclose($handleNR);

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
    // "."http://jianjutuancchun/".$rname."/".$zpm."/"."