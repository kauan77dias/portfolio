function Comparar() {

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let resultado = document.getElementById("resultado");

    const video = document.getElementById("video");

    if (num1 === 67 && num2 === 67) {
        resultado.style.color = "black";
        resultado.innerHTML = "???";
        video.style.display = "block";
        video.play();
    }

    if (num1 > num2) {
        resultado.style.color = "black";
        resultado.textContent = `o número ${num1} é maior que ${num2}.`;
    } else if (num2 > num1) {
        resultado.style.color = "black";
        resultado.textContent = `o número ${num2} é maior que ${num1}.`;
    } else if (num1 === num2) {
        resultado.style.color = "black";
        resultado.textContent = "seus números são iguais.";
    }

}
