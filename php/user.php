<?php

    // $con = mysql_connect("localhost:3306","root","root");
    // if(!$con){
    //     die("Could not connect:".mysql_error());
    // }
    // if(mysql_query("CREATE DATABASE user_db",$con))
    // {
    //     echo "Database ccreated";
    // }
    // else{
    //     echo "Error";
    // }
    // mysql_select_db("user_db");
    // $sql = "CREATE TABLE user_tb(
    //     personID int NOT NULL AUTO_INCREMENT,(有问题！)
    //     Anonymous varchar(20),
    //     Username varchar(24),
    //     Password varchar(100)
    // )";
    // mysql_query($sql,$con);
    // mysql_close($con);
    $con = mysql_connect("localhost","root","root");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }
// ============================创建数据库===================
// Create database
// if (mysql_query("CREATE DATABASE my_db",$con))
//   {
//   echo "Database created";
//   }
// else
//   {
//   echo "Error creating database: " . mysql_error();
//   }
//====================创建数据表=============================
// Create table in my_db database
// mysql_select_db("user_db", $con);
// $sql = "CREATE TABLE user2
// (
// personID INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,（菜鸟没问题）
// FirstName varchar(15) NOT NULL ,
// LastName varchar(15) NOT NULL ,
// Age int
// )";
// mysql_query($sql,$con);
mysql_select_db("user_db", $con);//声明要操作的数据库
$re_tb="drop table user1";
mysql_query($re_tb,$con);

mysql_close($con);
?>