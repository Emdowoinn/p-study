<?php

header('Content-type: text/plain; charset= UTF-8');

if(isset($_POST['username']) && isset($_POST['password']) && $_POST['username'] != '' && $_POST['password'] != '')
    {
    $username = $_POST['username'];
    $password = $_POST['password'];


    $host = 'mysql153.phy.lolipop.lan';
    $dbname = 'LAA1354626-moon';
    $user = 'LAA1354626';
    $pass = 'angel9826';

    $conn = new PDO("mysql:host=$host; dbname=$dbname", $user, $pass);

    $stmt = $conn->prepare("SELECT * FROM user WHERE username = :username");

    $stmt->bindParam( ':username', $username, PDO::PARAM_STR);

    $res = $stmt->execute();

    if($res){
        $data = $stmt->fetch();
        // var_dump($data);

        $conn = null;
    }

    if ($username == $data['username'])
        {
        if ($password == $data['password'])
            {
            echo 'ログインできました。' . '<br />';
            }
        else
            {
            echo 'パスワード不一致。' .'<br />';
            }
        // echo 'username: ' . $username .'<br />';
        // echo 'password: ' . $password . '<br />';
        }
    else
        {
        echo 'ユーザーがありません。' .'<br />';
        // echo 'username: ' . $username .'<br />';
        // echo 'password: ' . $password . '<br />';
        }
    }
else
    {
    echo '入力が不十分です。' .'<br />';
    }
