<?php
    $servername = "localhost";
$username = "root";
$password = "sunhaiwei1998";
$dbname = "shiping_db";
// $q = isset($_GET["q"]) ? intval($_GET["q"]) : '';
$q=$_GET["q"];
// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
 // 检测连接
if ($conn->connect_error) {
     die("连接失败: " . $conn->connect_error);
}
$sql = "SELECT * FROM shiping_tb WhERE jmBt='".$q."'";
// echo $sql;
$result=mysqli_query($conn, $sql);
if(mysqli_num_rows($result)>0){
    while($row=mysqli_fetch_array($result)){
        echo "<a href=../".$row["id"]."><img src='".$row["spTp"]."' width=100 height=60><h1>".$row["spBt"]."</h1><h5>".$row["spJj"]."</h5></a>";
        echo ",";
    }
}
?>