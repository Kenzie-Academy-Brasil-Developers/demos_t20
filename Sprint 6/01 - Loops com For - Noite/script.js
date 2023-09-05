// Laços de repetição

// if(variavel<2){

// }

// enquanto, durante
// for(/*inicialização*/ ; /*condição*/ ; /*iteração*/ ){

// }

/*
Inicialização: trecho que será executado antes da primeira iteração
Condição: Condição para execução do loop
Iteração: Será executado a cada loop

*/

// for(let i = 1 ; i < 10 ; i++ ){
//     console.log(i);
// }
// console.log('Finalizou o loop');

// i = 1 -> true
// i = 2 -> true 
// i = 3 -> true
// ...
// i = 8 -> true
// i = 9 -> true
// i = 10 -> false

const str = "Kenzie Academy Brasil";
let strAux = "";

for(let i = 0 ; i < str.length ; i++){
    let char = str[i];
    if(char.toLowerCase() == 'a'){
        strAux+='*';
    }else{
        strAux+=char;
    }
    console.log(strAux);
}

// let soma = 0;

// for(let i = 1 ; i <= 5 ; i++){
//     let nota = parseFloat(prompt('Digite uma nota!'));
//     soma += nota;
// }

// console.log(`Soma: ${soma}`);
// console.log(`Media: ${soma/5}`);


// let soma = 0;

// for(let i = 5 ; i<=100 ; i+=5){
//     soma+=i;
//     console.log(i, soma)
// }
// console.log(soma);

// LAÇO DE REPETIÇÃO INFINITO
// for(let i = -1 ; i < 0 ; i--){
//     console.log(i);
// }
/*
i = 9 -> TRUE
i = 8 -> TRUE
i = 7 -> TRUE
...
i = 1 -> TRUE
i = 0 -> FALSE
*/




function teste(){
    let soma = 0;
    for(let i = 0 ; i < 10 ; i+=5){
        if(i%2 == 0){
            soma+=i;
        }
    }
    return soma;
}

console.log(teste());

let soma = 0;
let count = 0; 

for(let i = 50 ; i <= 70 ; i++){
    soma += i;
    count++;
}

const media = soma/count;
console.log(media);