{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww30040\viewh18340\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Navigate between screens\
function nextScreen(n) \{\
  document.querySelectorAll('.screen')\
    .forEach(s => s.classList.remove('active'));\
  document.getElementById('screen' + n).classList.add('active');\
\}\
\
// Open Canva video in new tab\
function openVideo() \{\
  window.open('https://adrose.my.canva.site/', '_blank');\
\}\
\
// Floating hearts\
const heartsContainer = document.querySelector('.hearts');\
setInterval(() => \{\
  const heart = document.createElement('span');\
  heart.innerHTML = '\uc0\u55357 \u56469 ';\
  heart.style.left = Math.random() * 100 + 'vw';\
  heart.style.animationDuration = (4 + Math.random() * 3) + 's';\
  heartsContainer.appendChild(heart);\
  setTimeout(() => heart.remove(), 6000);\
\}, 500);\
\
// Falling rose petals\
const petalsContainer = document.querySelector('.petals');\
setInterval(() => \{\
  const petal = document.createElement('span');\
  petal.innerHTML = '\uc0\u55356 \u57145 ';\
  petal.style.left = Math.random() * 100 + 'vw';\
  petal.style.animationDuration = (6 + Math.random() * 4) + 's';\
  petalsContainer.appendChild(petal);\
  setTimeout(() => petal.remove(), 8000);\
\}, 700);\
\
// QR Code\
const qrScript = document.createElement('script');\
qrScript.src = "https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js";\
qrScript.onload = () => \{\
  new QRCode(document.getElementById("qrcode"), \{\
    text: "https://adrose.my.canva.site/",\
    width: 200,\
    height: 200,\
    colorDark : "#ff4d6d",\
    colorLight : "#fff",\
    correctLevel : QRCode.CorrectLevel.H\
  \});\
\};\
document.body.appendChild(qrScript);\
}