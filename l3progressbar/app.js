let progressBar = document.querySelector(".progress-bar");
let downloadBtn = document.querySelector(".download-btn");
let setURL = "https://github.com";

downloadBtn.addEventListener("click", () => {
  // console.log("Hi");

  downloadBtn.setAttribute("disabled", true);

  let setWidth = 0;

  let setPercent = setInterval(progressIncrease, 100);

  function progressIncrease() {
    if (setWidth >= 100) {
      clearInterval(setPercent);
      window.location.href = setURL;
    } else {
      setWidth++;
      // console.log(setWidth); // Will be print 1 to 100
    }

    progressBar.style.width = `${setWidth}%`;
    progressBar.setAttribute("data-percent", `${setWidth}%`);
  }
});
