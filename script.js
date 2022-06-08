// carne - 400gr por pessoa + de 6 horas - 650gr
// cerveja - 1200 ml por pessoa + 6 horas - 2000ml
// refrigerante/ agua - 1000ml por pessoa + 6 horas - 1500ml

// crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    
    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas)
    console.log(qtdTotalCarne);

    resultado.innerHTML = `<p> Para um evento com ${inputAdultos.value} adulto(s), ${inputCriancas.value} criança(s) e duração de ${inputDuracao.value} horas, seriam necessários:</p>`
    resultado.innerHTML += `<p>${qtdTotalCarne / 1000} Kg de Carne <img src="./imagens/carne.png"/></p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} Latas de Cerveja <img src="./imagens/cerveja.png"/></p></p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} Pet's 2L de Bebidas <img src="./imagens/bebidas.png"/></p></p>`

}

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    } else{
        return 400;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    } else{
        return 1200;
    }
}

function bebidasPP(duracao){
    if(duracao >= 6){
        return 1500;
    } else{
        return 1000;
    }
}

function limpar(){
    document.getElementById("campos").reset();
    document.getElementById("resultado").innerHTML = "";
}


    
      
