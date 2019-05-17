// function square (x){
// return x * x
// };

// console.log(square(3))

// const squareArrow = (x) => {
//     return x * x
// };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(4));

const fullName = 'Steve Downing';

const firstName = (fullName) => {
    return fullName.split(' ')[0];
}

console.log(firstName(fullName));

const firstNameArrow = (fullName) => fullName.split(' ')[0];

console.log(firstNameArrow(fullName));