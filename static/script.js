// Updated JavaScript
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    const expression = document.getElementById("display").value;
    fetch("/calculate", {
        method: "POST",
        body: new URLSearchParams({ expression }),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    })
        .then((response) => response.text())
        .then((result) => {
            document.getElementById("display").value = result;
        })
        .catch((error) => {
            console.error(error);
            document.getElementById("display").value = "Error";
        });
}

// Add event listeners for keyboard input
document.addEventListener("keydown", function (event) {
    const keyValue = event.key;
    const validKeys = "0123456789+-*/.=";

    if (validKeys.includes(keyValue)) {
        if (keyValue === "=") {
            calculate();
        } else {
            appendToDisplay(keyValue);
        }
    } else if (keyValue === "Enter") {
        calculate();
    } else if (keyValue === "Escape") {
        clearDisplay();
    }
});
