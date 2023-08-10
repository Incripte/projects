const form = document.querySelector("form")
const nome = document.querySelector("#nome")
const email = document.querySelector("#email")
const assunto = document.querySelector("#assunto")
const mensagem = document.querySelector("#mensagem")
const errorMessages = document.querySelector(".error-message")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    validateInputs();
})

function setError(input, errorMessage) {
    const errorMessageElement = input.nextElementSibling;
    errorMessageElement.textContent = errorMessage;
    input.parentElement.classlist.add("error")
}

function validateInputs() {
    const nomeValue = nome.value.trim();
    const emailValue = email.value.trim();
    const assuntoValue = assunto.value.trim();
    const mensagemValue = mensagem.value.trim();
    
    if(nomeValue === ""){
        setError(nome, "Nome não pode ser vazio");
    }

    if(emailValue === ""){
        setError(email, "E-mail não pode ser vazio");
    } else if (!isValidEmail(emailValue)) 
        setError(email, "E-mail não é valido");
    if(assuntoValue === ""){
        setError(assunto, "Assunto não pode ser vazio");
    }

    if(mensagemValue === ""){
        setError(mensagem, "Mensagem não pode ser vazio ou menor que 20 caractéres");
    }
}

function isValidEmail (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
}