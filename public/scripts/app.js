"use strict";

console.log('App.js is runnging!!!!!!');

// This is the JSX code
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "This is jsx type of code!!!!"
    ),
    React.createElement(
        "p",
        null,
        " test "
    ),
    React.createElement(
        "ul",
        null,
        React.createElement(
            "li",
            null,
            "First"
        ),
        React.createElement(
            "li",
            null,
            "Second"
        )
    )
);

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Gokul P"
    ),
    React.createElement(
        "p",
        null,
        "Age: 28"
    ),
    React.createElement(
        "p",
        null,
        "Location: Bangalore"
    )
);

var appRoot = document.getElementById("app_root");

ReactDOM.render(templateTwo, appRoot);
