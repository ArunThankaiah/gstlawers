$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value);
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                subject: {
                    required: false,
                    minlength: 10
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "come on, you have a name don't you?",
                    minlength: "your name must consist of at least 2 characters"
                },
                email: {
                    required: "no email, no message"
                },
                subject: {
                    required: "please indicate a subject"
                },
                message: {
                    required: "um...yea, you have to write something to send this form.",
                    minlength: "thats all? really?"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 0.15, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn();
                        });
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 0.15, function() {
                            $('#error').fadeIn();
                        });
                    }
                })
            }
        })
    })
        
 })(jQuery)
})

// ===============================================================================================================================
// ===============================================================================================================================
// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('contactForm');
    
//     form.addEventListener('submit', function(event) {
//         let valid = true;
//         const name = document.getElementById('name').value.trim();
//         const phone = document.getElementById('phone').value.trim();
//         const email = document.getElementById('email').value.trim();
//         const subject = document.getElementById('subject').value.trim();
//         const message = document.getElementById('message').value.trim();

//         // Basic validation
//         if (!name || !phone || !email || !subject || !message) {
//             alert('All fields are required.');
//             valid = false;
//         } else if (!validateEmail(email)) {
//             alert('Please enter a valid email address.');
//             valid = false;
//         } else if (!validatePhone(phone)) {
//             alert('Please enter a valid phone number.');
//             valid = false;
//         }

//         if (!valid) {
//             event.preventDefault(); // Prevent form from submitting if validation fails
//         }
//     });

//     function validateEmail(email) {
//         const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return re.test(String(email).toLowerCase());
//     }

//     function validatePhone(phone) {
//         const re = /^[0-9]{10}$/; // Adjust this regex based on your phone number format
//         return re.test(String(phone).toLowerCase());
//     }
// });