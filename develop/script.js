// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function generate() {
  let complexity = document.getElementById("password").value;

  //possible values
  let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+"

  let password = "";

  //create for loop to choose pw characters
  for(var i = 0; i<= complexity; i++) {
      password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

  //add password to textbox
  document.getElementById("password").value = password;

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);