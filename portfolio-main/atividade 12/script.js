function calcular() {

    let inscritos = Number(document.getElementById("inscritos").value);
    let tamanhoTime = Number(document.getElementById("Times").value);
    let resultado = document.getElementById("resultado");

    let Times = Math.floor(inscritos / tamanhoTime);

    let resto = inscritos % tamanhoTime;

    if (resto === 0) {
        resultado.innerHTML = `Da pra formar: ${Times}, sem reservas`;
    } else {
        resultado.innerHTML = `Da para formar: ${Times}, com ${resto} reservas.`;
    }

}