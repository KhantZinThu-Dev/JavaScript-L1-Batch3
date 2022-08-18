let getModal = document.getElementById("signup-modal");
let getSignupBtn = document.getElementById("btn-signup");
let getOpenFullscreenBtn = document.getElementById("btn-open-fullscreen");
let getCloseFullscreenBtn = document.getElementById("btn-close-fullscreen");
let getCloseBtn = document.querySelector(".btn-close");

getSignupBtn.addEventListener("click", function () {
  getModal.style.display = "block";
});

getCloseBtn.addEventListener("click", function () {
  getModal.style.display = "none";
});

window.onclick = function (e) {
  // console.log(e.target);

  if (e.target === getModal) {
    getModal.style.display = "none";
  }
};

let documentElement = document.documentElement;
// console.log(documentElement);

getOpenFullscreenBtn.addEventListener("click", function () {
  if (documentElement.requestFullscreen) {
    documentElement.requestFullscreen();
  } else if (documentElement.msRequestFullscreen) {
    documentElement.msRequestFullscreen();
  } else if (documentElement.mozRequestFullscreen) {
    documentElement.mozRequestFullscreen();
  } else if (documentElement.webkitRequestFullscreen) {
    documentElement.webktiRequestFullscreen();
  }

  getCloseFullscreenBtn.style.display = "inline-block";
});

getCloseFullscreenBtn.addEventListener("click", function () {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else if (document.mozExitFullscreen) {
    document.mozExitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }

  getCloseFullscreenBtn.style.display = "none";
});
