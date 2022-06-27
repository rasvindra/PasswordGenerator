// Assignment Code

// Write password to the #password input

/*On button click promt*/
function parameters(){

var alpha = prompt("Would you like to include letters? Please enter Y for yes or N or no.")
if (alpha !=="Y" && alpha !=="N") alert("Not a valid choice!")
  else var numeric = prompt("Would you like to include numbers? Please enter Y for yes or N or no.")
  if (numeric !=="Y" && numeric !=="N") alert("Not a valid choice!")
  else var special = prompt("Would you like to include special characters? Please enter Y for yes or N or no.")
  if (special !=="Y" && special !=="N") alert("Not a valid choice!");
  //  Else statement here
}

function writePassword(length, chars) {
  var how = '';
  if (chars.indexOf('a') > -1) how += 'abcdefghijklmnopqrstuvwxyz';
  if (chars.indexOf('A') > -1) how += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (chars.indexOf('#') > -1) how += '0123456789';
  if (chars.indexOf('!') > -1) how += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
  var result = '';
  for (var i = length; i > 0; --i) result += how[Math.floor(Math.random() * how.length)];
  return result;
}

console.log(writePassword(128, "#aA!"));


// Add event listener to generate button

<button id="generate" onclick="parameters()">
</button>


// var randomNum  = Math.random()
// console.log(randomNum)
// var numTimesLength = randomNum * names.length
// console.log(numTimesLength)
// var roundDown = Math.floor(numTimesLength)
// console.log(roundDown)

