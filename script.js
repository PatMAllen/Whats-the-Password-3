var characterLength = 8;
var choiceArr = [];

var lowerCaseArr = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var numbersArr = [ '1','2','3','4','5','6','7','8','9','0'];

var specialCharactersArr = ['!','@','#','$','%','^','&','.',','];



// Assignment code here
var generateBtn = document.querySelector("#generate");


generateBtn.addEventListener('click', writePassword);


// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompt();   
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
     var newPassword = generatePassword();
     passwordText.value = newPassword;
  } else {
     passwordTest.value = "";
  }

}


function generatePassword() {
     console.log('You Shall Pass !!!');
     var password = "";
     for(var i = 0; i < characterLength; i++) {
         var randomLetter = Math.floor(Math.random() * choiceArr.length);
     
         password = password + choiceArr[randomLetter];
     }
/*Display password*/
     return password
}



function getPrompt(){
     choiceArr = [];
     characterLength = parseInt(prompt("How long do you wish to have your password ? (8 - 128 char "));

     if(isNaN(characterLength)|| characterLength < 8 || characterLength > 128) {
       alert( "Character must be a length betweeen 8 - 128. DO IT AGAIN!!!)");
       return false;
     }

   if (confirm("You must have lowercase letters in your password!")) {
     choiceArr = choiceArr.concat(lowerCaseArr);
    }
    if (confirm("You must have uppercase letters in your password!")) {
     choiceArr = choiceArr.concat(upperCaseArr);
    }
    if (confirm("You must have special characters in your password!")) {
     choiceArr = choiceArr.concat(specialCharactersArr);
    }
    if (confirm("You must have numbers in your password!")) {
     choiceArr = choiceArr.concat(numbersArr);
    }
    return true;

}

     



