var generateBtn = document.querySelector("#generate");
var alphalwrChar =["a", "b", "c", "d", "e", "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var alphauprChar=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var numberChar =["0","1","2","3","4","5","6","7","8","9"]
var specialChar =["~","`","!","@","#","$","%","^","&","*","(",")","_","+","-","=","{","}","[","]",":",";","'","<",">","?",".","/","|",'"',","];

function parameters() {
    var alphaLower = prompt("Would you like to include lower case   letters? Please enter Y for yes or N or no.")
    if (alphaLower !== "Y" || alphaLower !== "N")
        alert("Not a valid choice!");
    var alphaUpper = prompt(
      "Would you like to include upper case letters? Please enter Y for yes or N or no.")
    if (alphaUpper !== "Y" || alphaUpper !== "N") 
      alert("Not a valid choice!")
    var numberValues= prompt(
        "Would you like to include numbers? Please enter Y for yes or N or no.");
    if (numberValues !== "Y" || numberValues !== "N") 
      alert("Not a valid choice!");
    var specialValues = prompt(
        "Would you like to include special characters? Please enter Y for yes or N or no.");
    if (specialValues !== "Y" || specialValues !== "N") alert("Not a valid choice!");
      var numofChar = prompt(
        "How many charaters long would you like your password to be? Please enter a value no less than 8 and no more than 128"
      );
    if (numofChar < 8 || numofChar > 128)
      alert("Not a valid choice! Please retry.");

    if (alphaLower === "N" && alphaUpper === "N" && specialValues === "N" && numberValues === "N"){
      alert("Character's not selected! No Password craeated!")
    } 
    else {
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
      writePassword(numofChar, allUserChoices)  
    }
  }
  

   // var results =
    //loop through the allUserChpices array numofChar times to get a password
        // and push result to results
   
    // return results.join('');
    function writePassword(numofChar,allUserChoices){
        var password = ""
        for(var i = 0; i > 0; i++)  
          password=passwrod+allUserChoices[Math.floor(Math.random() * numofChar)]
9
       var passwordText = document.querySelector("#password");
       passwordText.value = password;
    }

    // Add event listener to generate button
    document.querySelector("#generate").addEventListener("click", parameters)
    

function writePassword() {
    var password = parameters();

}