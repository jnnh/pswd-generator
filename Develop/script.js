//global variables for password criteria
var promptLength
var confirmLowerCase 
var confirmUpperCase 
var confirmNumbers 
var confirmSpecial 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//confirm password criteria
var passwordCriteria = function(){
  promptLength = prompt("How many characters would you like in your password?");
  promptLength= parseInt(promptLength);
    if (promptLength < 8 || promptLength > 128 || !promptLength){
      alert("Password Length must be between 8 and 128 characters. Please try again.");
      passwordCriteria();
    }
    else{
      return promptLength;
    }
  confirmLowerCase = confirm("Would you like to include lower case characters?");
    if (confirmLowerCase){
      return confirmLowerCase;
    }
  confirmUpperCase = confirm("Would you like to include upper case characters?");
    if (confirmUpperCase){
      return confirmUpperCase;
    }
  confirmNumbers = confirm("Would you like to include numbers?");
    if (confirmNumbers){
      return confirmNumbers;
    }
  confirmSpecial = confirm("Would you like to include special characters?");
    if (confirmSpecial){
      return confirmSpecial;
    }
};

// Function to Generate Arrays using ASCII Character Table
var arrayFromLowToHigh = function(low,high){
  var array = []
  for (var i=low; i <= high; i++) {
    array.push(i);
  }
  return array;
};

// Variable Arrays
var lowerCaseOptions = arrayFromLowToHigh(97,122);
var upperCaseOptions = arrayFromLowToHigh(65,90);
var numberOptions = arrayFromLowToHigh(48,57);
var specialOptions = arrayFromLowToHigh(33,47).concat(arrayFromLowToHigh(58,64)).concat(arrayFromLowToHigh(91,96)).concat(arrayFromLowToHigh(123,126));
console.log(lowerCaseOptions);
console.log(upperCaseOptions);
console.log(numberOptions);
console.log(specialOptions);

//Create a Concated Array for Password based on Password Criteria
var passwordArray = function (){
  var characterOptions = [];
  characterOptions.Length = promptLength;
  if (confirmLowerCase){
    characterOptions = characterOptions.concat(lowerCaseOptions);
  }
  if(confirmUpperCase){
    characterOptions = characterOptions.concat(upperCaseOptions);
  }
  if (confirmNumbers){
    characterOptions = characterOptions.concat(numberOptions);
  }
  if (specialOptions){
    characterOptions = characterOptions.concat(specialOptions);
  }
  if (characterOptions = []){
    alert("You need to select at least one option between lowercase, uppercase, numbers, and special characters. Try again.");
    passwordCriteria();
  }
  console.log(passwordArray);
  console.log(characterOptions);
  return characterOptions;
};
// generate password
var generatePassword = function(){
  passwordCriteria();
  passwordArray();
  var password = [];
  for (var i=0; i<characterOptions.Length; i++) {
    var character= characterOptions[Math.floor(Math.random * characterOptions.Length)];
    password.push(String.fromCharCode(character))
  }
};

generatePassword();
console.log(generatePassword);

