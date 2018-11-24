console.log('**************** Inside es6-arrow-function-2 file ****************');

function add(a, b) {
    console.log(arguments);
    return a + b;
}
console.log('add', add(10,44));

const addArrow = (a, b) => {
    return a + b;

};
console.log('addArrow', addArrow(4,3));


const user =
    {
        name: 'gokul',
        cities: ['erode', 'Bangalore', 'Chennai'],
        printPlacesLived(){
            // console.log(this.name);
            // console.log(this.cities);
            return this.cities.map((city) => this.name + " lived in " + city);
            // this.cities.forEach((city) => {
            //     console.log(that.name + ' Lived in ' + city)
            // })
        }
    };

console.log(user.printPlacesLived());



const multiplier = {
    numbers: [1,2,3,4,5,6,6],
    multiplyBy: 20,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy);
    }
}
console.log(multiplier.multiply())