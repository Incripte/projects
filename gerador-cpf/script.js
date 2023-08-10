const cpfEl = document.querySelector("#cpf")
const gerarEl = document.querySelector("#gerar")
const copyEl = document.querySelector("#copiar")

function gerarCPF() {
  let n = Math.floor(Math.random() * 99999999999) + 1;
  let nStr = n.toString().padStart(9, "0");
  let dv1 = calcularDV(nStr, 10);
  let dv2 = calcularDV(nStr + dv1, 11);

  cpfEl.innerHTML = formatarCPF(nStr + dv1 + dv2);
}
