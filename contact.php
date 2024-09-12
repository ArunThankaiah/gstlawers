<?php include_once('assest/header.php') ?>

<!--Start breadcrumb area-->
<section class="header-breadcrumb">
    <div class="container">
        <div class="row m0 page-cover">
            <div class="section-header">
                <h2>Contact us</h2>
            </div>
            <ol class="breadcrumb">
                <li><a href="index.html">Home</a></li>
                <li class="active">Contact</li>
            </ol>
        </div>
    </div>
</section>
<!--End breadcrumb area-->

<!--    start contact area-->
<section class="contact-area">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="contact-questions">
                    <h2>Get touch With Us</h2>
                    <p>Contact K S Hariharan & Associates for expert legal guidance in company law, taxation, and dispute resolution. Our dynamic team delivers tailored solutions for individuals and businesses. Reach out today!</p>
                    <div class="row  customer-support">
                        <div class="contact-info">
                            <h2>we're here for you</h2>
                            <ul>
                                <li>
                                    <div class="media">
                                        <div class="media-left">
                                            <i class="pe-7s-map-marker" aria-hidden="true"></i>
                                        </div>
                                        <div class="media-body">
                                            Haridev Buildings, Opp. <br> Income Tax Building, <br> Old Railway Station Road, <br>
                                            Ernakulam 682018
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="media">
                                        <div class="media-left">
                                            <i class="pe-7s-call" aria-hidden="true"></i>
                                        </div>
                                        <div class="media-body">
                                            <a href="tel:919895069926">+91 9895 069 926</a> <br>
                                            <a href="tel:918921450113">+91 8921 450 113</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="media">
                                        <div class="media-left">
                                            <i class="pe-7s-mail" aria-hidden="true"></i>
                                        </div>
                                        <div class="media-body">
                                            <a href="mailto:kshariharanandassociation@gmai,.com">kshariharanandassociation@gmai,.com</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="contact-forms">
                    <?php
                    // Enable error reporting for debugging
                    error_reporting(E_ALL);
                    ini_set('display_errors', 1);

                    // Function to handle errors and log them
                    function died($error)
                    {
                        logMessage("Error: {$error}"); // Log the error message
                        echo "We are sorry, but there were errors with your form submission:<br /><br />";
                        echo $error . "<br /><br />";
                        echo "Please go back and fix these errors.<br />";
                        die();
                    }

                    // Function to log messages
                    function logMessage($message)
                    {
                        $logFile = 'path/to/your/logfile.log'; // Specify the path to your log file
                        $currentDate = date('Y-m-d H:i:s'); // Current date and time
                        $logMessage = "[{$currentDate}] - {$message}\n"; // Format your log message
                        file_put_contents($logFile, $logMessage, FILE_APPEND); // Write message to log file
                    }

                    // Check if the form is submitted
                    if ($_SERVER["REQUEST_METHOD"] == "POST") {
                        $email_to = "arunchandhu120@gmail.com";
                        $email_subject = "Enquire Now";

                        // Initialize variables
                        $error_message = '';
                        $name = isset($_POST['name']) ? trim($_POST['name']) : '';
                        $email_from = isset($_POST['email']) ? trim($_POST['email']) : '';
                        $phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
                        $message = isset($_POST['message']) ? trim($_POST['message']) : '';

                        // Validate form fields
                        $email_exp = '/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/';
                        if (!preg_match($email_exp, $email_from)) {
                            $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
                        }

                        $string_exp = "/^[A-Za-z .'-]+$/";
                        if (!preg_match($string_exp, $name)) {
                            $error_message .= 'The Name you entered does not appear to be valid.<br />';
                        }

                        // Basic phone number validation (you can adjust this regex as needed)
                        $phone_exp = '/^\+?[0-9]{10,15}$/';
                        if (!preg_match($phone_exp, $phone)) {
                            $error_message .= 'The Phone Number you entered does not appear to be valid.<br />';
                        }

                        if (strlen($error_message) > 0) {
                            died($error_message);
                        }

                        // Function to clean strings for email content
                        function clean_string($string)
                        {
                            $bad = array("content-type", "bcc:", "to:", "cc:", "href");
                            return str_replace($bad, "", $string);
                        }

                        // Create email message
                        $email_message = "Name: " . clean_string($name) . "\n";
                        $email_message .= "Email: " . clean_string($email_from) . "\n";
                        $email_message .= "Phone: " . clean_string($phone) . "\n";
                        $email_message .= "Message: " . clean_string($message) . "\n";

                        // Create email headers
                        $headers = 'From: ' . $email_from . "\r\n" .
                            'Reply-To: ' . $email_from . "\r\n" .
                            'X-Mailer: PHP/' . phpversion();

                        // Attempt to send the email and log success or failure
                        if (mail($email_to, $email_subject, $email_message, $headers)) {
                            logMessage("Email sent successfully to {$email_to}.");
                            header("Location: thank_you.php");
                            die();
                        } else {
                            logMessage('Failed to send email.');
                            died('There was an error sending the email.');
                        }
                    }
                    ?>


                    <form action="contact_process.php" id="contactForm" class="row contact-form" novalidate="novalidate">
                        <div class="col-sm-12">
                            <div class="form-group">
                                <input for="range" type="text" id="name" name="name" placeholder="Name" required="" class="form-control">
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <div class="form-group">
                                <input type="email" id="phone" name="phone" placeholder="Email" required="" class="form-control">
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <div class="form-group">
                                <input type="tel" id="email" name="email" placeholder="Phone Numper" required="" class="form-control">
                            </div>
                        </div>

                        <div class="col-sm-12 form-group">
                            <div class="message">
                                <textarea name="message" id="message" class="form-control" placeholder="Message"></textarea>
                            </div>
                        </div>
                        <div class="col-sm-12"><button type="submit" class="btn button">Submit</button></div>
                    </form>
                    <!-- <div class="col-sm-12">
                            <div class="form-group">
                                <input type="text" id="subject" name="subject" placeholder="Subject" required="" class="form-control">
                            </div>
                        </div> -->
                    <div id="success">Your message succesfully sent!</div>
                    <div id="error">Opps! There is something wrong. Please try again</div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">

            </div>
        </div>
    </div>
</section>
<!--End contact area-->

<!--MapBox-->
<!-- <section class="map">
    <div id="mapBox" class="row m0" data-lat="37.3818288" data-lon="-122.0636325" data-zoom="15"></div>
</section> -->

<?php include_once('assest/footer.php') ?>