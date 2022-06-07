//NOTES:

// In Class -- What sort of data does my application need to work? 
// Storing all needed characters in variables (see: Array)

// Numbers
// Special Characters
// Lower Case
// Upper Case


// What sorts of tasks does my code need to complete?

// 1. Generate a password (DECLARE A FUNCTION)
function generatePassword() {

  // Prompt the user for their password length and store it in a variable
  // Validate password legnth and make sure it's a number equal to 8 and 128
  // Prompt the user for the use of special characters and store the true or false and store it in a variable
  // 

}








// Cancel = False / Okay = True (Boolean variables) -- Four Booleans

// 1 letter at a time -- built through string (one at a time)

// --------------- //

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
