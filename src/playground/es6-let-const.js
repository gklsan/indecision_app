console.log('**************** Inside es6-let-const file ****************');
// var ex:
var nameVar = 'Gokul';
var nameVar = 'New Gokul';
nameVar = 'New Gokul1';
console.log('nameVar', nameVar);


// let ex:
let nameLet = 'Gokul';
// let nameLet = 'Gokul';  // Duplicate declaration "nameLet"
nameLet = 'New Gokul Let';
console.log('nameLet', nameLet);


// const ex:
const nameConst = 'Gokul';
// const nameConst = 'Gokul';  //  Duplicate declaration "nameConst"
// nameConst = 'Gokul const';  //  "nameConst" is read-only
console.log('nameConst', nameConst);


const fullName = "Gokul P";
let firstName;

if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);