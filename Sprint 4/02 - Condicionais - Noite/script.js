// Incremento
let soma = 0;
soma = 4 + 2; //6

soma = soma + 4; // 6 + 4 = 10

soma = soma + 2; // 10 + 2 = 12
soma += 2; // 12 + 2 = 14

soma += 1; //14 + 1 = 15
soma++; //15 += 1 -> 16

soma++; //16 += 1 -> 17
soma++; //17 += 1 -> 18
soma++; //18 += 1 -> 19
soma++; //19 += 1 -> 20
// console.log(soma);

// Decremento
let soma2 = 20;

soma2 = soma2 - 2; // 20 - 2 = 18
soma2 -= 2;        // 18 - 2 = 16
soma2--;           // 16 - 1 = 15
// console.log(soma2);

soma2 *= 2; //15 * 2 = 30
// console.log(soma2);

soma2 /= 3; //30 / 3 = 10
// console.log(soma2);



// TEMPLATE STRING
let tipoEscola = 'Academy';

const texto = `Kenzie ${tipoEscola} Brasil`;
const textoTradicional = 'Kenzie ' + tipoEscola + ' Brasil'; 

console.log(texto);
console.log(texto[4-1]);

// K e n z i e
// 1 2 3 4 5 6 -> Posição
// 0 1 2 3 4 5 -> Indice


// Entrada e saida de dados
// alert('CUIDADO! Você foi Hackeado');
// let retorno = prompt('Digite sua senha!!!');
// console.log(retorno);

const peso = prompt('Digite seu peso');
const altura = prompt('Digite sua altura');

const imc = peso / (altura * altura);

// alert(`Seu IMC é: ${imc}`);

// COMPARADORES

/*
> - maior
< - menor
>= - maior igual
<= - menor igual
== - igual
=== - estritamente igual
!= - diferente
!== - estritamente diferente
*/
// CONDICIONAIS
console.log(imc);
console.log(imc.toFixed(2));

if(imc < 18.5){ //51 < 18.5 -> false
    console.log('Baixo peso');
}else if(imc < 25){  // 51 < 25 -> false
    console.log('Normal');
}else if(imc < 30){  // 51 < 30 -> false
    console.log('Sobrepeso');
}else{
    console.log('Obesidade');
}


