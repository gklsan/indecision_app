import React from 'react';
import ReactDOM from 'react-dom';

const template = React.createElement('p', {}, 'test');
ReactDOM.render(template, document.getElementById('app'));


// import { square } from "./utils";
//
// import isSenor, { isAdult, canDrink } from "./person";
//
//
// console.log("app.js is running..!");
//
// console.log(square(7));
// console.log(isAdult(30));
// console.log(canDrink(18));
// console.log(isSenor(90));

// import validator from 'validator';
//
// const res = validator.isEmail('rere@gds.din');
//
// console.log(res);