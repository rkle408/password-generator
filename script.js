// Need lists of character types
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// To make sure I have all the letters = 26:
// console.log(lowerCase.length);

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// To make sure I have all the letters again = 26:
// console.log(upperCase.length);

var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ]

var specialCharacters = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", ']', "^", '_', "`", "{", "|", "}", "~" ]
// Had to add extra backslash as it affecting everything after; should be 33 characters:
// console.log(specialCharacters.length);

// Recognize that "generatePassword();" is a function that is undefined but this is your password, so need to define it:
function generatePassword() {
  //Test that button is working: 
  //console.log("Yay! You did it!");
  //If you press this button, then the prompts should appear, therefore prompt function needs to go here.
  var choice = passwordPrompts();
}

// Need prompts to decide what password will be made of, following set conditions:
function passwordPrompts(){
  console.log("Prompts actually go here.")
  passwordLength = parseInt(prompt("How long do you want your password to be? (Please choose a number from 8-128.)"));

  if(passwordLength <8 || passwordLength > 128) {
    alert("Length must be between 8 and 128.")
    return false;
  }
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
