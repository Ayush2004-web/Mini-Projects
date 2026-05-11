// Display ko select kiya
let display = document.getElementById("display");
function calculate(value) {
  console.log("Button Clicked:", value);
  if (value === "AC") {
    display.value = "0";
    console.log("Display Cleared");
  } else if (value === "C") {
    if (display.value.length > 1) {
      display.value = display.value.slice(0, -1);
    } else {
      display.value = "0";
    }

    console.log("Last Character Removed");
  } else {
    if (display.value === "0") {
      display.value = value;
    } else {
      display.value += value;
    }

    console.log("Current Display:", display.value);
  }
}
function calculateResult() {
  try {
    console.log("Expression:", display.value);
    let result = eval(display.value);

    console.log("Result:", result);
    display.value = result;
  } catch (error) {
    console.log("Error:", error);
    display.value = "Error";
  }
}

document.addEventListener("keydown", function (event) {
  console.log("Key Pressed:", event.key);

  let key = event.key;
  if (
    (key >= "0" && key <= "9") ||key === "+" ||key === "-" ||key === "*" ||key === "/" ||key === "%" ||key === ".") {
    calculate(key);
  }
  else if (key === "Enter") {
    calculateResult();
  }
 
  else if (key === "Backspace") {
    calculate("C");
  }
  else if (key === "Escape") {
    calculate("AC");
  }
});
