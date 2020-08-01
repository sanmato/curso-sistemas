<?php
    $_REQUEST['name'];
    $file = $_REQUEST['upload'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SERVER</title>
</head>
<body>
    <p><?php echo "Hola, ". $_REQUEST['name'] ?></p>
    <p><?php echo "El hash MD5 de ". $file . ": " .md5_file($file); ?></p>
</body>
</html>