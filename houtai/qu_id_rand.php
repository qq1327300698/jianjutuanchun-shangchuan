<?php
header('Content-Type: text/html; charset=utf-8');
   $servername = "localhost";
$username = "root";
$password = "sunhaiwei1998";
$dbname = "shiping_db";
// $keyword = htmlspecialchars(urldecode($_GET['keyword']));
// $q=$_GET["q"];
// iconv("utf-8","gbk",urldecode($_POST['msg']))
// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
 // 检测连接
if ($conn->connect_error) {
     die("连接失败: " . $conn->connect_error);
}
mysqli_set_charset($conn,"utf8");
$sql = "SELECT * FROM shiping_tb WHERE spLj like '%player%'";
$result=mysqli_query($conn, $sql);
if(mysqli_num_rows($result)>0){
    $zds= mysqli_field_count($conn);
    $sjs=rand(1,$zds);
    // echo $sjs;
    mysqli_data_seek($result,$sjs);
    $row=mysqli_fetch_row($result);
        echo $row[0].",".$row[1].",".$row[2].",".$row[3].",".$row[4].",".$row[5].",".$row[6].",".$row[7].",".$row[8].",".$row[9].",".$row[10].",".$row[11].",".$row[12];
    mysqli_free_result($result);

}
else{
    echo "0 结果";
}
mysqli_close($conn);

 ?>