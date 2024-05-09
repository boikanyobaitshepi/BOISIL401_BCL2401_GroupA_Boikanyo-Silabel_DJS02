const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const entries = new FormData(event.target);
    const dividend = entries.get("dividend");
    const divider = entries.get("divider");

    // Error handling: check if inputs are empty
    if (dividend === "" || divider === "") {
        //result.classList.add("error-message");
        result.innerText = "Division not performed. Both values are required in inputs. Try again.";
        return;
    }

    if (isNaN(dividend) || isNaN(divider)) {
        result.classList.add("critical-error");
        result.innerText = "Something critical went wrong. Please reload the page.";
        return;
    }

    if (divider === "0"){
        result.innerText = "Invalid input: Division by zero or non-numeric value provided." ;
        return;
    }
    

       result.innerText = Math.floor(dividend / divider);
        // result.innerText = resultValue.toString();
    
});
