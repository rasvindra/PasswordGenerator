// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword(


  );
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
<button onclick="password()">Click me</button>

// var randomNum  = Math.random()
// console.log(randomNum)
// var numTimesLength = randomNum * names.length
// console.log(numTimesLength)
// var roundDown = Math.floor(numTimesLength)
// console.log(roundDown)

console.log(names[Math.floor(Math.random()*/*whatever amount of randomn number*/)])

/* Example of random text generator */
<input type='text' id='p'/><br/>
<input type='button' value ='generate' onclick='document.getElementById("p").value = Password.generate(16)'></input>
