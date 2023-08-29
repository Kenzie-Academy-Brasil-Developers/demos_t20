//Formatação de data
function formataDecimal(numero) {
    if(numero.length < 2) {
        numero = "0" + numero;
    }

    return numero;
}

function formataAno(ano) {
    if (ano.length === 2) {
        if (ano > 23) {
            ano = "19" + ano
        }
        else {
            ano = "20" + ano;
        }
    }
    
    return ano;
}

let dia = "9";
let mes = "8";
let ano = "80";

// .length ele nos diz a quantidade de caracteres de uma String
//console.log(dia.length)


dia = formataDecimal(dia);
mes = formataDecimal(mes);
ano = formataAno(ano)

//if(dia.length < 2) {
//    dia = "0" + dia;
//}
//
//if(mes.length < 2) {
//    mes = "0" + mes;
//}

// 09/08/2023
const dataFormatada = `${dia}/${mes}/${ano}`;

//const dataFormatada = `${formataDecimal(dia)}/${formataDecimal(mes)}/${ano}`;


//----------------------------------------------
//Escopos

// Escopo Global
const nome = "Vilson";

//Escopo de Bloco
{
    //Uma variável criada dentro de um escopo de bloco só existe no escopo de bloco 
    const idade = 26;
    //let idade = 26;

    //A variável do tipo VAR é uma exceção 
    //Não utilizamos VAR -> Má prática
    //var idade = 26;
    
    console.log(nome)
}
//console.log(idade)

//Escopo de Função
function teste() {
    const sobrenome = "Padilha";
    if (true) {
        console.log("Dentro do if: " + sobrenome);
    }

    console.log("Dentro da função: " + sobrenome);
}

//console.log("Fora da função: " + sobrenome);

//teste()


//----------------------------------------------------------------
function ePar (numero) {
    // Se a sobra da divisão (numero / 2) é estritamente idêntico à 0.
    if(numero % 2 === 0) {
        console.log(`O número ${numero} é par`);
        return true;
    } else {
        console.log(`O número ${numero} não é par`);
        return false;
    }
}

//ePar(3);
//ePar(2);

function eImpar (numero) {
    
    // O retorno da função eMultiplo(numero, 2) é identico a false
    if (eMultiplo(numero, 2) === false) {
        console.log(`O número ${numero} é impar`);
        return true;
    } else {
        console.log(`O número ${numero} não é impar`);
        return false;
    }
}

function eMultiplo (numero, multiplo) {
    if (numero % multiplo === 0) {
        console.log(`O número ${numero} é múltiplo de ${multiplo}!`);
        return true;
    } else {
        console.log(`O número ${numero} não é múltiplo de ${multiplo}!`);
        return false;
    }
}