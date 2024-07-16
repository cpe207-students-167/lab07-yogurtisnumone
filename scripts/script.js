// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const confirmPasswordInput = document.querySelector("#password-confirm-input");

// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");

// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// add callback function for firstNameInput.onkeyup event
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

// add callback functions for other input events.
// (lastname, email, password, confirm password)
lastNameInput.onkeyup = () => {
  clearValidationStyles(lastNameInput);
};

emailInput.onkeyup = () => {
  clearValidationStyles(emailInput);
};

passwordInput.onkeyup = () => {
  clearValidationStyles(passwordInput);
  if (confirmPasswordInput.value !== "" && confirmPasswordInput.value === passwordInput.value) {
    confirmPasswordInput.classList.add("is-valid");
    confirmPasswordInput.classList.remove("is-invalid");
  } else {
    confirmPasswordInput.classList.add("is-invalid");
    confirmPasswordInput.classList.remove("is-valid");
  }
};

confirmPasswordInput.onkeyup = () => {
  clearValidationStyles(confirmPasswordInput);
  if (confirmPasswordInput.value !== "" && confirmPasswordInput.value === passwordInput.value) {
    confirmPasswordInput.classList.add("is-valid");
    confirmPasswordInput.classList.remove("is-invalid");
  } else {
    confirmPasswordInput.classList.add("is-invalid");
    confirmPasswordInput.classList.remove("is-valid");
  }
};


// add callback function for submit button.
submitBtn.onclick = () => {
  isFirstNameOk = false;
  isLastNameOk = false;
  isEmailOK = false;
  isPasswordOk = false;
  isConfirmPasswordOk = false;
  // validate first name
  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  // validate last name
  if (lastNameInput.value === "") {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  }
  // validate email
  if (emailInput.value === "" || !validateEmail(emailInput.value)) {
    emailInput.classList.add("is-invalid");
  } else {
    emailInput.classList.add("is-valid");
    isEmailOk = true;
  }
  // validate password
  if (passwordInput.value === "" || passwordInput.value.length < 6) {
    passwordInput.classList.add("is-invalid");
  } else {
    passwordInput.classList.add("is-valid");
    isPasswordOk = true;
  }
  // validate confirm password
  if (confirmPasswordInput.value === "" || confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordInput.classList.add("is-invalid");
  } else {
    confirmPasswordInput.classList.add("is-valid");
    isConfirmPasswordOk = true;
  }
  if (isFirstNameOk && isLastNameOk && isEmailOk && isPasswordOk && isConfirmPasswordOk) {
    alert("Registered successfully");
  }
};

// add callback function for Reset button.
resetBtn.onclick = () => {
  firstNameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  confirmPasswordInput.value = "";

  clearValidationStyles(firstNameInput);
  clearValidationStyles(lastNameInput);
  clearValidationStyles(emailInput);
  clearValidationStyles(passwordInput);
  clearValidationStyles(confirmPasswordInput);
};
