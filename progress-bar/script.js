const progressBar = document.querySelector(".progress")
const previousBtn = document.querySelector("#previous-btn")
const nextBtn = document.querySelector("#next-btn")
const alertEl = document.querySelector("#alert")

let progress = 0;

  function updateProgressBar() {
    progressBar.style.width = progress + "%"
  }

  function nextStep() {
    progress += 10
    if(progress > 100) progress = 100;
    updateProgressBar();
    if(progress >= 100) {
      alertEl.style.visibility = "visible"
    }
  }

  function backStep() {
    progress -= 10
    if(progress < 0) progress = 0;
    updateProgressBar();
    if(progress < 100) {
      alertEl.style.visibility = "hidden"
    }
  }

  previousBtn.addEventListener("click",backStep)
  nextBtn.addEventListener("click", nextStep)
