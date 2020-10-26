<!DOCTYPE html>
<html>
    <body>
        <p>Debug v11</p>
    <?php


        if (!isset($_POST["p6"]) || $_POST["p6"] != "botcheck") {  
            header("Location: ./contact.html");
            exit;  
        }

        echo $_POST["p1"];

        
        $firstName = $_POST["p1"];
        $lastName = $_POST["p2"];
        $emailAddress = $_POST["p3"];
        $reason = $_POST["p4"];
        $messageRaw = $_POST["p5"];

        $messageSend = "Name: {$firstName} {$lastName}\n
                        Email address: {$emailAddress}\n
                        Reason for contact: {$reason}\n
                        Message Content:\n\n{$messageRaw}";
        
        

        mail("teams@opensauce.uk", "Message from opensauce", $messageSend);

        echo "Debug v11";

        echo "The Following message has been sent:\n";
        print $messageSend;
        

    ?>
    </body>
</html>