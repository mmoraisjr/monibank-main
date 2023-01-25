import cpfValido from "./valida-cpf.js";
const camposForm = document.querySelectorAll("[required]");

camposForm.forEach((elemento) => {
    elemento.addEventListener("blur", () => verificaCampo(elemento))
})

function verificaCampo(campo) {
    if (campo.name == "cpf" && campo.value.length >= 11) {
        cpfValido(campo);
    }
}