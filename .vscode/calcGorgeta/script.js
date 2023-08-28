const btnEl = document.querySelector("#btnAct")

function calcular() {

  const valueAcount = parseFloat(document.querySelector("#acount-v").value)
  const qualityService = parseFloat(document.querySelector("#quality-v").value)

  let totalValue = document.querySelector("#total-v")

  //Conta da gorjeta
  const total = valueAcount * qualityService / 100;
  const totalEl = total + valueAcount

  totalValue.value = totalEl
}

btnEl.addEventListener("click", calcular)
