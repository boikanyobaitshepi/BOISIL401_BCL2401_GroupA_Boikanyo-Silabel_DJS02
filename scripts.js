const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const entries = new FormData(event.target);
    const dividend = entries.get("dividend");
    const divider = entries.get("divider");

    // Error handling: check if inputs are empty
    if (dividend === "" || divider === "") {
        result.innerText = "Division not performed. Both values are required in inputs. Try again.";
        console.error("Division not performed. Both values are required in inputs. Try again.")
        return;
    }

    if (isNaN(dividend) || isNaN(divider)) {
        result.classList.add("critical-error");
        result.innerText = "Something critical went wrong. Please reload the page.";
        console.error("Something critical went wrong. Please reload the page.");
        return;
    }

    if (divider === "0"){
        result.innerText = "Division not performed. Invalid number provided. Try again." ;
        console.error("Division not performed. Invalid number provided. Try again.")
        return;
    }
    
       result.innerText = Math.floor(dividend / divider);
    
});
