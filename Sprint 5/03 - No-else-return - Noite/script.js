function format2Decimals(n){ //12
    const str = `${n}`;      //'12'
    if(str.length < 2){      //2 < 2 -> false
        return '0' + str;
    }
    return str;          // return '12'
}

//2022 -> 22
//1998 -> 98
function formatYear(n){
    const str = `${n}`;
    if(str.length == 4){
        return n;
    }

    if(n > 23){
        return '19'+str;
    }
    return '20'+str;
    
}

const dia = prompt('Dia');
const mes = prompt('Mês');
const ano = prompt('Ano');

const formatado = `${format2Decimals(dia)}/${format2Decimals(mes)}/${formatYear(ano)}`;

alert(formatado);






// Função para verificar se um numero é par
function isPair(n){ 
    if(n % 2 == 0){ 
        return true;
    }
    return false;
}

// const numero = parseInt( prompt('Digite um numero') );
// console.log(isPair(numero));

// Verificação de numero multiplo
function isMultiple(n, div){
    if(n % div == 0){
        return `${n} é divisivel por ${div}`;
    }
    return `O resto da divisão de ${n} por ${div} é: ${n % div}`;
}

// const divisor = parseInt(prompt('Digite um divisor'));
// console.log(isMultiple(numero, divisor));


// Verifica se um numero é inteiro
function isInteger(n){
    if(n === parseInt(n)){
        return true;
    }
    return false;
}

// console.log(isInteger(3.1415));

/*
parseInt() -> converte um valor para numero inteiro
parseFloat() -> converte um valor para numero com ponto flutuante
toLowerCase() -> converte todos os caracteres de ums string para minusculo
toUpperCase() -> converte todos os caracteres de ums string para maiusculo
*/

// Verificar se todos os caracteres são do mesmo tamanho
function isAllSameCase(str){
    if(str == str.toLowerCase() || 
        str == str.toUpperCase() ){
        return true;
    }else{
        return false;
    }
}   

// console.log(isAllSameCase('THIAGO'));
