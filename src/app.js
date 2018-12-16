import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));


class NewClasses {
    name = 'gokul';
    greetings = () => `Hi i'm ${this.name}....!`;
}

const newClass = new NewClasses({name: 'gklsan'});
console.log('test');
console.log(newClass.greetings());