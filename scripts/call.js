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
