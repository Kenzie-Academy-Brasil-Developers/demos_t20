// Sem No-else-return
//function formatDecimal (number){
//    let text = `${number}`;
//    if (text.length < 2) {
//        return "0" + text;
//    } 
//    else {
//        return text;
//    }
//}

// Com No-else-return 
// No-else-return só pode ser realizado dentro de funções, pois só em funções vamos ter um return
function formatDecimal (number){
    let text = `${number}`;
    if (text.length < 2) {
       return "0" + text;
    } 
    // No-else-return
    // Não ao else, somente o return
    return text;
}

//9 -> entrada
//09 -> saída

const day = 8;
const month = 5;
const year = 2023;

const formatDate = `${formatDecimal(day)}/${formatDecimal(month)}/${year}`;

//-----------------------------------------------------

//function checkPair(number) { 
//    if(number % 2 === 0) {
//        return true;
//    }
//
//    return false;
//}

// Outra forma de resolução
function checkPair(number) {
    // Uma comparação se transforma em true/false 
    return number % 2 === 0;
}

function isMultiple (number, divider) {
    if (number % divider === 0) {
        return true;
    }

    return false;
}

isMultiple(5, 2);

// Resolução fora de uma função
//let isMultipleVariable;
//const number = 10;
//const divider = 2;
//
//if (number % divider === 0) {
//    isMultipleVariable = true;
//} else {
//    isMultipleVariable = false;
//}

//Parâmetro: A entrada de dados, nessa função seria o insumo
function factory (insumo) {
    // processo que vai utilizar esse dado de alguma forma
    const resultado = insumo + " Processado(a)";

    // Saída de algo após o processo
    return resultado;
}

console.log(factory("Madeira"));
console.log(factory("Água"));
console.log(factory("Areia"));

factory("Batata")

//Quando for criar uma função planeje:
// - Os parâmetros, entrada da função.
// - O que vai ser retornado.