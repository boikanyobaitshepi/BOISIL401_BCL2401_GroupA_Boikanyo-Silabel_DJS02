const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const entries = new FormData(event.target);
    const dividend = entries.get("dividend");
    const divider = entries.get("divider");

    // Error handling: check if inputs are empty
    if (!dividend || !divider) {
        result.classList.add("error-message");
        result.innerText = "Division not performed. Both values are required in inputs. Try again.";
        return;
    }

    // Error handling: check if inputs contain invalid characters
    const validInputRegex = /^[0-9]+$/;
    if (!validInputRegex.test(dividend) || !validInputRegex.test(divider)) {
        result.classList.add("critical-error");
        result.innerText = "Something critical went wrong. Please reload the page.";
        return;
    }

    try {
        // Force Number conversion
        const dividendNumber = Number(dividend);
        const divisorNumber = Number(divider);

        // Check for specific "YOLO" and "+++" input case
        if (dividend === "YOLO" && divider === "+++") {
            result.innerText = "Something critical went wrong. Please reload the page.";
            return;
        }

        // Check for other numeric errors
        if (isNaN(dividendNumber) || isNaN(divisorNumber) || divisorNumber === 0) {
            throw new Error("Invalid input: Division by zero or non-numeric value provided.");
        }

        const resultValue = Math.floor(dividendNumber / divisorNumber);
        result.innerText = resultValue.toString();

    } catch (error) {
        result.classList.add("critical-error");
        result.innerText = error.message;
    }
});
