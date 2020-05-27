let name = 'Max';
let age = 29;
let hasHobbies = true;


const summarizeUser = (userName, userAge, userHasHobby) => {   // arrow function 
    return(
        'Name is '+ userName +', user age is ' + userAge +
        ' and the user has hobbies: ' + userHasHobby);
};

const addRandom = () => 2+1;

console.log(addRandom());
//console.log(summarizeUser(name, age, hasHobbies));

