document.addEventListener("DOMContentLoaded", function() {
    var submitButton = document.querySelector("#submit-button");
    var passwordInput = document.querySelector("#password-input");
    var terminal = document.getElementById("terminal");
  
    submitButton.addEventListener("click", function(event) {
      event.preventDefault();
  
      var password = passwordInput.value;
  
      if (password === "123") {
        terminal.classList.add("loading");
  
        setTimeout(function() {
          terminal.classList.add("loaded");
          setTimeout(function() {
            window.location.href = "https://purgatoryclub.netlify.app/";
          }, 500);
        }, 2000);
      }
    });
  });
  