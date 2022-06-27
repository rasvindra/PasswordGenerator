var generateBtn = document.querySelector("#generate");
var aphaChar =["a", "b", "c", "d", "e", "fghijklmnopqrstuvwxyz"]
var numberchar =[]
var specialChar = []

function parameters() {
    var alpha = prompt(
      "Would you like to include letters? Please enter Y for yes or N or no."
    );
    if (alpha !== "Y" && alpha !== "N") alert("Not a valid choice!");
    else
      var numeric = prompt(
        "Would you like to include numbers? Please enter Y for yes or N or no."
      );
    if (numeric !== "Y" && numeric !== "N") alert("Not a valid choice!");
    else
      var special = prompt(
        "Would you like to include special characters? Please enter Y for yes or N or no."
      );
    if (special !== "Y" && special !== "N") alert("Not a valid choice!");
    else
      var numofchar = prompt(
        "How many charaters long would you like your password to be? Please enter a value no less than 8 and no more than 128"
      );
    if (numofchar < 8 || numofchar > 128) {
      alert("Not a valid choice!");
      return;
    }

    //ADD if statement to check to make sure user doesn't choose "N" to all character types


    var allUserChoices = [];
    if(special ==="Y"){
        allUserChoices = allUserChoices.concat(specialChar)
    }
    if(numeric ==="Y"){
        allUserChoices = allUserChoices.concat(numberchar)
    }
    if(special ==="Y"){
        allUserChoices = allUserChoices.concat(aphaChar)
    }

    var results = [];
    //loop through the allUserChpices array numofChar times to get a password
        // and push result to results

    return results.join('');

}



function writePassword() {
    var password = parameters();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
}
  
  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  