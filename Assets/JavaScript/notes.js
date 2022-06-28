var generateBtn = document.querySelector("#generate");
var alphalwrChar =["a", "b", "c", "d", "e", "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var alphauprChar=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numberChar =["0","1","2","3","4","5","6","7","8","9"]
var specialChar =["just","fucking","work"]

//["~","`","!","@","#","$","%","^","&","*","(",")","_","+","-","=","{","}","[","]",":",";","'","<",">","?",".","/","|","\",","]

/* How do i add dbl quotation to the specialChar array */

function parameters() {
    var alphalwrChar = prompt(
      "Would you like to include lower case letters? Please enter Y for yes or N or no."
    );
    if (alphalwrChar !== "Y" && alphalwrChar !== "N") alert("Not a valid choice!");
    else
    var alphauprChar = prompt(
      "Would you like to include upper case letters? Please enter Y for yes or N or no."
    );
    if (alphauprChar !== "Y" && alphauprChar !== "N") alert("Not a valid choice!");
    else
      var numberChar = prompt(
        "Would you like to include numbers? Please enter Y for yes or N or no."
      );
    if (numberChar !== "Y" && numberChar !== "N") alert("Not a valid choice!");
    else
      var specialChar = prompt(
        "Would you like to include special characters? Please enter Y for yes or N or no."
      );
    if (specialChar !== "Y" && specialChar !== "N") alert("Not a valid choice!");
    else
      var numofChar = prompt(
        "How many charaters long would you like your password to be? Please enter a value no less than 8 and no more than 128"
      );
    if (numofChar < 8 || numofChar > 128) {
      alert("Not a valid choice! Please retry.");
      return}
    }
    //ADD if statement to check to make sure user doesn't choose "N" to all character types
    if (alphalwrChar === "N" && alphalwrChar === "N" && specialChar === "N" && numberChar === "N") alert("No character selected for Password")
  // reset the password generator
    


    var allUserChoices = [];
    if(specialChar ==="Y"){
        allUserChoices = allUserChoices.concat(specialChar)
    }
    if(numberChar ==="Y"){
        allUserChoices = allUserChoices.concat(numberChar)
    }
    if(alphalwrChar ==="Y"){
        allUserChoices = allUserChoices.concat(alphalwrChar)
    }
    if(alphauprChar ==="Y"){
      allUserChoices = allUserChoices.concat(alphauprChar)
    }   
  

    //var results = [];
    //loop through the allUserChpices array numofChar times to get a password
        // and push result to results
     // for(let allUserChoices = 0; allusers < numofchar; allusers++){
      //return results.join('');


function writePassword() {
    var password = parameters();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
}
  
  // Add event listener to generate button
  document.querySelector("#generate").addEventListener("click", parameters)