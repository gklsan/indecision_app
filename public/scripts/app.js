"use strict";

console.log('App.js is runnging!!!!!!');

// This is the JSX code
var template = React.createElement(
  "h1",
  null,
  "This is jsx type of code!!!!"
);

var appRoot = document.getElementById("app_root");

ReactDOM.render(template, appRoot);
