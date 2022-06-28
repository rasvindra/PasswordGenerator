// Globally declared arrays
var generateBtn = document.querySelector("#generate");
var alphalwrChar =["a", "b", "c", "d", "e", "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var alphauprChar=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numberChar =["0","1","2","3","4","5","6","7","8","9"]
var specialChar =["~","`","!","@","#","$","%","^","&","*","(",")","_","+","-","=","{","}","[","]",":",";","'","<",">","?",".","/","|",'"',","];
// prompts that require yes or no answer to set parameters for password generator
function parameters() {
    var alphaLower = prompt("Would you like to include lower case  letters? Please enter Y for yes or N or no.")
    if (alphaLower !== "Y" && alphaLower !== "N")
        alert("Not a valid choice!");
    var alphaUpper = prompt(
      "Would you like to include upper case letters? Please enter Y for yes or N or no.")
    if (alphaUpper !== "Y" && alphaUpper !== "N") 
      alert("Not a valid choice!")
    var numberValues= prompt(
        "Would you like to include numbers? Please enter Y for yes or N or no.");
    if (numberValues !== "Y" && numberValues !== "N") 
      alert("Not a valid choice!");
    var specialValues = prompt(
        "Would you like to include special characters? Please enter Y for yes or N or no.");
    if (specialValues !== "Y" && specialValues !== "N") alert("Not a valid choice!");
      var numofChar = parseInt( prompt(
        "How many charaters long would you like your password to be? Please enter a value no less than 8 and no more than 128"
      ));
    if (numofChar < 8 || numofChar > 128)
      alert("Not a valid choice!");

    if (alphaLower !== "Y" && alphaUpper !== "Y" && specialValues !== "Y" && numberValues !== "Y"){
      alert("Character Type not selected! No Password created!")
    } 
    else {
      // new Array that comcat the character arrays for the number of times the user wants
      var allUserChoices = [];
      if(specialValues ==="Y"){
          allUserChoices = allUserChoices.concat(specialChar)
      }
      if(numberValues ==="Y"){
          allUserChoices = allUserChoices.concat(numberChar)
      }
      if(alphaLower ==="Y"){
          allUserChoices = allUserChoices.concat(alphalwrChar)
      }
      if(alphaUpper ==="Y"){
        allUserChoices = allUserChoices.concat(alphauprChar)
      }
    
      writePassword(numofChar, allUserChoices)  
    }
  }
  // Main function that inputs user parameters to create random passwrd and logs into text area
    function writePassword(numofChar,allUserChoices){
        var password = ""
        for(var i = 0; i < numofChar; i++){
          password=password+allUserChoices[Math.floor(Math.random() * numofChar)]
          console.log(Math.floor(Math.random() * numofChar))
        }
        console.log(password)
       var passwordText = document.querySelector("#password");
       passwordText.value = password;
    }

    // Add event listener to generate button
    document.querySelector("#generate").addEventListener("click", parameters)
   