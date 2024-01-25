// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var num = [1,2,3,4,5,6,7,8,9];
  var hasUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var hasLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var hasSpecial = ["$","*","&","%","@"];
  var userChoice = ();
  var password = generatePassword( function() {

    let num = prompt("are numbers ok to use?")
    if { 

    } else { 

    };
    let hasUpper = prompt("are uppercase letters ok?")
    if {

     } else { 

     };
    let hasLower = prompt("are lower case letters ok?")
    if { 

    } else { 

    };
    let hasSpecial = prompt("are special characters ok?")
    if {

     } else {

      };
  });

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", function() {
  writePassword();
});
