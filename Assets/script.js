var generateBtn = document.querySelector("#generate");



// Creates user input
function generatePassword() {


  // Setting user input
  var userChoice = (hasLower, hasNumbers, hasSpecial, hasUpper);

  // Sets of used variable information
  var hasNumbers = [0,1,2,3,4,5,6,7,8];
  var hasUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var hasLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var hasSpecial = ["$","*","&","%","@"];


  // Confirming given criteria for pass word
  var numbers = confirm("Are numbers okay?")
  if (numbers) {userChoice += hasNumbers;} else {return "Please add numbers"}

  var upper = confirm("Are uppercase characters okay?")
  if (upper) {userChoice += hasUpper;} else {return "Please add uppercase"}

  var lower = confirm("Are lowercase characters okay?")
  if (lower) {userChoice += hasLower;} else {return "Please add lowercase"}

  var special = confirm("Are special characters okay?")
  if (special) {userChoice += hasSpecial;} else {return "Please add special"}

  // TODO: Randomize function
  Math.random()

};


// Runs button to input text
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Event listener
generateBtn.addEventListener("click", writePassword);













