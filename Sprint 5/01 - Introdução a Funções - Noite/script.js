let contador = 0;

function nomeDaFuncao(){
    contador++;
    if(contador % 2 == 0){
        return 'par';
    }else{
        return 'impar';
    }
}
// let retornoDaFuncao = nomeDaFuncao();
// alert(`O valor ${contador} é ${retornoDaFuncao}`);
// alert(retornoDaFuncao);






function calculaIMC(p1, p2){
    const imc = p1 / (p2**2);
    return imc.toFixed(2);
}

function classificaIMC(imc){
    let classificao = '';

    if(imc < 18.5){
        classificao = 'Abaixo do peso';
    }else if(imc < 25){
        classificao = 'Peso ideal';
    }else if(imc < 30){
        classificao = 'Sobrepeso';
    }else{
        classificao = 'Obeso';
    }

    return `Você está classificado como: ${classificao}`;
}


const peso = prompt('Peso');
const altura = prompt('Altura');

const resultadoIMC = calculaIMC(peso, altura);

const classificacao = classificaIMC(resultadoIMC);
alert(classificacao);






// Exemplos calculadora

function soma(a,b){
    return a+b;
}

function potencia(a,b){
    return a**b;
}

function calculadora(a,b,op){
    if(op == '+'){
        const resultado = soma(a,b);
        return resultado;
    }else if(op == '**'){
        const resultado = potencia(a,b); 
        return resultado;
    }
}