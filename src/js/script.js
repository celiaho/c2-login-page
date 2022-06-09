// 0. Hide the error by default (in CSS) 

// 1. Define variables and store the (html elements)
const formElement = document.querySelector("#my-form");
const errorMsg = document.querySelector("#error-msg");
const successMsg = document.querySelector("#success-msg");
const emailElement = document.querySelector("#user-email");
const passwordElement = document.querySelector("#user-password");
    // console.log(emailElement.value);
    // console.log(passwordElement.value);
const closeBtn = document.getElementById("close-btn");

// 2. When user submits the form, display error message if there's an error; otherwise show Dashboard page.
function submitForm(evt) {
    evt.preventDefault();
    if(isError()){
        showErrorMsg();
        return;
    }
    // showSuccessMsg();
    window.location.replace("dashboard.html");
}

// 2a. If email or password field is empty...
function isError() {
    if(emailElement.value === "" || passwordElement.value === ""){
        return true;
    }
    return false;
}

// 2b. ...show error message...
function showErrorMsg() {
    // console.log("There was an error");
    errorMsg.classList.remove("hide");
}

// 2c. ...otherwise, show success message...
function showSuccessMsg() {
    // console.log("Submitted...");
    successMsg.classList.remove("hide");
    errorMsg.classList.add("hide");
}

// 2d. When close button is clicked, close error message.
function closeErrorMsg() {
    // console.log("Error message closed...");
    errorMsg.classList.toggle("hide"); 
}

// Event listeners
formElement.addEventListener("submit", submitForm);
closeBtn.addEventListener("click", closeErrorMsg);