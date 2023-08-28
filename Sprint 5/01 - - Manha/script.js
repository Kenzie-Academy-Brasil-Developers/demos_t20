// Parâmetro: A entrada de dados
function nomeFuncao() {
    //onde o código é executado

    // Retorno da função: Saída de dados
    return "essa string vai ser a saída dessa função"
}

//nomeFuncao();
//console.log(nomeFuncao());

// Alocamos o retorno de uma função em uma variável
const executado = nomeFuncao();
//console.log(executado);

let contador = 0;

//Criação da função
function adicionarContador () {
    //contador = contador + 1
    contador++
}

//console.log(contador);

//Execução da função
adicionarContador();
adicionarContador();
adicionarContador();
adicionarContador();
//console.log(contador);

// Parâmetros são a entrada de dados em uma função
function soma(primeiroNumero, segundoNumero) {
    // Processo
    const resultado = primeiroNumero + segundoNumero;
    //Saída de dados
    return resultado
}

//soma(15,10);
//console.log(soma(15,10));

function subtrai(primeiroNumero, segundoNumero) {
    const resultado = primeiroNumero - segundoNumero;
    return resultado;
}

contador = subtrai(contador, 1);
//console.log(contador);
contador = subtrai(contador, 2);
//console.log(contador);

function calculadora(primeiroNumero, sinal, segundoNumero) {
    //processo

    if(sinal === "+") {
        // retorne o resultado da operação primeiroNumero + segundoNumero 
        return primeiroNumero + segundoNumero;
        console.log("Churros")
    }
    else if (sinal === "-") {
        return primeiroNumero - segundoNumero;
    }
    else if (sinal === "*") {
        return primeiroNumero * segundoNumero;
    }
    else if (sinal === "/") {
        return primeiroNumero / segundoNumero;
    }
    else {
        alert("Operação inválida")
        return 0;
    }

    console.log("Batata");
}

let resultado = 0;

resultado = calculadora(10, "+", 20);
//console.log(resultado); //30

resultado = calculadora(resultado, "-", 15);
//console.log(resultado); //15

resultado = calculadora(resultado, "/", 3);
//console.log(resultado); //5

resultado = calculadora(resultado, "*", 4);
//console.log(resultado); //20

//resultado = calculadora(resultado, "**", 2);
//console.log(resultado);

//--------------------------------------------------------
//Calculo IMC
// Para obter o IMC, basta dividir o seu peso (em quilos) pela altura (em metros) elevada ao quadrado (altura x altura)


//Resultado	            Situação
//Entre 18,5 e 24,99	Peso normal
//Entre 25 e 29,99	    Acima do peso
//Entre 30 e 34,99	    Obesidade I
//Entre 35 e 39,99	    Obesidade II (severa)

//Entrada: peso, altura
 function calculaIMC (peso, altura) {
    let imc = peso / (altura * altura);
    //let imc = peso / (altura ** 2);


    if (imc < 18.5) {
        return `Seu IMC é ${imc} e você está a baixo do peso ideal!`
    }
    else if (imc <= 24.99) {
        return `Seu IMC é ${imc} e você está com o peso ideal!`
    }
    else if (imc <= 29.99) {
        return `Seu IMC é ${imc} e você está acima do peso ideal!`
    }
    else {
        return `Seu IMC é ${imc} e você está muito acima do peso ideal!`
    }
 }

 let resultadoIMC = calculaIMC(57, 1.68);
 console.log(resultadoIMC);

 resultadoIMC = calculaIMC(50, 1.68);
 console.log(resultadoIMC);

 resultadoIMC = calculaIMC(73, 1.68);
 console.log(resultadoIMC);

 resultadoIMC = calculaIMC(90, 1.68);
 console.log(resultadoIMC);
