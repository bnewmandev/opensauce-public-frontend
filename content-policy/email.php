<!DOCTYPE html>
<html>
    <body>
    <?php

        $firstName = $_GET["p1"];
        $lastName = $_GET["p2"];
        $emailAddress = $_GET["p3"];
        $reason = $_["p4"];
        $messageRaw = $_["p5"];

        $messageSend = "Name: {$firstName} {$lastName}\n
                        Email address: {$emailAddress}\n
                        Reason for contact {$reason}\n
                        Message Content:\n\n{$messageRaw}";


        mail("teams@opensauce.uk", "Message from opensauce", $messageSend);

        echo "The Following message has been sent:\n";
        echo $messageSend;

    ?>
    </body>
</html> 