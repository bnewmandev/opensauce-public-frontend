<!DOCTYPE html>
<html>
    <body>
        <p>Debug v8</p>
    <?php

        echo $_POST["p1"];

        $firstName = $_POST["p1"];
        $lastName = $_POST["p2"];
        $emailAddress = $_POST["p3"];
        $reason = $_POST["p4"];
        $messageRaw = $_POST["p5"];

        $messageSend = "Name: {$firstName} {$lastName}\n
                        Email address: {$emailAddress}\n
                        Reason for contact {$reason}\n
                        Message Content:\n\n{$messageRaw}";


        mail("teams@opensauce.uk", "Message from opensauce", $messageSend);

        echo "Debug v8" <br>

        echo "The Following message has been sent:\n";
        print $messageSend;

    ?>
    </body>
</html>