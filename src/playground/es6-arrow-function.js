console.log('**************** Inside es6-arrow-function file ****************');

const square = function (x) {
    return x * x;
}
console.log('square', square(4));


const squareArrowBlock  = (x) => {
    return x * x;
};
console.log('squareArrowBlock', squareArrowBlock(5));


const squareArrow  = (x) => x * x;
console.log('squareArrow', squareArrow(5));



// Challenge

const getFirstName = (fullName) => fullName.split(' ')[0]

console.log(getFirstName("Gokul P"));