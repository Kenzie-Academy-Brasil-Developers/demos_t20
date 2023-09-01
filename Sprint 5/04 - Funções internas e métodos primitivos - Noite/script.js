// Métodos primitivos
const numero1 = 12;
const numero2 = 3.1415;
const string1 = 'Kenzie Academy Brasil';
const string2 = 'Brasil';
const string3 = '12.1522';


// MÉTODOS DE NUMBER
// toFixed()
console.log(typeof numero1.toFixed(2));
console.log(numero2.toFixed(2));

// isInteger()
console.log(Number.isInteger(numero1)); //12
console.log(Number.isInteger(numero2)); //3.1415

function isInteger(n){
    if(n === parseInt(n)){
        return true;
    }
    return false;
}

console.log(isInteger(numero1)); //12
console.log(isInteger(numero2)); //3.1415

// parseInt
console.log(parseInt(numero2));

// parseFloat
console.log(typeof parseFloat(string3));
console.log(parseFloat(string3));

// toString
console.log(typeof numero2.toString())
console.log(numero2.toString())




// MÉTODOS DE STRING

// replace
console.log(string1.replace('Academy','Escola')); //"Kenzie Academy Brasil"
// string1 = string1.replace('Academy','Escola');

// replaceAll
console.log(string1.replaceAll('e','#')); //"Kenzie Academy Brasil"

// startsWith
// 'Kenzie Academy Brasil';
console.log(string1.startsWith('Kenzie'));
console.log(string1.startsWith('K'));
console.log(string1[0] == 'K');
console.log(string1.startsWith('Academy'));

// includes
console.log(string1.includes('EUA'));
console.log(string1.includes('Brasil'));

// toUpperCase()
console.log(string1.toUpperCase());

// toLowerCase()
console.log(string1.toLowerCase());



function calculadora(a,b,op){
    function soma(n1,n2){
        return n1+n2;
    }
    function mult(n1,n2){
        return n1*n2;
    }

    if(op == '+'){
        return soma(a,b);
    }else if(op == '*'){
        return mult(a,b)
    }
}

// console.log(calculadora(3,4,'*'));

// console.log(soma(2,2));
// console.log(mult(2,2));

function vaca(){
    console.log('muuuuuu');
}

const mimosa = vaca;
// vaca();
// mimosa();

const dia = '02/08/2022';

console.log(dia.replaceAll('/','-'));