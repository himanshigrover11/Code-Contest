const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

const signInForm = document.querySelector('.sign-in-form');

// Add an event listener for form submission
signInForm.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const usernameInput = document.querySelector('input[type="text"]');
  const passwordInput = document.querySelector('input[type="password"]');

  if (usernameInput.value.trim() === '' || passwordInput.value.trim() === '') {
    alert('Please fill in both username and password.'); 
    return;
  }
  
  // If the fields are not empty, proceed with the form submission or any other actions
  window.location.href = "in.html"; 
});
