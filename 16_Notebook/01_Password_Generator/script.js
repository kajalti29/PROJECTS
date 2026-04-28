const passwordField = document.getElementById("password");
const lengthField = document.getElementById("length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const strengthText = document.getElementById("strength");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+";

function generatePassword() {
  let chars = "";

  if (uppercase.checked) chars += upperChars;
  if (lowercase.checked) chars += lowerChars;
  if (numbers.checked) chars += numberChars;
  if (symbols.checked) chars += symbolChars;

  if (chars === "") {
    alert("Please select at least one option!");
    return;
  }

  let password = "";

  for (let i = 0; i < Number(lengthField.value); i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  passwordField.value = password;
  checkStrength(password);
}

function copyPassword() {
  navigator.clipboard.writeText(passwordField.value);
  alert("Password copied!");
}

function checkStrength(password) {
  let strength = "Weak";

  if (password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
    strength = "Medium";
  }

  if (
    password.length >= 12 &&
    /[A-Z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[^A-Za-z0-9]/.test(password)
  ) {
    strength = "Strong";
  }

  strengthText.innerText = "Strength: " + strength;
}

document
  .getElementById("generatePassword")
  .addEventListener("click", generatePassword);

document
  .getElementById("copyPassword")
  .addEventListener("click", copyPassword);