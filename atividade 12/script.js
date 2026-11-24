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

function inscrever(nome, time) {

let time1 = [];
let time2 = [];
let time3 = [];
let time4 = [];

if (time == 1 && time1.length < 3) {  
    time1.push(nome);  
    console.log("Inscrição realizada!");  

} else if (time == 2 && time2.length < 3) {  
    time2.push(nome);  
    console.log("Inscrição realizada!");  

} else if (time == 3 && time3.length < 3) {  
    time3.push(nome);  
    console.log("Inscrição realizada!");  

} else if (time == 4 && time4.length < 3) {  
    time4.push(nome);  
    console.log("Inscrição realizada!");  

} else {  
    console.log("Time cheio!");  
}

}
