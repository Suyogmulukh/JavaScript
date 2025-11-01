// const passwordField = document.getElementById("password");
// const copyBtn = document.getElementById("copyBtn");
// const lengthRange = document.getElementById("lengthRange");
// const lengthValue = document.getElementById("lengthValue");


// lengthRange.addEventListener("input", () => {
//   lengthValue.textContent = lengthRange.value;
// });

//   let password = "";
//   for (let i = 0; i < length; i++) {
//     password += chars.charAt(Math.floor(Math.random() * chars.length));
//   }
//   passwordField.value = password;

// copyBtn.addEventListener("click", () => {
//   if (passwordField.value) {
//     navigator.clipboard.writeText(passwordField.value);
//     alert("Password copied to clipboard!");
//   }
// });

const passwordField = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const lengthRange = document.getElementById("lengthRange");
const lengthValue = document.getElementById("lengthValue");
const generateBtn = document.getElementById("generateBtn");

const includeSpecial = document.getElementById("specialChars");
const includeUpper = document.getElementById("upperCase");
const includeLower = document.getElementById("lowerCase");
const includeNumbers = document.getElementById("numbers");

lengthRange.addEventListener("input", () => {
  lengthValue.textContent = lengthRange.value;
});

generateBtn.addEventListener("click", () => {
  const length = +lengthRange.value;
  let chars = "";

  if (includeSpecial.checked) chars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  if (includeUpper.checked) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeLower.checked) chars += "abcdefghijklmnopqrstuvwxyz";
  if (includeNumbers.checked) chars += "0123456789";

  if (chars.length === 0) {
    passwordField.value = "Select at least one option!";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  passwordField.value = password;
});

copyBtn.addEventListener("click", () => {
  if (passwordField.value) {
    navigator.clipboard.writeText(passwordField.value);
    alert("Password copied to clipboard!");
  }
});



const strengthCircle = document.getElementById("strengthCircle");

generateBtn.addEventListener("click", () => {
  const length = +lengthRange.value;
  let chars = "";

  if (includeSpecial.checked) chars += "!@#$%^&*()+~|}{[]?></=";
  if (includeUpper.checked) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeLower.checked) chars += "abcdefghijklmnopqrstuvwxyz";
  if (includeNumbers.checked) chars += "0123456789";

  if (chars.length === 0) {
    passwordField.value = "Select at least one option!";
    strengthCircle.className = "";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  passwordField.value = password;

  // Check password strength
  updateStrength(password);
});

// Strength checker
function updateStrength(password) {
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*()_+~`|}{[\]:;?><,./-=]/.test(password);

  const strengthScore = [hasLower, hasUpper, hasNumber, hasSpecial].filter(Boolean).length;

  strengthCircle.className = ""; // reset

  if (password.length < 6 || strengthScore <= 1) {
    strengthCircle.classList.add("strength-weak");
  } else if (password.length < 10 || strengthScore === 2 || strengthScore === 3) {
    strengthCircle.classList.add("strength-medium");
  } else {
    strengthCircle.classList.add("strength-strong");
  }
}
