function estacao(){
    let mes = prompt("digite o mês por extenso (ex: setembro):")
    let mostrar = document.getElementById('resultado');

    mes = mes.toUpperCase()


    if(mes == 'DEZEMBRO' || mes == 'JANEIRO' || mes == 'FEVEREIRO'){
    mostrar.innerHTML = `<p>a estação do seu mes é <b> VERÃO </b></p>`
    }
    if(mes == 'MARÇO' || mes == 'ABRIL' || mes == 'MAIO'){
    mostrar.innerHTML = `<p>a estação do seu mes é <b> OUTONO </b></p>`
    }
    if(mes == 'JUNHO' || mes == 'JULHO' || mes == 'AGOSTO'){
    mostrar.innerHTML = `<p>a estação do seu mes é <b> INVERNO </b></p>`
    }
    if(mes == 'SETEMBRO' || mes == 'OUTUBRO' || mes =='NOVEMBRO'){
    mostrar.innerHTML = `<p>a estação do seu mes é <b> PRIMAVERA </b></p>`
    }
    console.log(mostrar)
    //O USUARIO INFORMA O MÊS POR EXTENSO E O SISTEMA INFORMA A ESTAÇÃO DEQUELE MÊS.
}