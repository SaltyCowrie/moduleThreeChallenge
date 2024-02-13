var generateBtn = document.querySelector("#generate");

// variables
var passwordLength = 8;
var includeUpper = true;
var includeLower = true;
var includeSpecial = true;
var includeNumbers = true;

// Write password to the #password input
function writePassword() {

  var hasNumbers = [0,1,2,3,4,5,6,7,8];
  var hasUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var hasLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var hasSpecial = ["$","*","&","%","@"];

  var password = generatePassword(hasLower, hasNumbers, hasSpecial, hasUpper);
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
};



// Add event listener to generate button
generateBtn.addEventListener("click", function() {
  writePassword();
  return;
});
