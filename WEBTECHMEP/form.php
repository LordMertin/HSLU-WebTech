<?php
    $name = $_POST["name"];
    $parts = explode(" ", $name);
    $name = $parts[0];
    $message = $_POST["message"];
    $mail = $_POST["email"];
    setcookie($name, $mail, time()+3600); 
    
    //send mail only works with mailserver
    mail($mail, 'Martins Website Kontaktaufnahme', $message);
?>

<script>
            alert("Name: <?= $_POST["name"]?>, " +
                  "Email: <?= $_POST["email"]?>"
                  + "\nWe sent a copy of your message to the email you provided. Thanks.");
            window.location = './index.html';
</script>