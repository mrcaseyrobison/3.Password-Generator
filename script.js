// Connect to HTML
document.getElementById ("generate").addEventListener('click', writePassword);

// Variable Arrays
var length = [""]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var special = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ",", ".", "<", ">", "/", "?", ";", ":", "=", "+", "-", "\ ", "'"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// // Variable Declerations
var confirmLength ="";
var confirmNumbers;
var confirmSpecial;
var confirmLower;
var confirmUpper;

// Begin Password Functions

function generatePassword() {
        confirmLength = (prompt ("How long do you want your password? Choose a number between 8 and 128."))

if (confirmLength < 8 || confirmLength > 128) { 
    alert ("Password must be between 8 and 128 characters")
    return;
}

if (confirmLength >=8 && confirmLength <= 128) { 
    confirmNumbers = window.confirm ("Click OK to use numbers");
    confirmSpecial = window.confirm ("Click OK to use special characters");
    confirmLower = window.confirm ("Click OK to use lower case letters");
    confirmUpper = window.confirm ("Click OK to use upper case letters");
}

if (confirmNumbers == false && special == false && lower == false && upper == false) {
    alert ("You must choose at least one perameter")
    return;
}

// Concat Array
var allCharacters = []

if (confirmLength) {
    allCharacters = allCharacters.concat(length)
}

if (confirmNumbers) {
    allCharacters = allCharacters.concat(numbers)
}

if (confirmSpecial) {
    allCharacters = allCharacters.concat(special)
}

if (confirmLower) {
    allCharacters = allCharacters.concat(lower)
}

if (confirmUpper) {
    allCharacters = allCharacters.concat(upper)
}

console.log ("Perameter Options by User Choice: " + allCharacters);

var userPassword = ""

for (var i = 0; i < confirmLength; i++) {
    userPassword = userPassword + allCharacters [Math.floor(Math.random() * allCharacters.length)];
console.log (userPassword)
}
return userPassword;

} 

//Console Log to Confirm User Choice

console.log ("Numbers: " + numbers);
console.log ("Special Characters: " + special);
console.log ("Lower Case Letters: " + lower);
console.log ("Upper Case Letters: " + upper);
console.log ("User Password Length: " + confirmLength);
console.log ("User Number Choice: " + confirmNumbers);
console.log ("User Special Characters Choice: " + confirmSpecial);
console.log ("Lower Case Letters Choice: " + confirmLower);
console.log ("Upper Case Letters Choice: " + confirmUpper);

// console.log ("User Password: " + userPassword)

// Define Goal
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}
