const checkButton = document.getElementById("check-btn");
const userInput = document.getElementById("user-input");
const clearButton = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

const phoneRegex = /^1? ?\(?\d{3}\)? ?-?\d{3} ?-?\d{4}$/;
const phoneRegex2 = /^1? ?\d{3}\) ?-?\d{3}-?\d{4}$/;
const phoneRegex3 = /^1? ?\(\d{3} ?-?\d{3}-?\d{4}$/;

checkButton.addEventListener("click", () => {
  if (!userInput.value) {
    alert("Please provide a phone number");
  } else {
    if (phoneRegex.test(userInput.value)) {
      if (phoneRegex2.test(userInput.value) || phoneRegex3.test(userInput.value)) {
        results.innerHTML = `Invalid US number: ${userInput.value}`;
      } else {
      results.innerHTML = `Valid US number: ${userInput.value}`;
    }
    } else {
      results.innerHTML = `Invalid US number: ${userInput.value}`;
    }
  }
});

clearButton.addEventListener("click", () => results.innerHTML = "");