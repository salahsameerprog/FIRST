function openStartPage() {
  document.getElementById("main-page").style.display = "none";
  document.getElementById("start-page").style.display = "grid";
}

function closeStartPage() {
  document.getElementById("start-page").style.display = "none";
  document.getElementById("main-page").style.display = "grid";
}

function showLetters() {
  document.getElementById("start-page").style.display = "none";
  document.getElementById("letters-page").style.display = "grid";
}

function closeLettersPage() {
  document.getElementById("letters-page").style.display = "none";
  document.getElementById("start-page").style.display = "grid";
}  

function showWriteLetters() {
  document.getElementById("letters-page").style.display = "none";
  document.getElementById("write-letters-page").style.display = "grid";
}

function closeWriteLettersPage() {
  document.getElementById("write-letters-page").style.display = "none";
  document.getElementById("letters-page").style.display = "grid";
}


function showWriteLetters1() {
  document.getElementById("write-letters-page").style.display = "none";
  document.getElementById("write-letters-page-1").style.display = "grid";
}



const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let isDrawing = false;

canvas.addEventListener("mousedown", (event) => {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(evsent.clientX, event.clientY);
});

canvas.addEventListener("mousemove", (event) => {
  if (isDrawing) {
    ctx.lineTo(event.clientX, event.clientY);
    ctx.stroke();
  }
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});










function showListenLetters() {
  document.getElementById("letters-page").style.display = "none";
  document.getElementById("listen-letters-page").style.display = "grid";
}

function closeListenLettersPage() {
  document.getElementById("listen-letters-page").style.display = "none";
  document.getElementById("letters-page").style.display = "grid";
}

function showNumbers() {
  document.getElementById("start-page").style.display = "none";
  document.getElementById("numbers-page").style.display = "grid";
}

function closeNumbersPage() {
  document.getElementById("numbers-page").style.display = "none";
  document.getElementById("start-page").style.display = "grid";
}

function showWriteNumbers() {
  document.getElementById("numbers-page").style.display = "none";
  document.getElementById("write-numbers-page").style.display = "grid";
}

function closeWriteNumbersPage() {
  document.getElementById("write-numbers-page").style.display = "none";
  document.getElementById("numbers-page").style.display = "grid";
}

function showListenNumbers() {
  document.getElementById("numbers-page").style.display = "none";
  document.getElementById("listen-numbers-page").style.display = "grid";
}

function closeListenNumbersPage() {
  document.getElementById("listen-numbers-page").style.display = "none";
  document.getElementById("numbers-page").style.display = "grid";
}
