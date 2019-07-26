if (typeof customPath == 'undefined') {
  customPath = false;
}
if (customPath) {
  var path = customPath;
} else {
  var scripts = document.getElementsByTagName('SCRIPT');
  var script = scripts[scripts.length - 1].src;

  if (!script.match('://') && script.charAt(0) != '/') script = './' + script;

  var path = script.replace(/\\/g, '/').replace(/\/[^\/]*\/?$/, '');
}

document.write("<style type='text/css'>\n");
document.write(
  '.error {color:red; font-weight:bold;}\n .soft_error {color:red;}\n .success {color:green;}\n'
);
document.write('</style>');

function addtoDiv(id, className, text) {
  var wft = document.getElementById('Webfont_Test');
  var newDiv = document.createElement('div');
  newDiv.id = id;
  newDiv.className = className;
  var txt = document.createTextNode(text);
  newDiv.appendChild(txt);
  wft.appendChild(newDiv);
}

window.onload = function() {
  var body = document.getElementsByTagName('body')[0];
  body.innerHTML = '';
  newDiv = document.createElement('div');
  newDiv.id = 'Webfont_Test';
  body.appendChild(newDiv);
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    http = true;
  } else {
    // code for IE6, IE5
    activex = true;
  }
};
