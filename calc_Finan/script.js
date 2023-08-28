const btnEl = document.querySelector("#btn-calc")

const calcular = () => {
  const finanEl = parseFloat(document.querySelector("#finan").value)
  const timeEl = parseFloat(document.querySelector("#time").value)

  const valueT = finanEl / timeEl

  let resultEl = document.querySelector("#resultado")

  resultEl.value = valueT

  console.log(`Valor financiado ${finanEl}, tempo ${timeEl}, por mês ${resultEl}`)
}

btnEl.addEventListener("click", calcular)
