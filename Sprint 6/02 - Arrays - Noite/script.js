// Laço de repetição com FOR

// inicialização ; condição ; iteração

for(let i = 1 ; i <= 10 ; i++){
    // console.log(i);
}

let str = 'Kenzie Academy';

let strInvertida = "";
for(let i = str.length - 1 ; i>=0 ; i--){
    let char = str[i];
    strInvertida += char;
    // console.log(strInvertida);
}



// ARRAY
let arr = [];


arr.push(1);
arr.push(2);
arr.push(3);

arr.unshift(0);

arr.push('Thiago');
arr.push(true);
arr.push(false);

console.log(arr);

console.log(arr[3]);

let tamanhoArray = arr.length; //7
console.log(arr[tamanhoArray])

let strTamanho = str.length;
console.log(str[strTamanho]);

// 'K e n z i e   A c a d e  m  y' .length -> 14
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13

// length - 1 = ultimo indice




// Exemplo percorrendo array

let lista = ['Thiago', 'Vilson', 'Yan', 'Gabriel'];

function verificaValor(arr, str){
    for(let i = 0; i < arr.length ; i++){
        if(arr[i] == str){
            return `Encontrei a palavra ${str} no indice ${i}`;
        }
    }
    return 'Não encontrei a palavra '+str;
}

console.log(verificaValor(lista, 'Thiago'));


let novoArr = [1,2,3];
let numero = 15;
novoArr.push(numero);
console.log(novoArr[3]);

/*
let soma = 0;
soma = soma + 1; //1
soma = soma + 1; //2
soma++;          //3
soma+=1;         //4
soma+=2;         //6

soma = soma - 1; //5
soma--;          //4
soma-=1;         //3
soma-=2;         //1

soma = soma * 2; //2 
soma = soma / 2; //1
*/