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
      alert("Password Length must be a number between 8 and 128 characters. Please try again.");
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
var passwordOptions = function (options){
  var compiledOptions = [];
  if (options.lowercase){
    compiledOptions = compiledOptions.concat(lowerCaseOptions);
  }
  if(options.uppercase){
    compiledOptions = compiledOptions.concat(upperCaseOptions);
  }
  if (options.numbers){
    compiledOptions = compiledOptions.concat(numberOptions);
  }
  if (options.special){
    compiledOptions = compiledOptions.concat(specialOptions);
  }
  return compiledOptions;
};

//To generate password
var generatePassword = function (){
  var pswdObject = passwordCriteria ();
  var options = passwordOptions (pswdObject);
  var password = [];
  for (var i=0; i< pswdObject.length; i++) {
    var character= options[Math.floor(Math.random() * options.length)];
    password.push(String.fromCharCode(character));
  }
  console.log(options);
  console.log(password);
};
// Write password to the #password input
var writePassword = function() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//writePassword();



/*function(){
  var pswdObject = passwordCriteria ()
  console.dir(pswdObject);
  console.log(pswdObject.lowercase);
  console.log(pswdObject.numbers);
});*/

