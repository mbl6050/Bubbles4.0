var voice = true;
//functions for gahering info
function see(string,thing) {
    return string.search(thing);
} 
function cut(string,thing2,thing3) {
    return string.slice(thing2, thing3);
}
//functions for gahering info
function start() {
  function text(speech) {
      var message = AI(speech);
      respond(message);
  }
  var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
  recognition.interimResults = false;
  recognition.maxAlternatives = 5;
  recognition.start();
  recognition.onresult = function(event) {
      console.log('You said: ', event.results[0][0].transcript);
      var speech = event.results[0][0].transcript;
      AI(speech);
  };
}

function AI(speech) {
    var resp;
    speech = speech.toLowerCase();
    
    //Phone call section
    
    if (see(speech,"call") != -1) {
      call(speech);
    }
    //Phone call section
    
    else if (see(speech,"search for") != -1  || see(speech,"search") != -1) {
      wolfSearch(speech);
        
    }
    else {
      
    }
    
}



function call(speech) {
  var num = cut(speech,see(speech, "call") + 5);
  if (num == "kim" || num == "kim lefevre" || num == "mom") {
      window.location.href = "tel:4066717704";
  }
  if (num == "jared" || num == "jared lefevre" || num == "dad") {
      window.location.href = "tel:4066711956";
  }
  if (num == "james" || num == "james lefevre" || num == "lames") {
      window.location.href = "tel:4066710670";
  }
  if (num == "tyler" || num == "tyler lefevre" || num == "ty" || num == "tie" || num == "ti") {
      window.location.href = "tel:4068502810";
  }
  if (num == "ashley" || num == "ashley lefevre" || num == "sister" || num == "ash" || num == "as") {
      window.location.href = "tel:4066714090";
  }
  if (num == "william" || num == "william lefevre" || num == "will" || num == "willie" || num == "willy") {
      window.location.href = "tel:4066714090";
  }
  if (num === "" || num == " " || num == "   ") {

  }
  else {
      window.location.href = "tel:" + num;
  }
  respond("mbl");
}

function wolfSearch(speech) {
  console.log("search");
  var search;
  if (see(speech,"search for") != -1) {
      search = cut(speech,11);
  }
  else {
      search = cut(speech,6);
  }
  var xmlhttp = new XMLHttpRequest();
  var url = "https://crossorigin.me/https://api.wolframalpha.com/v1/spoken?i=" + search + "&appid=L597EH-Q28TJLHUKT";

  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          //console.log(this.response);
         respond(this.response);
      }
      else if (this.status == 501) {
          respond("Info not found");
      }
      /*else {
          return "unknown error";
      }*/
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}













function respond(message) {
  if (message == "mbl") {
    
  }
  else if (voice === true) {
    var msg = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(msg);
  }
  else if (voice === false){
    alert(message);
  }
}


function noVoice() {
  if (localStorage.switch == "off") {
    var ans = prompt("Hello, What can I do for you?");
    if (ans === "" || ans == " " || ans === false || ans === null) {
      
    }
    else {
      voice = false;
      AI(ans);
    }
  }
  else {
    voice = true;
    start();
  }
}


