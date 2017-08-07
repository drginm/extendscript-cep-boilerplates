var csInterface = new CSInterface();
var appButton = window.document.getElementById("app-button");
appButton.onclick = function() {
  csInterface.evalScript("executeCodeInsideApp()", function(result) {
    alert(result);
  });
};