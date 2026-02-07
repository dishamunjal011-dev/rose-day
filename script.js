// Screen navigation
function nextScreen(n) {
  document.querySelectorAll(".screen").forEach(s =>
    s.classList.remove("active")
  );
  document.getElementById("screen" + n).classList.add("active");
}

// Floating hearts
const heartsContainer = document.querySelector(".hearts");
setInterval(() => {
  const heart = document.createElement("span");
  heart.textContent = "💕";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 3 + "s";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 500);

// Falling rose petals
const petalsContainer = document.querySelector(".petals");
setInterval(() => {
  const petal = document.createElement("span");
  petal.textContent = "🌹";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = 6 + Math.random() * 4 + "s";
  petalsContainer.appendChild(petal);
  setTimeout(() => petal.remove(), 8000);
}, 700);
