var generateBtn = document.querySelector("#generate");



// Creates user input
function generatePassword() {

  var hasNumbers = [0,1,2,3,4,5,6,7,8];
  var hasUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var hasLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var hasSpecial = ["$","*","&","%","@"];
  var hasLength = [5];
  
  var length = confirm("Is 5 characters okay?")
  if (length === false) {
    return "Goodbye";
  }

  var numbers = confirm("Are numbers okay?")
  if (numbers === false) {
    return "Goodbye";
  }

  var upper = confirm("Are uppercase characters okay?")
  if (upper === false) {
    return "Goodbye";
  }

  var lower = confirm("Are lowercase characters okay?")
  if (lower === false) {
    return "Goodbye";
  }
  
  var special = confirm("Are special characters okay?")
  if (special === false) {
    return "Goodbye";
  }

};


// Runs button to input text
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Event listener
generateBtn.addEventListener("click", writePassword);













