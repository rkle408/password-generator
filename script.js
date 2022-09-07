// Need lists of character types
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// To make sure I have all the letters = 26:
// console.log(lowerCase.length);

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// To make sure I have all the letters again = 26:
// console.log(upperCase.length);

var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ];

var specialCharacters = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", ']', "^", '_', "`", "{", "|", "}", "~" ]
// Had to add extra backslash as it affecting everything after; should be 33 characters:
// console.log(specialCharacters.length);

var userCombos = [];

// Recognize that "generatePassword();" is a function that is undefined but this is your password, so need to define it:
function generatePassword() {
  //Test that button is working: 
  //console.log("Yay! You did it!");
  let password = "";
  
  for(var i = 0; i < passwordLength; i++) {
    var secureArray = Math.floor(Math.random() * userCombos.length);
    password = password + userCombos[secureArray];
  }
  console.log(password.length);
  return password;
}

// Need prompts to decide what password will be made of, following set conditions:
function passwordPrompts(){
  var passwordText = document.querySelector("#password");
  //console.log("Prompts actually go here.")

  // Need to clear array every time "Generate" button is clicked!!!:
  userCombos = [];
  passwordText.value = ""; // Add this to reset the password text when a new password is generated, especially if the second time, there are no character types selected

  passwordLength = parseInt(prompt("How long do you want your password to be? (Please choose a number from 8-128.)"));

  // Need to make sure password is within our parameters, otherwise password will not generate:
  if(passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Length must be a number between 8 and 128.")
    return false;
  }

  // Need to know if user wants different types of characters (lowercase, uppercase, special) in their password, and if so, now need an array that combines their answers
  if(confirm("Do you want to use lowercase letters?")) {
    // Need a new array to be generated for possible combinations of characters for password, will make new var to house this new array: userCombos
    userCombos = userCombos.concat(lowerCase);
    console.log(userCombos);
  }

  if(confirm("Do you want to use UPPERCASE letters?")) {
    userCombos = userCombos.concat(upperCase);
    console.log(userCombos);
  }
  
  if(confirm("Do you want to use numbers?")) {
    userCombos = userCombos.concat(numeric);
    console.log(userCombos);
  }

  if(confirm("Do you want to use special characters? (i.e., !, @, #)")) {
    userCombos = userCombos.concat(specialCharacters);
    console.log(userCombos);
  } 
// Needed to add if there are no character types selected, then user must be alerted of this.
  else if (userCombos == 0) {
    alert("Please select character types to generate a password!");
  }
  return true;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var appropriateAnwers = passwordPrompts();
  var passwordText = document.querySelector("#password");

  if(appropriateAnwers && userCombos != 0) {
    var password = generatePassword();
    passwordText.value = password;
  }
}

function myFunction() {
    var copyText = document.getElementById("password");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the password: " + copyText.value);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);