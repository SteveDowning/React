var nameVar = 'Steve';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('namelet', nameLet);

const nameConst = 'Frank';

console.log('nameConst', nameConst);

function getPetName(){
    let petName = 'Gary';
    return petName;
}

console.log(getPetName())

var fullName = 'Steve Downing';
let firstName;

if (fullName){
firstName = fullName.split(' ')[0];
console.log(firstName);
}

console.log(firstName);