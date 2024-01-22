// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var num = (1,2);
  var hasUpper = ("A", "Z");
  var lower = ("a","z");
  var special = ("$","*");
  var password = generatePassword(
  );

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", function() {
  writePassword()
  return;
});
