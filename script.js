// Assignment Code
// Write password to the #password input

/*On button click promt*/
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
  //  Else statement here if needing to add

  if (alpha === "Y" && numeric === "Y" && special === "Y")
    writePasswordAll(numofchar);
  else if (alpha === "Y" && numeric === "Y" && special === "N")
    writePasswordAlphaNumeric(numofchar);
  else if (alpha === "Y" && numeric === "N" && special === "Y")
    writePasswordAlphaSpecial(numofchar);
  else if (alpha === "N" && numeric === "Y" && special === "Y")
    writePasswordNumericSpecial(numofchar);
  else if (alpha === "Y" && numeric === "N" && special === "N")
    writePasswordAlpha(numofchar);
  else if (alpha === "N" && numeric === "Y" && special === "N")
    writePasswordNumeric(numofchar);
  else if (alpha === "N" && numeric === "N" && special === "Y")
    writePasswordAlphaSpecial(numofchar);
}

function writePasswordAll(chars) {
  var how = "";
  if (chars.indexOf("a") > -1) how += "abcdefghijklmnopqrstuvwxyz";
  if (chars.indexOf("A") > -1) how += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (chars.indexOf("#") > -1) how += "0123456789";
  if (chars.indexOf("!") > -1) how += "~`!@#$%^&*()_+-={}[]:\";'<>?,./|\\";
  var result = "";
  for (var i = chars; i > 0; --i)
    result += how[Math.floor(Math.random() * how.length)];
  return result;
}

function writePasswordAlphaNumeric(chars) {
  var how = "";
  if (chars.indexOf("a") > -1) how += "abcdefghijklmnopqrstuvwxyz";
  if (chars.indexOf("A") > -1) how += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (chars.indexOf("#") > -1) how += "0123456789";
  var result = "";
  for (var i = chars; i > 0; --i)
    result += how[Math.floor(Math.random() * how.length)];
  return result;
}

function writePasswordAlphaSpecial(chars) {
  var how = "";
  if (chars.indexOf("a") > -1) how += "abcdefghijklmnopqrstuvwxyz";
  if (chars.indexOf("A") > -1) how += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (chars.indexOf("!") > -1) how += "~`!@#$%^&*()_+-={}[]:\";'<>?,./|\\";
  var result = "";
  for (var i = chars; i > 0; --i)
    result += how[Math.floor(Math.random() * how.length)];
  return result;
}

function writePasswordNumericSpecial(chars) {
  var how = "";
  if (chars.indexOf("#") > -1) how += "0123456789";
  if (chars.indexOf("!") > -1) how += "~`!@#$%^&*()_+-={}[]:\";'<>?,./|\\";
  var result = "";
  for (var i = chars; i > 0; --i)
    result += how[Math.floor(Math.random() * how.length)];
  return result;
}

function writePasswordNumeric(chars) {
  var how = "";
  if (chars.indexOf("#") > -1) how += "0123456789";
  var result = "";
  for (var i = chars; i > 0; --i)
    result += how[Math.floor(Math.random() * how.length)];
  return result;
}

function writePasswordSpecial(chars) {
  var how = "";
  if (chars.indexOf("!") > -1) how += "~`!@#$%^&*()_+-={}[]:\";'<>?,./|\\";
  var result = "";
  for (var i = chars; i > 0; --i)
    result += how[Math.floor(Math.random() * how.length)];
  return result;
}

function writePasswordAlpha(chars) {
  var how = "";
  if (chars.indexOf("a") > -1) how += "abcdefghijklmnopqrstuvwxyz";
  if (chars.indexOf("A") > -1) how += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var result = "";
  for (var i = chars; i > 0; --i)
    result += how[Math.floor(Math.random() * how.length)];
  return result;
}

// testing to see if it works

console.log(writePasswordAll(12, "#aA!"));
console.log(writePasswordAlphaNumeric(12, "#aA"));
console.log(writePasswordAlphaSpecial(12, "aA!"));
console.log(writePasswordNumericSpecial(12, "#!"));
console.log(writePasswordAlpha(12, "aA"));
console.log(writePasswordNumeric(12, "#"));
console.log(writePasswordSpecial(12, "!"));

// Add event listener to generate button

document.querySelector("#generate").addEventListener("click", parameters);

// How do I get to print ot text area??
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


