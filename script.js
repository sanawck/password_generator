// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//special characters that can be generated into the password
let specialCharacters = ['+','#','?','!','%','*','^','&','@','~','.','/'];
//upper case alphabets
let upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
//lower case alphabets
let lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//numbers
let numericCharacters = ['0','1','2','3','4','5','6','7','8','9']; 

//functions for calling to get a password generated
function generatePassword() {
  let length = 8 ( // confused about this section?
    promt('How many characters would you like your password to be?')
  );
//password must be 8 characters
if (length < 8){
  alert('Password must be min of 8 characters')
}
//password must be less than 129 characters
if (length > 129) {
  alert('Password must be less than 128 characters')

}
}
//confirmation prompts for user to confirm 
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
