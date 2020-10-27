<!DOCTYPE html>
<html>
    <body>
    <?php

        if ($_POST["g-recaptcha-response"] == null) {
            header("Location: errorpages/401.html");
            exit;
        }


        if (!isset($_POST["p6"]) || $_POST["p6"] != "botcheck") {  
            header("Location: errorpages/400.html");
            exit;  
        }

        if ("POST" != getenv("REQUEST_METHOD")) {  
            header("Location: errorpages/400.html");
            exit;  
        }

        if ("" == getenv("HTTP_USER_AGENT") || "" == getenv("HTTP_REFERER")) {
            header("Location: errorpages/400.html");
            exit;  
        }

        if (!empty($_POST["email"])) 
            exit;  
            echo "Message Sent!";
        $firstName = $_POST["p1"];
        $lastName = $_POST["p2"];
        $emailAddress = $_POST["p3"];
        if (!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/", $emailAddress))
            exit;
        $reason = $_POST["p4"];
        $messageRaw = $_POST["p5"];

        $messageSend = "From: {$firstName} {$lastName} <{$emailAddress}>\n
                        Reason for contact: {$reason}\n
                        Email Content:\n\n{$messageRaw}\n";
        
        

        mail("contact@opensauce.uk", "Contact Email", $messageSend);

        // echo "Debug v11";

        // echo "The Following message has been sent:\n";
        // print $messageSend;
        
    ?>
    </body>
</html>