// Assignment Code
let generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//the special characters that can be generated into the password
let specialCharacters = ['+','#','?','!','%','*','^','&','@','~','.','/'];
//upper case alphabets
let upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
//lower case alphabets
let lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//numbers 1-9
let numericCharacters = ['0','1','2','3','4','5','6','7','8','9']; 
//possible arrays users may want generated into their password
let possibleCharacters = [];
//used to hold a generated password
let generatedPassword = [];
//this is used to hold the running count included in the password
let count = 0;


//functions for calling to begin getting a password generated
function generatePassword() {
  let length = parseInt( 
    prompt('How many characters would you like your password to be?')); 
  if (isNaN (length) === true ) {
    alert('Password must be a number');
    return ('length entered is not a number - Password not generated');
  }  
//if statements to add conditions for the password
//password must be 8 characters to meet criteria
if (length < 8){
  alert('Password must be min of 8 characters')
  return ('Length entered less than 8 - Password not generated');
}
//password must be less than 129 characters
if (length > 129) {
  alert('Password must be less than 128 characters')
  return ('Length entered more than 128 characters - Password not generated');
}

//confirmation prompts for user to confirm before proceeding to meet the criterias
let hasLowerCasedCharacters = confirm (
  'press ok to confirm adding lower case characters '
);
let hasNumericCharacters = confirm (
  'press ok to confirm adding numeric characters'
);
let hasUpperCasedCharacters = confirm (
  'press ok to confirm adding upper cased characters'
);
let hasSpecialCharacters = confirm(
  'press ok to confirm adding special characters'
);

//select character types - at least one has to be selected to move forward into generating a password
if (hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false &&
    hasNumericCharacters === false &&
    hasSpecialCharacters === false ){
      alert ('must select one character type');
      return ('choice entered must include one character type - Password not generated');
    }
 
 //generate random password with the chosen character types by user
if (hasLowerCasedCharacters === true){
  possibleCharacters = possibleCharacters.concat (lowerCasedCharacters);
  generatedPassword.push(lowerCasedCharacters[(Math.floor(Math.random()*lowerCasedCharacters.length))]);
  count++;
} 

if (hasUpperCasedCharacters === true){
  possibleCharacters = possibleCharacters.concat (UpperCasedCharacters);
  generatedPassword.push(UpperCasedCharacters[(Math.floor(Math.random()*UpperCasedCharacters.length))]);
  count++;
} 
if (hasNumericCharacters === true){
  possibleCharacters = possibleCharacters.concat (numericCharacters);
  generatedPassword.push(numericCharacters[(Math.floor(Math.random()*numericCharacters.length))]);
  count++;
} 
if (hasSpecialCharacters === true){
  possibleCharacters = possibleCharacters.concat (specialCharacters);
  generatedPassword.push(specialCharacters[(Math.floor(Math.random()*specialCharacters.length))]);
  count++;
} 

//loops for procuring a password with the chosen selections in the number selected by the user
for(let i = count; i < length; i++){
generatedPassword.push(possibleCharacters[(Math.floor(Math.random()*possibleCharacters.length))]);
}

//generate the final password for user
return (generatedPassword.join(''));
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}