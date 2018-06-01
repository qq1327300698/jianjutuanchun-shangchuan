<?php
 $servername = "localhost";
$username = "root";
$password = "sunhaiwei1998";
$dbname = "shiping_db";
// $q = isset($_GET["q"]) ? intval($_GET["q"]) : '';
// $q=$_GET["q"];
// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
 // 检测连接
if ($conn->connect_error) {
     die("连接失败: " . $conn->connect_error);
}
mysqli_set_charset($conn,"utf8");

$sql = "SELECT * FROM shiping_tb";
$result=mysqli_query($conn, $sql);
if(mysqli_num_rows($result)>0){
    while ($row=mysqli_fetch_array($result)) {
        $cmkdir="../".$row["spLb"]."/".$row["jmMl"]."/";
        echo $cmkdir;
        echo "<br>";
        if(!file_exists($cmkdir)){
            mkdir($cmkdir,0777,true);
        }
        $path="../".$row["spLb"]."/".$row["jmMl"]."/"."index.html";
        $fp=fopen("../jiemumuban.html","r");
        $str=fread($fp,filesize("../jiemumuban.html"));
        $str=str_replace("{imgs}","<img src='".$row["jmTp"]."' id='".$row["jmMl"]."'".' width="240" height="290">',$str);
        $str=str_replace("{biaoti}",$row["jmBt"],$str);
        $str=str_replace("{jiemutitle}",$row["jmBt"]."——尖局团春——路人甲制造",$str);
        $str=str_replace("{jianjie}",$row["jmJj"],$str);
        $str=str_replace("{dianjilinag}",$row["djs"],$str);
        $str=str_replace("{time}",$row["sj"],$str);
        fclose($fp);
        $handle=fopen($path,"wb");
        fwrite($handle,$str);
        fclose($handle);

        $cmkdir_sp="../".$row["spLb"]."/".$row["jmMl"]."/".$row["id"]."/";
        echo $cmkdir_sp;
        echo "<br>";
        if(!file_exists($cmkdir_sp)){
            mkdir($cmkdir_sp,0777,true);
        }
        $path_sp="../".$row["spLb"]."/".$row["jmMl"]."/".$row["id"]."/"."index.html";
        $fp_sp=fopen("../shipingmuban.html","r");
        $str_sp=fread($fp_sp,filesize("../shipingmuban.html"));
        $str_sp=str_replace("{shipingtitle}",$row["spBt"]."-尖局团春-最好的相声网",$str_sp);
        $str_sp=str_replace("{jiemubiaoti}","<a href='.,/' id='".$row["jmMl"]."'>".$row["jmBt"]."</a>",$str_sp);
        $str_sp=str_replace("{shipingbt}","<span title='".$row["id"]."'>".$row["spBt"]."</span>",$str_sp);
        $str_sp=str_replace("{spJj}",$row["spJj"],$str_sp);
        fclose($fp_sp);
        $handle_sp=fopen($path_sp,"wb");
        fwrite($handle_sp,$str_sp);
        fclose($handle_sp);
    }
}

 ?>