'use strict';

console.log('App.js is runnging!!!!!!');

// This is the JSX code
var app = {
    title: 'Indecision APP',
    subtitle: 'Learning the React',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    render();
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    render();
};

// const orderList = () => {
//     return app.options.map((opt) => { return <li key={opt}>{opt}</li>})
// }

var appRoot = document.getElementById("app_root");

var render = function render() {
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
            'p',
            null,
            'Count: ',
            app.options.length,
            ' '
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All Options'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (opt) {
                return React.createElement(
                    'li',
                    { key: opt },
                    opt
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
