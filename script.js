const form = document.querySelector("#contact-form");
const status = document.querySelector("#form-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  status.textContent = "Thanks, we will follow up shortly.";
  form.reset();
});
