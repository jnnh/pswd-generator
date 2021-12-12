// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Function to Generate Arrays using ASCII Character Table
var arrayFromLowToHigh = function(low,high){
  var array = []
  for (var i=low; i <= high; i++) {
    array.push(i);
  }
  return array;
};
var pswdObject = {};


// Arrays of ASCII Characters
var lowerCaseOptions = arrayFromLowToHigh(97,122);
var upperCaseOptions = arrayFromLowToHigh(65,90);
var numberOptions = arrayFromLowToHigh(48,57);
var specialOptions = arrayFromLowToHigh(33,47).concat(arrayFromLowToHigh(58,64)).concat(arrayFromLowToHigh(91,96)).concat(arrayFromLowToHigh(123,126));

//confirm password criteria
var passwordCriteria = function(){
  var promptLength = prompt("How many characters would you like in your password?");
  var promptLength= parseInt(promptLength);
    if (promptLength < 8 || promptLength > 128 || !promptLength){
      alert("Password Length must be between 8 and 128 characters. Please try again.");
      passwordCriteria();
    }
  var confirmLowerCase = confirm("Would you like to include lower case characters?");
  var confirmUpperCase = confirm("Would you like to include upper case characters?");
  var confirmNumbers = confirm("Would you like to include numbers?");
  var confirmSpecial = confirm("Would you like to include special characters?");
  var pswdObject = {
    length: promptLength,
    lowercase: confirmLowerCase,
    uppercase: confirmUpperCase,
    numbers: confirmNumbers,
    special: confirmSpecial
  }
  if (!confirmLowerCase && !confirmUpperCase && !confirmNumbers && !confirmSpecial){
    alert("you need to choose at least one character type.");
    passwordCriteria();
  }
  return pswdObject;
};

//Create a Concated Array for Password based on Password Criteria
var passwordOptions = function (){
  var compiledOptions = [];
  if (confirmLowerCase){
    compiledOptions = compiledOptions.concat(lowerCaseOptions);
  }
  if(confirmUpperCase){
    compiledOptions = compiledOptions.concat(upperCaseOptions);
  }
  if (confirmNumbers){
    compiledOptions = compiledOptions.concat(numberOptions);
  }
  if (specialOptions){
    compiledOptions = compiledOptions.concat(specialOptions);
  }
  return compiledOptions;
};

//Add event listener to generate button
generateBtn.addEventListener("click", passwordCriteria);

console.log(pswdObject);
console.log(pswdObject.lowercase);
console.log(pswdObject.numbers);