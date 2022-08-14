// console.log("Hi");

let progressBar = document.getElementById("progress-bar");

window.onscroll = function () {
  scrollpoint();
};

scrollpoint = () => {
  // console.log("I am working.");

  // scrollTop
  // projectHeight
  // currentHeight
  // calcHeight = projectHeight - currentHeight
  // 1st way - (scrollTop * 100 ) / calcHeight
  // 2nd way - (scrollTop / calcHeight) * 100

  let getScrollTop = document.documentElement.scrollTop;
  // console.log(getScrollTop);
  let getScrollHeight = document.documentElement.scrollHeight;
  // console.log(getScrollHeight);
  let getClientHeight = document.documentElement.clientHeight;
  // console.log(getClientHeight);
  let calcHeight = getScrollHeight - getClientHeight;
  // console.log(calcHeight);

  // let finalHeight = Math.round((getScrollTop / calcHeight) * 100);
  let finalHeight = Math.round((getScrollTop * 100) / calcHeight);
  // console.log(finalHeight);

  progressBar.style.width = finalHeight + "%";
};

function printPage() {
  window.print();
}
