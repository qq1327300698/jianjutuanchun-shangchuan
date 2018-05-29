<meta charset="UTF-8" />
<?php
     echo "节目标题:";
     echo $_GET["jmBt"];
     echo "<br>";

     echo "节目连接:";
     echo $_GET["jmMl"];
     echo "<br>";

     echo "节目图片:";
     echo $_GET["jmTp"];
     echo "<br>";

     echo "节目简介:";
     echo $_GET["jmJj"];
     echo "<br>";

     echo "节目标签:";
     echo $_GET["jmBq"];
     echo "<br>";

     echo "视频标题:";
     echo $_GET["spBt"];
     echo "<br>";

     echo "视频连接:";
     echo $_GET["spLj"];
     echo "<br>";

     echo "视频图片:";
     echo $_GET["spTp"];
     echo "<br>";

     echo "视频简介:";
     echo $_GET["spJj"];
     echo "<br>";

     echo "取时间：";
     echo $_GET["sj"];
     echo "<br>";

     echo "视频类别：";
     echo $_GET["spLb"];
     $conn = new mysqli("localhost","root","root","shiping_db");
     if($conn->connect_error){
          die("连接失败:".$conn->connect_error);
     }


     $sql="INSERT INTO shiping_tb(jmBt,jmMl, jmTp,jmJj,jmBq,spBt,spLj,spTp,spJj,sj,spLb)
VALUES (?,?,?,?,?,?,?,?,?,?,?);";
// mysql_select_db("shiping_db", $conn);
$stmt = mysqli_stmt_init($conn);

    //预处理语句
    if (mysqli_stmt_prepare($stmt, $sql)) {
        // 绑定参数
        mysqli_stmt_bind_param($stmt, 'sssssssssss', $jmBt, $jmLj, $jmTp,$jmJj,$jmBq,$spBt,$spLj,$spTp,$spJj,$sj,$spLb);

        // 设置参数并执行
        $jmBt = $_GET["jmBt"];
        $jmLj = $_GET["jmMl"];
        $jmTp = $_GET["jmTp"];
        $jmJj = $_GET["jmJj"];
        $jmBq = $_GET["jmBq"];
        $spBt = $_GET["spBt"];
        $spLj = $_GET["spLj"];
        $spTp = $_GET["spTp"];
        $spJj = $_GET["spJj"];
        $sj = $_GET["sj"];
        $spLb=$_GET["spLb"];
        mysqli_stmt_execute($stmt);
    }
?>