const display = document.getElementById("display");
const keys = document.querySelectorAll(".key");

let currentInput = "";

keys.forEach(function(button) {

    button.addEventListener("click", function() {

        const value = button.dataset.value;

        if (value === "=") {

            try {
                currentInput = eval(currentInput).toString();
                display.value = currentInput;
            } catch (error) {
                display.value = "Error";
                currentInput = "";
            }

        } else {

            currentInput += value;
            display.value = currentInput;

        }

    });

});