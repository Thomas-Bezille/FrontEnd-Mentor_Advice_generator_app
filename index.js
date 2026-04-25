const title = document.querySelector(".container h1");
const advice = document.querySelector(".container p");
const btn = document.querySelector(".dice");

async function getAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    const data = await response.json();
    advice.textContent = data.slip.advice;
    title.textContent = `Advice #${data.slip.id}`;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    document.getElementById("error").textContent =
      "Erreur : impossible de charger les données";
  }
}

btn.addEventListener("click", getAdvice);
document.addEventListener("DOMContentLoaded", getAdvice);
