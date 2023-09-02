const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const op = ["%", "*", "/", "-", "+", "="];
let output = "";

const calc = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && op.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};
buttons.forEach((button) => {
  button.addEventListener("click", (e) => calc(e.target.dataset.value));
});