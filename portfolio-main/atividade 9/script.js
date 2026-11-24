  let mostrar = document.getElementById("resultado");
  let jogador = 0;
  let computador = 0;
  let min = 1
  let max = 100
  let dif = max-min
  let aleatorio = Math.random();
  computador = min + Math.trunc(dif * aleatorio);

function adivinhe(){
   jogador = Number(prompt("qual e o seu palpite?"))

     if(jogador < computador){
     mostrar.innerHTML = `<p>você pensou em ${jogador},meu numero é <b>MAIOR</b>!</p>`
   } else if(jogador > computador){
     mostrar.innerHTML = `<p>você pensou em ${jogador},meu numero é <b>MENOR</b>!</p>`

   } else if(jogador == computador){
     mostrar.innerHTML = `<p><b>PARABÉMS!!!</B> você acertou! eu tinha pensadoem ${computador}</p>`
}

}