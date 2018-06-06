<?php
    $servername = "localhost";
$username = "root";
$password = "sunhaiwei1998";
$dbname = "shiping_db";
$q=$_GET["q"];
// $q="1";
// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
 // 检测连接
if ($conn->connect_error) {
     die("连接失败: " . $conn->connect_error);
}

mysqli_set_charset($conn,"utf8");
$huoqus='SELECT djs FROM shiping_tb where id="'.$q.'"';
$zj=mysqli_fetch_array(mysqli_query($conn, $huoqus));
echo $zj[0];
$jiashu=$zj[0]+1;
$sql = 'UPDATE shiping_tb SET djs=djs+1 WHERE id="'.$q.'"';
mysqli_query($conn, $sql);
?>




