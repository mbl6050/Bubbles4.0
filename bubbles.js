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
  if (annyang) {
    
      var commands = {
          "Bubbles *speech": text
      };
      annyang.addCommands(commands);

      annyang.start();
      
      
      
  }
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
  var num = cut(speech,5);
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
    var ans = prompt("Hello, What can I do for you?");
    if (ans === "" || ans == " ") {
      
    }
    else {
      voice = false;
      AI(ans);
    }
}
start();

var w = window.innerWidth;
var h = window.innerHeight; 
console.log(w);
console.log(h);
if (w > h) {
  w = h;
}
else {
  h = w;
}
var button = document.getElementById("button");
button.style.height = h + "px";
button.style.width = w + "px";
button.style.left = (window.innerWidth - w) / 2 + "px";
button.style.top = (window.innerHeight - h) / 2 + "px";