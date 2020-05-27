let name = 'Max';
let age = 29;
let hasHobbies = true;


function summarizeUser(userName, userAge, userHasHobby){
    return(
        'Name is '+ userName +', user age is ' + userAge +
        ' and the user has hobbies: ' + userHasHobby);
}
console.log(summarizeUser(name, age, hasHobbies));

