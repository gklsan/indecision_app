'use strict';

console.log('App.js is runnging!!!!!!');

// This is the JSX code
var app = {
    title: 'Indecision APP',
    subtitle: 'Learning the React'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title.toUpperCase()
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'First'
        ),
        React.createElement(
            'li',
            null,
            'Second'
        )
    )
);

var user = {
    name: 'Gokul P',
    age: 28,
    location: 'Bangalore'
};

var userName = 'Gokul P';
var userAge = 28;
var userLocation = 'Bangalore';
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

var appRoot = document.getElementById("app_root");

ReactDOM.render(template, appRoot);
