const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;

  if (!dividend || !divider) {
    result.classList.add("error-message")
    result.innerText = "Division not performed. Both values are required in inputs. Try again.";
    return;
});