// Assignment code here


var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var specialCharacter = ["!", "#", "$", "%", "&", "'", "(",")", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "{", "}", "|", "~"]



//main function, runs when button is pressed
function generatePassword() {
  //prompt for password criteria
  //prompt for length 8-128 characters
  var passwordlength = window.prompt("Pick a password length from 8 to 128 characters in length.");
  if (passwordlength < 8 || passwordlength > 128) {
    window.alert("You need to pick a valid length, please try again.");
    return generatePassword();
  }
  var passwordCharacterTypes = passwordCharacters();
  //console.table(passwordCharacterTypes);

  //make an array to capture variables picked
  //insert a for loop here
  //run for passwordlength number of times
  //grab variables from however many trues are returned on passwordCharacters, randomly
  //array.push to add to end of an array
  //after for loop ends, convert array into a string - arrayname.join()  see line 38
  //array.join will turn above array characters into a string, empty quotes for no spaces between integers
  //use return as last thing to return result of array.join to writepassword function as the string 'password'
}

var testIndex = getRandomIntInclusive(0, lowerCaseArray.length-1);
var test = lowerCaseArray[testIndex]
console.log(test, testIndex);

console.log(lowerCaseArray.join(""))




function passwordCharacters() {
  //character types to use, yes/ no || true/ false
  //lower case
  var lowerCase = window.confirm("Would you like lower case letters in your password? 'OK' for yes, 'Cancel' for no.");
  //upper case
  var upperCase = window.confirm("Would you like upper case letters in your password? 'OK' for yes, 'Cancel' for no.");
  //numeric
  var numeric = window.confirm("Would you like numbers in your password? 'OK' for yes, 'Cancel' for no.");
  //special characters
  var specialCharacter = window.confirm("Would you like special characters in your password? 'OK' for yes, 'Cancel' for no.");
  //validate at least one choice was picked
  if (lowerCase === false && upperCase === false && numeric === false && specialCharacter === false) {
    window.alert("You need to pick at least one character type, please try again.");
    return passwordCharacters();
  }
  return {
    lowerCase,
    upperCase,
    numeric,
    specialCharacter,
  }
}





//I dont know if this is helpful
//random integer between 2 values, inclusive
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
  //the maximum is inclusive and the minimum is inclusive
}


  //generate a password using selected criteria



  //display as an alert or written to page<<<write it to the page
  

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
