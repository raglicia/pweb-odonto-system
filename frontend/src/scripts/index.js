function preventSubmit(event) {
  event.preventDefault();
  window.location.href = "./pages/recepcionista/home.html";
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("login-form")
    .addEventListener("submit", preventSubmit);
});

// navegação das telas gerente
function irTelaPacientes() {
  window.location.href = "../recepcionista/paciente.html";
}

function irTelaAgendamento() {
  window.location.href = "../recepcionista/agenda.html";
}

function irTelaDentista() {
  window.location.href = "../gerente/dentista.html";
}

function irTelaFuncionario() {
  window.location.href = "";
}

function irTelaCadastrarDentista() {
  window.location.href = "../recepcionista/cadastrar_dentista.html";
}

// navegação das telas dentista
