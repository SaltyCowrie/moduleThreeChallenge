// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  event.preventDefault()
  var password = generatePassword(hasUpper, hasLower, hasNumbers);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function() {
  return writePassword();
});
