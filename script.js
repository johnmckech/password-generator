// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//var charType = window.prompt("Would you like to include upper case?");
var finalPassWord = "";
// Write password to the #password input
function generate() {

  let complexity = prompt("How many characters would you like your password to be? Enter a value between 8 and 128.")
  console.log("length selected", complexity);


  if (complexity < 8 || complexity > 128) {
    alert("invalid password size")
    generate(6)
  } else {
    var getUppercase = confirm("Would you like to use uppercase?");
    var getLowercase = confirm("would you like lower case?");
    var getNumber = confirm("Would you like to use numbers?");
    var getChar = confirm("Would you like to use special characters?");
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
    var number = "1234567890".split("");
    var characters = "!@#$%^&*()_+".split("");

    var userChoices = []
    if (getUppercase) {
      finalPassWord = finalPassWord + upperCase[Math.floor(Math.random() * upperCase.length)]
      userChoices= userChoices.concat(upperCase)
    }
    if (getLowercase) {
      finalPassWord = finalPassWord + lowercase[Math.floor(Math.random() * lowercase.length)]
      userChoices= userChoices.concat(lowercase)
    }
    if (getNumber) {
      finalPassWord = finalPassWord + number[Math.floor(Math.random() * number.length)]
      userChoices= userChoices.concat(number)
    }
    if (getChar) {
      finalPassWord = finalPassWord + characters[Math.floor(Math.random() * characters.length)]
      userChoices= userChoices.concat(characters)
    }
  while (finalPassWord.length <complexity) {
    finalPassWord+=userChoices[Math.floor(Math.random()*userChoices.length)]
  }
  console.log(userChoices);
  document.getElementById("password").value=finalPassWord 
}
} 




//   //possible values
//   let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+"

//   let password = "";

//   //create for loop to choose pw characters
//  // for (var i = 0; i <= complexity; i++) {
//     password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
//   }

//   //add password to textbox
//   document.getElementById("password").value = password;

//  // passwordText.value = password;

// }

// // Add event listener to generate button
// //generateBtn.addEventListener("click", writePassword);

// //live server 
