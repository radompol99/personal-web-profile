const funFactBtn = document.getElementById("funFactBtn");
const funFactText = document.getElementById("funFactText");

const funFacts = [
  "I can spend hours debugging until everything works.",
  "I enjoy learning one new coding trick each week.",
  "I once rebuilt a webpage design just for practice.",
  "I founded a startup business to help MSMEs and Local Governments in creating innovative customized progressive web applications.",
];
const factBgColors = ["#00145b", "#c50202"];

let previousIndex = -1;
let colorIndex = 0;

function getNextFactIndex() {
  if (funFacts.length === 1) return 0;

  let nextIndex = Math.floor(Math.random() * funFacts.length);
  while (nextIndex === previousIndex) {
    nextIndex = Math.floor(Math.random() * funFacts.length);
  }
  return nextIndex;
}

if (funFactBtn && funFactText) {
  funFactBtn.addEventListener("click", () => {
    const nextIndex = getNextFactIndex();
    previousIndex = nextIndex;
    const activeColor = factBgColors[colorIndex];

    funFactText.classList.remove("animate");
    void funFactText.offsetWidth;

    funFactText.textContent = funFacts[nextIndex];
    funFactText.style.backgroundColor = activeColor;
    funFactBtn.style.backgroundColor = activeColor;
    colorIndex = (colorIndex + 1) % factBgColors.length;
    funFactText.classList.add("is-visible", "animate");
    funFactBtn.textContent = "Show another fun fact about me";
  });
}
