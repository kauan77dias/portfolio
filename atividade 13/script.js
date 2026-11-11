function contar(){
    let saida = document.getElementById('saida');
    
    let cont = 1
   
    while(cont <= 10 ) {
        if(numero % 2 === 0 ){
         saida.innerHTML += `<p> &#x1F449 <mark>${cont}</mark></p>`;
         
        }else{
         saida.innerHTML += `<p> &#x1F449 ${cont}</p>`
        }
         cont = cont +1

    } 
   
}
