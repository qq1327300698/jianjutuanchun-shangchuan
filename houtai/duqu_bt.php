<?php
    $servername = "localhost";
$username = "root";
$password = "sunhaiwei1998";
$dbname = "shiping_db";
// $keyword = htmlspecialchars(urldecode($_GET['keyword']));
$q=$_GET["q"];
// iconv("utf-8","gbk",urldecode($_POST['msg']))
// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
 // 检测连接
if ($conn->connect_error) {
     die("连接失败: " . $conn->connect_error);
}
mysqli_set_charset($conn,"utf8");
$sql = "SELECT * from shiping_tb where id in(select max(id) from shiping_tb group by jmBt) and jmBt='".$q."'";
$result=mysqli_query($conn, $sql);
if(mysqli_num_rows($result)>0){
    // echo $result;
    while($row=mysqli_fetch_array($result)){
        echo $row["id"].",".$row["jmBt"].",".$row["jmMl"].",".$row["jmTp"].",".$row["jmJj"].",".$row["jmBq"].",".$row["spBt"].",".$row["spLj"].",".$row["spTp"].",".$row["spJj"].",".$row["sj"].",".$row["spLb"].",".$row["djs"];

    }
}
else{
    echo "0 结果";
}
mysqli_close($conn);
?>