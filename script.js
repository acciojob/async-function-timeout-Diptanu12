
async function showMessageWithDelay(text, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(text);
    }, delay);
  });
}

document.getElementById("btn").addEventListener("click", async () => {
  // Retrieve user input
  const text = document.getElementById("text").value;
  const delay = parseInt(document.getElementById("delay").value, 10);
  const outputDiv = document.getElementById("output");

  if (!text) {
    outputDiv.textContent = "Please enter a valid text.";
    return;
  }

  if (isNaN(delay) || delay < 0) {
    outputDiv.textContent = "Please enter a valid delay (in milliseconds).";
    return;
  }

  outputDiv.textContent = "Waiting...";
  const message = await showMessageWithDelay(text, delay);

  outputDiv.textContent = message;
});
