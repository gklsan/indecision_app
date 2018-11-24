'use strict';

console.log('**************** Inside es6-arrow-function-2 file ****************');

function add(a, b) {
    console.log(arguments);
    return a + b;
}
console.log('add', add(10, 44));

var addArrow = function addArrow(a, b) {
    return a + b;
};
console.log('addArrow', addArrow(4, 3));

var user = {
    name: 'gokul',
    cities: ['erode', 'Bangalore', 'Chennai'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        // console.log(this.name);
        // console.log(this.cities);
        return this.cities.map(function (city) {
            return _this.name + " lived in " + city;
        });
        // this.cities.forEach((city) => {
        //     console.log(that.name + ' Lived in ' + city)
        // })
    }
};

console.log(user.printPlacesLived());

var multiplier = {
    numbers: [1, 2, 3, 4, 5, 6, 6],
    multiplyBy: 20,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (num) {
            return num * _this2.multiplyBy;
        });
    }
};
console.log(multiplier.multiply());
