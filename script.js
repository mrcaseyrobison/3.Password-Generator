// Connect to HTML
document.getElementById ("generate").addEventListener('click', writePassword);

// Variable Arrays
var length = [""]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var special = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ",", ".", "<", ">", "/", "?", ";", ":", "=", "+", "-", "\ ", "'"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// // User Confirmed Variables
var userChoiceLength ="";
var userChoiceNumbers;
var userChoiceSpecial;
var userChoiceLower;
var userChoiceUpper;

// Begin Password Functions
function generatePassword() {
        userChoiceLength = (prompt ("How long do you want your password? Choose a number between 8 and 128."))

// Conditional to Force User Choice
if (userChoiceLength < 8 || userChoiceLength > 128) { 
    alert ("Password must be between 8 and 128 characters")
    return;
}

console.log ("User Password Length: " + userChoiceLength);

// Prompts
if (userChoiceLength >=8 && userChoiceLength <= 128) { 

    userChoiceNumbers = window.confirm ("Click OK to use numbers");
    console.log ("User Number Choice: " + userChoiceNumbers);

    userChoiceSpecial = window.confirm ("Click OK to use special characters");
    console.log ("User Special Characters Choice: " + userChoiceSpecial);

    userChoiceLower = window.confirm ("Click OK to use lower case letters");
    console.log ("Lower Case Letters Choice: " + userChoiceLower);

    userChoiceUpper = window.confirm ("Click OK to use upper case letters");
    console.log ("Upper Case Letters Choice: " + userChoiceUpper);
}

// Conditional to Force User to Choose at Least One Perameter
if (userChoiceNumbers == false && userChoiceSpecial == false && userChoiceLower == false && userChoiceUpper == false) {
    alert ("You must choose at least one perameter")
    return;
}

// Concat Array
var allCharacters = []

if (userChoiceLength) {
    allCharacters = allCharacters.concat(length)
}

if (userChoiceNumbers) {
    allCharacters = allCharacters.concat(numbers)
}

if (userChoiceSpecial) {
    allCharacters = allCharacters.concat(special)
}

if (userChoiceLower) {
    allCharacters = allCharacters.concat(lower)
}

if (userChoiceUpper) {
    allCharacters = allCharacters.concat(upper)
}

console.log ("Perameter Options by User Choice: " + allCharacters);

// Password Variable
var userPassword = ""

// For Loop to Randomize Final User Choices
for (var i = 0; i < userChoiceLength; i++) {
    userPassword = userPassword + allCharacters [Math.floor(Math.random() * allCharacters.length)];

    // console.log below, if run, shows process of randomization (commented out)
    // console.log (userPassword)
}

console.log ("User password is: " + userPassword)

// Ends Code Run (Without This Password is: "Undefined")
return userPassword;

} 

//Console Logs to Verify Character Arrays
console.log ("Numbers: " + numbers);
console.log ("Special Characters: " + special);
console.log ("Lower Case Letters: " + lower);
console.log ("Upper Case Letters: " + upper);

// Write Password Function
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}
