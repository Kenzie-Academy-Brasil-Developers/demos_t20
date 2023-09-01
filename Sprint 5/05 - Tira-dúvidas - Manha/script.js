//Bug de Sintaxe / Erro de sintaxe: Quando a linguagem não é escrita corretamente
//const soma (num1, num2) {
//    return num1 - num2;
//}

//Bug de Lógica / Erro de Lógica
//function soma (num1, num2) {
//    return num1 - num2;
//}

//Debugar é resolver um bug/erro
function soma (num1, num2) {
    return num1 + num2;
}

//console.log(soma(5, 6));


const numero = 5.56
// 0 até o 5 o toFixed arredonda para baixo, acima disso ele arredonda para cima
console.log(numero.toFixed(1));


//Calcula IMC
function calculaIMC (peso, altura) {
    let imc = peso / (altura * altura);
    //let imc = peso / (altura ** 2);
    imc = imc.toFixed(2)
    console.log(imc)


    if (imc < 18.5) {
        return `Seu IMC é ${imc} e você está a baixo do peso ideal!`
    }
    else if (imc <= 24.99) {
        return `Seu IMC é ${imc} e você está com o peso ideal!`
    }
    else if (imc <= 29.99) {
        return `Seu IMC é ${imc} e você está acima do peso ideal!`
    }
    
    return `Seu IMC é ${imc} e você está muito acima do peso ideal!`
    
 }

 console.log(calculaIMC(58, 1.68));

 // ---------------------------------------

 function compra(valorUnitario, quantidade) {
    let valorTotal = valorUnitario * quantidade;

     if (quantidade >= 10) { // Condição para desconto de 20%
        //valorTotal = valorTotal - (valorTotal * 0.2);
        valorTotal -= (valorTotal * 0.2);
     } else if (quantidade >= 5) { // Condição para desconto de 10%
        //valorTotal = valorTotal - (valorTotal * 0.1);
        valorTotal -= (valorTotal * 0.1);
     }

    // formatando o resultado com duas casas decimais.
    valorTotal = valorTotal.toFixed(2)

    // substituir o ponto por vírgula na string do valor total
    valorTotal = valorTotal.replace(".", ",")

    //Forma alternativa -> Duas etapas lógicas em um
    //valorTotal = valorTotal.toFixed(2).replace(".", ",")

    // deve retornar uma mensagem no seguinte formato: "O valor total da compra é R$ <valorTotal>."
    return `O valor total da compra é R$${valorTotal}.`

    //Forma alternativa -> Três etapas lógicas em uma
    // return `O valor total da compra é R$${valorTotal.toFixed(2).replace(".", ",")}.`

 }

 console.log(compra(1, 10)) //8,00
 console.log(compra(1, 5)) //4,50
 console.log(compra(1, 4)) //4,00
