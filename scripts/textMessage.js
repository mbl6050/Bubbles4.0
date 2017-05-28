function textMessage(speech) {
    
    var message;
    if (voice === true) {
        var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition ||        window.msSpeechRecognition)();
        recognition.interimResults = false;
        recognition.maxAlternatives = 5;

        var msg = new SpeechSynthesisUtterance("What would you like to say");
        window.speechSynthesis.speak(msg);
        msg.onend = function(e) {
            recognition.start();
        };

        recognition.onresult = function(event) {

            message = event.results[0][0].transcript;
            next(message);
        }
    }
    else {
        message = prompt("What would you like to say?");
        next(message);
    }
    
    function next(message) {
        if (see(speech,"send message to") != -1) {
            var to = cut(speech,see(speech, "to") + 3);
        }
        else if (see(speech,"text") != -1) {
            var to = cut(speech,see(speech, "text") + 5);
        }
        var to2 = to;
        if (to == "kim" || to == "kim lefevre" || to == "mom") {
            to = "4066717704";
        }
        else if (to == "jared" || to == "jared lefevre" || to == "dad") {
            to = "4066711956";
            
        }
        else if (to == "james" || to == "james lefevre" || to == "lames") {
            to = "4066710670";
        }
        else if (to == "tyler" || to == "tyler lefevre" || to == "ty" || to == "tie" || to == "ti") {
            to = "4068502810"
        }
        else if (to == "ashley" || to == "ashley lefevre" || to == "sister" || to == "ash" || to == "as") {
            to = "4066714090";
        }
        else if (to == "william" || to == "william lefevre" || to == "will" || to == "willie" || to == "willy") {
            to = "4066714090";
        }
        else if (to == "michael") {
            to = "4068504179";
        }
        console.log(message);
        if (message == undefined) {
        
        }
        else {
            var emails = to + "@vtext.com";
            var subject = "From Michael LeFevre. Reply to (406) 850-4179";
            respond("Sending " + message + " to " + to2);
            
            
            
            
            
            if (voice === true) {
                console.log("Confirm");
                var rec = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition ||        window.msSpeechRecognition)();
                rec.interimResults = false;
                rec.maxAlternatives = 5;

                var ms = new SpeechSynthesisUtterance("Would you like to send this message, Sir?");
                window.speechSynthesis.speak(ms);
                ms.onend = function(e) {
                    rec.start();
                };

                rec.onresult = function(event) {

                    var answer = event.results[0][0].transcript;
                    confirmMessage();
                }
            }
            else {
                var answer = prompt("Would you like to send this message, Sir?");
                confirmMessage();
            }
            
            
            function confirmMessage() {
                
                if (see(answer, "y") != -1 || see(answer, "send") != -1) {
                    respond("Ok, Message sent Sir");
                    send(emails,subject,message);
                }
                else {
                    respond("Message not sent, Sir");
                }
            }
            
        }
    }
}




function send(emails,subject,message) {
        (function(){
              emailjs.init("user_pPnHsNL6N8tsUXYAQ9zJP");
           })();

                emailjs.send("gmail","email",{email: emails, subject: subject, body: message}).then(function(response) {
           respond("Successfully Sent Sir");
        }, function(err) {
           respond("Message Failed Sir");
        });

    }