<meta charset="UTF-8" />
<?php
    $servername = "localhost";
$username = "root";
$password = "root";
$dbname = "shiping_db";

// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
 // 检测连接
if ($conn->connect_error) {
     die("连接失败: " . $conn->connect_error);
}
// 使用 sql 创建数据表
$sql = "CREATE TABLE shiping_tb (
       id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
       jmBt varchar(255) NOT NULL,
       jmMl varchar(255) NOT NULL  ,
       jmTp varchar(255) NOT NULL  ,
       jmJj varchar(255) NOT NULL  ,
       jmBq varchar(255) NOT NULL  ,
       spBt varchar(255) NOT NULL  ,
       spLj varchar(255) NOT NULL  ,
       spTp varchar(255) NOT NULL  ,
       spJj varchar(255) NOT NULL  ,
       sj TIMESTAMP NOT NULL,
       spLb varchar(255) NOT NULL

)";

if ($conn->query($sql) === TRUE) {
    echo "Table MyGuests created successfully";
} else {
    echo "创建数据表错误: " . $conn->error;
}

$conn->close();

 ?>