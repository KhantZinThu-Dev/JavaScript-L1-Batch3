let getAccordionTitles = document.getElementsByClassName("accordion-title");
// console.log(getAccordionTitles); // HTMLCollection
let getAccordionContents = document.querySelectorAll(".accordion-content");
// console.log(getAccordionContents); // NodeList

for (let x = 0; x < getAccordionTitles.length; x++) {
  // console.log(x);

  getAccordionTitles[x].addEventListener("click", function (e) {
    // console.log(e.target);
    // console.log(this);
    // console.log(x);

    this.classList.toggle("active");
    let getAccordionContent = getAccordionContents[x];
    // console.log(getAccordionContent);

    if (getAccordionContent.style.height) {
      getAccordionContent.style.height = null;
    } else {
      // Dynamic Height depand on paragraph scrollable height
      // console.log(getAccordionContent.scrollHeight);
      //
      // getAccordionContent.style.height = "100px";
      getAccordionContent.style.height =
        getAccordionContent.scrollHeight + "px";
    }
  });

  // getAccordionContents[0].style.height = getAccordionContents[0].scrollHeight + "px";
  if (getAccordionTitles[x].classList.contains("active")) {
    getAccordionContents[x].style.height =
      getAccordionContents[x].scrollHeight + "px";
  }
}
