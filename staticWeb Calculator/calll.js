// Display ko select kiya
let display = document.getElementById("display");


// =========================
// BUTTON CLICK FUNCTION
// =========================

function calculate(value) {

    console.log("Button Clicked:", value);

    // AC → pura display clear
    if (value === "AC") {

        display.value = "0";
        console.log("Display Cleared");
    }

    // C → last character remove
    else if (value === "C") {

        if (display.value.length > 1) {

            display.value = display.value.slice(0, -1);

        } else {

            display.value = "0";
        }

        console.log("Last Character Removed");
    }

    // Numbers aur operators add karna
    else {

        // Agar display me sirf 0 hai
        if (display.value === "0") {

            display.value = value;

        } else {

            display.value += value;
        }

        console.log("Current Display:", display.value);
    }
}


// =========================
// RESULT FUNCTION
// =========================

function calculateResult() {

    try {

        console.log("Expression:", display.value);

        // Expression solve karega
        let result = eval(display.value);

        console.log("Result:", result);

        // Result display par show
        display.value = result;

    } catch (error) {

        console.log("Error:", error);

        display.value = "Error";
    }
}


// =========================
// KEYBOARD SUPPORT
// =========================

document.addEventListener("keydown", function(event) {

    console.log("Key Pressed:", event.key);

    let key = event.key;

    // Numbers and operators allowed
    if (
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "%" ||
        key === "."
    ) {

        calculate(key);
    }

    // Enter key = result
    else if (key === "Enter") {

        calculateResult();
    }

    // Backspace = remove last character
    else if (key === "Backspace") {

        calculate("C");
    }

    // Escape = clear all
    else if (key === "Escape") {

        calculate("AC");
    }

});