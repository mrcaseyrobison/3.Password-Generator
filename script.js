// Connect to HTML
document.getElementById ("generate").addEventListener('click', writePassword);

// Variable Arrays
var length = [""]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var special = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ",", ".", "<", ">", "/", "?", ";", ":", "=", "+", "-", "\ ", "'"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Concat Array
var allCharacters =[];

// Variable Declerations
var userChoiceLength ="";
var userChoiceNumbers;
var userChoiceSpecial;
var userChoiceLower;
var userChoiceUpper;

//////////////

function generatePassword() {
        var userChoiceLength = (prompt ("How long do you want your password? Choose between 8 and 128."))
if (userChoiceLength >= 8 || userChoiceLength <=128) { 
    alert ("Password must be between 8 and 128 characters")
    return;
}
}
// if (userChoiceLength )
//     var userChoiceNumbers = confirm ("Click OK to use numbers")
//     var userChoiceSpecial = confirm ("Click OK to use special characters")
//     var userChoiceLower = confirm ("Click OK to use lower case letters")
//     var userChoiceUpper = confirm ("Click OK to use upper case letters")
    

// Define Goal
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

