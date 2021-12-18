// Assignment code here



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
  console.table(passwordCharacterTypes);
}
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

  //generate a password using selected criteria
  //display as an alert or written to page



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
