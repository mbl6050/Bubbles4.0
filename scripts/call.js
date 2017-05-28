function call(speech) {
  var num = cut(speech,see(speech, "call") + 5);
  num = num.toLowerCase();
  respond("Calling " + num); 
    
  if (num == "kim" || num == "kim lefevre" || num == "mom") {
      num = "tel:4066717704";
      direct(num);
  }
  else if (num == "jared" || num == "jared lefevre" || num == "dad") {
      num = "tel:4066711956";
      direct(num);
  }
  else if (num == "james" || num == "james lefevre" || num == "lames") {
      num = "tel:4066710670";
      direct(num);
  }
  else if (num == "tyler" || num == "tyler lefevre" || num == "ty" || num == "tie" || num == "ti") {
      num = "tel:4068502810"
      direct(num);
  }
  else if (num == "ashley" || num == "ashley lefevre" || num == "sister" || num == "ash" || num == "as") {
      num = "tel:4066714090";
      direct(num);
  }
  else if (num == "william" || num == "william lefevre" || num == "will" || num == "willie" || num == "willy") {
      num = "tel:4066714090";
      direct(num);
  }
  else if (num === "" || num == " " || num == "   ") {
      alert("blank");
  }
  else {
      direct("tel:" + num);
  }
    
  
  function  direct(num) {
    if (voice === true) {
        var button = document.getElementById("button");
        button.removeEventListener("mousedown",down);
        button.removeEventListener("mouseup",up);
        button.removeEventListener("touchstart", down, false);
        button.removeEventListener("touchend", up, false);
        
        button.onclick = function(){call2(num);};
        respond("Press Button to Place Call");
    }
      else {
          window.location.href = num;
      }
  }
  respond("mbl");
}

function call2(num) {
     window.location.href = num;
    
    var button = document.getElementById("button");
    button.addEventListener("mousedown",down);
    button.addEventListener("mouseup",up);
    
    button.addEventListener("touchstart", down, false);          
    button.addEventListener("touchend", up, false);
    button.onclick = function(){return false;};
}
