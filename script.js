const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const letterWindow = document.querySelector(".letter-window");

const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const container = document.querySelector(".letter-window");

/* OPEN LETTER */
envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";

  requestAnimationFrame(() => {
    letterWindow.classList.add("open");
  });
});

/* NO BUTTON RUNS (MOBILE SAFE) */
noBtn.addEventListener("mouseenter", () => {
  const containerRect = container.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();
  const padding = 10;

  const maxX = containerRect.width - btnRect.width - padding;
  const maxY = containerRect.height - btnRect.height - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});


/* YES BUTTON */
yesBtn.addEventListener("click", () => {
  title.textContent = "Yippeeee!";
  catImg.src = "cat_dance.gif";

  letterWindow.classList.add("final");
  buttons.style.display = "none";
  finalText.style.display = "block";
});
