var ajax = new XMLHttpRequest();
ajax.open("GET", "../assets/svg/sprite.svg", true);
ajax.responseType = "document";
ajax.onload = function(e) {
  document.body.insertBefore(ajax.responseXML.documentElement,
    document.body.childNodes[0]);
}
ajax.send();
