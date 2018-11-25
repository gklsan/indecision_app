'use strict';

console.log("Build in visible");

var appRoot = document.getElementById('app_root');
var visiblity = false;

var updateVisiblity = function updateVisiblity() {
    // visiblity = visiblity ? false : true;
    visiblity = !visiblity;
    console.log(visiblity);
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            ' Visiblity Toggle'
        ),
        React.createElement(
            'button',
            { onClick: updateVisiblity },
            visiblity ? 'Hide details' : 'Show details'
        ),
        visiblity && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                ' This is the visiblity details'
            ),
            ' '
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
