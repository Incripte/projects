const nextEl = document.querySelector("#next")
const previousEl = document.querySelector("#previous")
const progressEl = document.querySelector("#progress")
const alertEl = document.querySelector("#alert")
const percentEl = document.querySelector("#percent")

let progress = 0;

function updateProgressBar() {
  progressEl.style.width = progress + "%"

  if(progress <= 90) {
    percentEl.innerHTML = progress + "% do seu curso foi concluido!"
  } else {
    percentEl.innerHTML = "Curso Concluido, parabéns!!"
  }

}

function nextStep() {
  progress += 10
  if(progress > 100) progress = 100;
  updateProgressBar();
  if(progress >= 100) {
    alertEl.style.display = "flex"
  }
}

function backStep() {
  if(progress <= 0) progress = 0;
  updateProgressBar();
}

previousEl.addEventListener("click", backStep)
nextEl.addEventListener("click", nextStep)
