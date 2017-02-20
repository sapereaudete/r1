// init.js

global["output"] = true,
global["date"] = new Date(),
global["showTopImage"] = false,
global["log"] = function(a, b) {
    b = b || "";
    if (global.output === true) {
        console.log(a + " " + b);
    }
}
global.date = ("0" + global.date.getDate()).slice(-2) + "." + ("0" + (global.date.getMonth() + 1)).slice(-2) + "." + global.date.getFullYear();
global.showTopImage = (readCookie("topImage") == global.date) ? false : false; //true;
if (global.showTopImage === true) {
  document.getElementsByTagName("html")[0].className += " showTopImage";
}
