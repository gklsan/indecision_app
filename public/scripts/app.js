'use strict';

console.log('App.js is runnging!!!!!!');

// This is the JSX code
var app = {
    title: 'Indecision APP',
    subtitle: 'Learning the React',
    options: ['one', 'two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title.toUpperCase()
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        'Subtitle: ',
        app.subtitle,
        '!'
    ),
    React.createElement(
        'p',
        null,
        app.options && app.options.length > 0 ? 'Here are your options' : 'No options'
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

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age > 25 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById("app_root");

ReactDOM.render(templateTwo, appRoot);
