console.log('App.js is runnging!!!!!!');

// var template = <p>This is jsx type of code</p>;
var template = React.createElement(
  "h1",
  { id: "header1" },
  "This is the JSX format of code"
);
var appRoot = document.getElementById("app_root");
ReactDOM.render(template, appRoot);
