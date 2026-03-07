const form = document.getElementById("form");
const username = document.getElementById("username");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  if (username.value.trim() === "") {
    alert("Username is required!");
  } else {
    alert("Form submitted successfully!");
  }
});
