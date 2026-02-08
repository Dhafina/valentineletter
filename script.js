const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const letterWindow = document.querySelector(".letter-window");

const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

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
  const rect = noBtn.getBoundingClientRect();
  const padding = 20;

  const maxX = window.innerWidth - rect.width - padding;
  const maxY = window.innerHeight - rect.height - padding;

  const x = Math.random() * (maxX - padding) - rect.left + padding;
  const y = Math.random() * (maxY - padding) - rect.top + padding;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});


/* YES BUTTON */
yesBtn.addEventListener("click", () => {
  title.textContent = "Yippeeee!";
  catImg.src = "cat_dance.gif";

  letterWindow.classList.add("final");
  buttons.style.display = "none";
  finalText.style.display = "block";
});
