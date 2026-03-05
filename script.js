const funFactBtn = document.getElementById("funFactBtn");
const funFactText = document.getElementById("funFactText");

const funFacts = [
  "I can spend hours debugging until everything works.",
  "I enjoy learning one new coding trick each week.",
  "I once rebuilt a webpage design just for practice."
];

let factIndex = 0;

funFactBtn.addEventListener("click", () => {
  funFactText.textContent = funFacts[factIndex];
  factIndex = (factIndex + 1) % funFacts.length;
});
