function wolfSearch(speech) {
  var search;
  if (see(speech,"search for") != -1) {
      search = cut(speech,11);
  }
  else {
      search = cut(speech,6);
  }
    respond("Searching for" + search);
  var xmlhttp = new XMLHttpRequest();
  var url = "https://crossorigin.me/https://api.wolframalpha.com/v1/spoken?i=" + search + "&appid=L597EH-Q28TJLHUKT";

  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
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