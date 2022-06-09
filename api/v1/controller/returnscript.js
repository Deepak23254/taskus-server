var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var id = req.query.id;
  var str = `
  var scripts = document.getElementsByTagName('script');
  var last_script = scripts[scripts.length - 2];
  var src = last_script.src;
  var url = new URL(src);
  var id = url.searchParams.get("id");

  //create iframe
  var ifrm = document.createElement("iframe");
  ifrm.setAttribute("src", "http://localhost/chatwidget?id=${id}");
  ifrm.setAttribute("frameBorder", "0");
  ifrm.style.width = "300px";
  ifrm.style.height = "450px";
  ifrm.setAttribute("scrolling", "no");

  //append iframe in div
  const para = document.createElement("div");
  para.appendChild(ifrm);

  //append div and iframe in custom-chat
  const element = document.getElementById("custom-chat");
  element.style.backgroundColor = "#FFF";
  element.style.cursor = "grab";
  element.style.userSelect = "none";
  element.style.overflow = "hidden";
  element.style.zIndex = "9990";
  element.style.position = "fixed";
  element.style.bottom = "10px";
  element.style.right = "5px";
  element.style.borderRadius = "5px";
  //element.style.border = "2px groove";
  element.style.transition = "height 0.4s";
  //element.style.boxShadow = "0 0 5px 2px rgb(50 50 50 / 17%)";
  element.appendChild(para);
  `;
  res.send(str);
});
module.exports = router;