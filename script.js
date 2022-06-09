// Connect to HTML
document.getElementById ("generate").addEventListener('click', writePassword);

// Variable Arrays
var length = [""]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var special = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ",", ".", "<", ">", "/", "?", ";", ":", "=", "+", "-", "\ ", "'"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declerations
var userChoiceLength ="";
var userChoiceNumbers;
var userChoiceSpecial;
var userChoiceLower;
var userChoiceUpper;

// Console Log to Confirm User Choice
console.log ("Password Length: " + userChoiceLength);
console.log ("Number Choice: " + userChoiceNumbers);
console.log ("Special Characters Choice: " + userChoiceSpecial);
console.log ("Lower Case Letters Choice: " + userChoiceSpecial);
console.log ("Upper Case Letters Choice: " + userChoiceSpecial);
console.log ("Perameter Options by User Choice: " + allCharacters);
console.log ("User Password: " + userPassword)

// Begin Password Functions

function generatePassword() {
        userChoiceLength = (prompt ("How long do you want your password? Choose between 8 and 128."))
if (userChoiceLength < 8 || userChoiceLength > 128) { 
    alert ("Password must be between 8 and 128 characters")
    return;
}

if (userChoiceLength >=8 && userChoiceLength <= 128) { 
    userChoiceNumbers = window.confirm ("Click OK to use numbers");
    userChoiceSpecial = window.confirm ("Click OK to use special characters");
    userChoiceLower = window.confirm ("Click OK to use lower case letters");
    userChoiceUpper = window.confirm ("Click OK to use upper case letters");

if (userChoiceNumbers == false && userChoiceSpecial == false && userChoiceLower == false && userChoiceUpper == false) {
    alert ("You must choose at least one perameter")
    return;
}
}

// Concat Array
var allCharacters =[];

if (userChoiceNumbers) {
    allCharacters = allCharacters.concat(userChoiceNumbers)
}

if (userChoiceSpecial) {
    allCharacters = allCharacters.concat(userChoiceSpecial)
}

if (userChoiceLower) {
    allCharacters = allCharacters.concat(userChoiceLower)
}

if (userChoiceUpper) {
    allCharacters = allCharacters.concat(userChoiceUpper)
}

var userPassword = ""

for (var i = 0; i < userChoiceLength; i++) {
    userPassword = userPassword + allCharacters [Math.floor(Math.random() * allCharacters.length)];
}

return userPassword;

} 


// Define Goal
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}
