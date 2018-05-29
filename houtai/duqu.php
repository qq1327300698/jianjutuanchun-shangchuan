<?php
    $servername = "localhost";
$username = "root";
$password = "root";
$dbname = "shiping_db";
$q=$_GET["q"];
// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
 // 检测连接
if ($conn->connect_error) {
     die("连接失败: " . $conn->connect_error);
}
$sql = "SELECT * FROM shiping_tb WHERE jmBt= '".$q."'GROUP BY (jmBt) " ;
$result=mysqli_query($conn, $sql);
if(mysqli_num_rows($result)>0){
    while($row=mysqli_fetch_array($result)){
        echo $row["id"].",".$row["jmBt"].",".$row["jmMl"].",".$row["jmTp"].",".$row["jmJj"].",".$row["jmBq"].",".$row["spBt"].",".$row["spLj"].",".$row["spJj"].",".$row["sj"].",".$row["spLb"];

    }
}
else{
    echo "0 结果";
}
mysqli_close($conn);
?>