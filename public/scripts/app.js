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

var count = 0;
var appRoot = document.getElementById("app_root");

var addOne = function addOne() {
    count++;
    renderCounterApp();
};

var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};

var resetBtn = function resetBtn() {
    count = 0;
    renderCounterApp();
};
var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { id: 'increment_btn', className: 'button', onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { id: 'decrement_btn', className: 'button', onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { id: 'reset_btn', className: 'button', onClick: resetBtn },
            'Reset'
        )
    );

    ReactDOM.render(templateTwo, appRoot);
};
renderCounterApp();
