
    <?php

    echo $_GET["p1"];

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

        echo "Debug v4" <br>

        echo "The Following message has been sent:\n";
        print $messageSend;

    ?>
