'use strict';

console.log('**************** Inside es6-arrow-function file ****************');

var square = function square(x) {
    return x * x;
};
console.log('square', square(4));

var squareArrowBlock = function squareArrowBlock(x) {
    return x * x;
};
console.log('squareArrowBlock', squareArrowBlock(5));

var squareArrow = function squareArrow(x) {
    return x * x;
};
console.log('squareArrow', squareArrow(5));

// Challenge

var getFirstName = function getFirstName(fullName) {
    return fullName.split(' ')[0];
};

console.log(getFirstName("Gokul P"));
