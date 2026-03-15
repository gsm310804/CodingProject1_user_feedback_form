let form = document.querySelector("form");
let feedbackDisplay = document.querySelector("feedback-display")

form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const comments = document.getElementById("comments").value;

  console.log(`Username: ${username}`);
  console.log(`Email: ${email}`);
  console.log(`Comments: ${comments}`);

  let entry = document.createElement("p"); 
  entry.textContent = `Username: ${username}, Email: ${email}, Comments: ${comments}`; 
  document.getElementById("feedback-display").appendChild(entry); 

  event.stopPropagation();
  form.reset();
});

let button = document.querySelector("button");
button.addEventListener("click", function () {
  alert("Thank you for your feedback!");
});

let maxLength = comments.getAttribute("maxlength");
let countDisplay = document.getElementById("count");

comments.addEventListener("input", function () {
  countDisplay.textContent = comments.value.length;
  let currentLength = comments.value.length;

  if (currentLength >= maxLength) {
    countDisplay.style.color = "red";
  } else {
    countDisplay.style.color = "black";
  }
});

const inputs = document.querySelectorAll(".tooltip-input");
const tooltip = document.getElementById("tooltip");

inputs.forEach(input => {

  input.addEventListener("mouseover", () => {
    tooltip.textContent = input.dataset.tooltip;
    tooltip.style.display = "block";
    tooltip.style.background = "white"; 
  });


  input.addEventListener("mouseout", () => {
    tooltip.style.display = "none";
  });

});