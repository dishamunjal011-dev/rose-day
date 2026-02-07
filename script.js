// Navigate between screens
function nextScreen(n) {
  document.querySelectorAll('.screen')
    .forEach(s => s.classList.remove('active'));
  document.getElementById('screen' + n).classList.add('active');
}

function openVideo() {
  window.open('https://www.youtube.com/watch?v=whRj0am42hc', '_blank', 'noopener');
}

// Floating hearts
const heartsContainer = document.querySelector('.hearts');
setInterval(() => {
  const heart = document.createElement('span');
  heart.innerHTML = '💕';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (4 + Math.random() * 3) + 's';
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 500);

// Falling rose petals
const petalsContainer = document.querySelector('.petals');
setInterval(() => {
  const petal = document.createElement('span');
  petal.innerHTML = '🌹';
  petal.style.left = Math.random() * 100 + 'vw';
  petal.style.animationDuration = (6 + Math.random() * 4) + 's';
  petalsContainer.appendChild(petal);
  setTimeout(() => petal.remove(), 8000);
}, 700);

// QR Code
const qrScript = document.createElement('script');
qrScript.src = "https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js";
qrScript.onload = () => {
  new QRCode(document.getElementById("qrcode"), {
    text: "https://adrose.my.canva.site/",
    width: 200,
    height: 200,
    colorDark : "#ff4d6d",
    colorLight : "#fff",
    correctLevel : QRCode.CorrectLevel.H
  });
};
document.body.appendChild(qrScript);
