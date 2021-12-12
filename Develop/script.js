
var passwordCriteria = function(){
  debugger;
  var promptLength = prompt("How many characters would you like in your password?");
  promptLength= parseInt(promptLength);
    if (promptLength < 8 || promptLength > 128 || !promptLength){
      alert("Password Length must be between 8 and 128 characters. Please try again.");
      passwordCriteria();
    }
    else{
      return promptLength;
    }
};

passwordCriteria()

console.log(promptLength);

