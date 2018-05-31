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
$sql = "SELECT DISTINCT jmBt FROM shiping_tb";
$result=mysqli_query($conn, $sql);
if(mysqli_num_rows($result)>0){
    while($row=mysqli_fetch_array($result)){
        echo $row["jmBt"];
        echo ",";


    }
}
else{
    echo "0 结果";
}
mysqli_close($conn);
?>