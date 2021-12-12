// Assignment code here


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


/*var passwordCriteria = function(){
  var promptLength = prompt("How many characters would you like in your password?");
    if (promptLength < 8 || promptLength > 128 || !promptLength){
      alert("Password Length must be between 8 and 128 characters. Please try again.");
      passwordCriteria ();
    }
    else {
      return promptLength;
    }
  var confirmLowerCase = confirm("Would you like lowercase characters?")
}*/


var arrayFromLowToHigh = function(low,high){
  var array = []
  for (var i=low; i <= high; i++) {
    array.push(i)
  }
  return array
}

var lowerCaseOptions = arrayFromLowToHigh(97,122);
console.log(lowerCaseOptions);
var upperCaseOptions = arrayFromLowToHigh(65,90);
console.log(upperCaseOptions);
var numberOptions = arrayFromLowToHigh(48,57);
console.log(numberOptions);
var specialCharacterOptions = arrayFromLowToHigh(33,47).concat(arrayFromLowToHigh(58,64)).concat(arrayFromLowToHigh(91,96)).concat(arrayFromLowToHigh(123,126));
console.log(specialCharacterOptions);
