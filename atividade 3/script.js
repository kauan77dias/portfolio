
function calcular() {
 nota1trim = Number(prompt("digite a nota do primeiro trimestletre"))
 nota2trim = Number(prompt("digite a nota do segundo trimestletre"))

 let resultado =  180-(nota1trim+nota2trim)

 if(resultado <= 0){
 alert("parabéns! você foi aprovado por nota")
 } else{
 alert ("voce precida disso " + resultado + "para passar"); 
 }

}