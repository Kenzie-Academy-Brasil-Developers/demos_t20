//Funções internas: Funções criadas dentro de outra função

function calculadora (primeiroNumero, segundoNumero, operacao) {
    
    //Declarar funções
    // Somar
    function somar (numero1, numero2) {
        return numero1 + numero2;
    }
    
    // Subtrair
    function subtrair (numero1, numero2) {
        return numero1 - numero2;
    }

    // Multiplicar
    function multiplicar (numero1, numero2) {
        return numero1 * numero2;
    }

    // Dividir
    function dividir (numero1, numero2) {
        return numero1 / numero2;
    }

    // Potenciação
    function potenciacao (numero1, numero2) {
        return numero1 ** numero2;
    }

    // Verificando e realizando operação
    function verificarOperacao () {
        if (operacao === "+") {
            return somar(primeiroNumero, segundoNumero);
        }
        else if (operacao === "-") {
            return subtrair(primeiroNumero, segundoNumero);
        }
        else if (operacao === "*") {
            return multiplicar(primeiroNumero, segundoNumero);
        }
        else if (operacao === "/") {
            return dividir(primeiroNumero, segundoNumero);
        }
        else if (operacao === "**") {
            return potenciacao(primeiroNumero, segundoNumero);
        }
        
        return NaN;
    }


    //Execuções
    const resultado = verificarOperacao();

    return resultado;
}

//console.log(calculadora(5, 2, "**"));
//console.log(calculadora(5, 2, "*"));
//console.log(calculadora(5, 2, "-"));
//console.log(calculadora(5, 2, "+"));
//console.log(calculadora(5, 2, "/"));
//console.log(calculadora(5, 2, "Batata"));


//let num1 = prompt("Digite o primeiro número:");
//num1 = parseInt(num1);

//const op = prompt("Digite a operação a ser feita:");

//let num2 = prompt("Digite o segundo número:");
//num2 = parseInt(num2);

//let resultado = calculadora(num1, num2, op);
//alert(`O resultado da sua operação foi ${resultado}`);

//-------------------------------------------------------
// Métodos Primitivos

// Métodos de números
// parseInt: Transformar em número inteiro
//console.log(parseInt("8.5"));
//console.log(parseInt(8.5));
//console.log(parseInt("100"));

// parseFloat: Transformar uma sting em um número flutuante
//console.log(parseFloat("8.5"));
//console.log(parseFloat("8.00000000000001"));
//console.log(parseFloat(8));

//toFixed: Formatar o número para a quantidade de notações depois do ponto decimal, sempre arredondando

const numero = 16.7537;
//console.log(numero.toFixed(1));
//console.log(numero.toFixed(2));
//console.log(numero.toFixed(3));
//console.log(numero.toFixed());

//const numInt = 55;
//console.log(numInt.toFixed(2));

//console.log(parseFloat(numero.toFixed(3)));

//isInteger: Verifica se o valor passado é um número é inteiro

//console.log(Number.isInteger("Batata"));
//console.log(Number.isInteger(10.5));
//console.log(Number.isInteger(10));

//toString: Transforma um número em uma string

const teste = numero.toString();
//console.log(teste);

// Exemplo de uso
let pesoEntrada = "58.4";
let alturaEntrada = "1.68";

function calculoIMC(peso, altura) {
    peso = parseFloat(peso);
    altura = parseFloat(altura);

    const resultado = peso / (altura * altura);


    return resultado.toFixed(2);
}

//console.log(calculoIMC(pesoEntrada, alturaEntrada));

// Métodos de String
//replace: Altera o primeiro caractere ou conjunto de caracteres para outra string

const texto = "Eu vendo batatas em uma loja que vende batatas!"
console.log(texto);

//console.log(texto.replace("batatas", "churros"));
//console.log(texto.replace("Eu vendo batatas", "Doando churros"));
//console.log(texto.replace("v", "t"));

//replaceAll: Alterar todos que possuem um caractere ou conjunto de caracteres para outra string
//console.log(texto.replaceAll("batatas", "churros"));
//console.log(texto.replaceAll("a", "o"));

//includes: Verifica se existe um caractere ou ou conjunto de caracteres especifico dentro de uma string
//console.log(texto.includes("batatas"));
//console.log(texto.includes("abobrinha"));
//console.log(texto.includes("Eu vendo"));
//console.log(texto.includes("Eu compro"));
//console.log(texto.includes("z"));
//console.log(texto.includes("Batatas"));

//toUpperCase: retorna o valor da string original convertido em letras maiúsculas

//console.log(texto.toUpperCase());
//console.log("hello".toUpperCase());

//toLowerCase: retorna o valor da string original convertido em letras minúsculas

//console.log(texto.toLowerCase());
//console.log("HELLO".toLowerCase());

//startsWith: determina se uma string começa com os caracteres especificados, retornando true ou false.

console.log(texto.startsWith("Eu vendo"));
console.log(texto.startsWith("Nós vendemos"));










