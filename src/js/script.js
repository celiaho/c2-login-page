// 0. Hide the error by default (in CSS) 

// 1. Get the error-section
// 1a. Define variables and store the html elements ()
const errorDiv = document.getElementById("error-div");
const emailElement = document.getElementById("user-email");
// const passwordElement = document.getElementByID("user-password");  //for use if I want to validate password later
const formElement = document.getElementById("my-form");

const closeBtn = document.getElementById("close-btn");

// 2. When someone submits the form and "email" field is empty...
formElement.addEventListener("submit", doSomething);
function doSomething(event) {
    event.preventDefault();
    console.log("Login trigger working now...");

    // 3. ...show the error div
    errorDiv.classList.toggle("hide");
}

// 4. When someone clicks the "X" button...
closeButton.addEventListener("click", closeError);
function closeError(event) {
    // event.preventDefault();
    console.log("CloseButton trigger working now...");  //This doesn't work, not sure why

    // 5. ...Hide the error div
    errorDiv.classList.toggle("hide");
}