console.log("Teste 1 2... Som")

// Verificar se o usuário pode acessar um evento
// - O usuário só pode acessar o evento se tiver a idade maior ou igual de de 18 anos
// - Se o usuário tiver um cupom de desconto ele paga metade do ingresso


const idadeUsuario = 18;
const cupomDesconto = false;

// && retorna verdadeiro caso ambos operandos sejam verdadeiros; caso contrário, retorna falso.
//        TRUE                   TRUE
if(idadeUsuario >= 18 && cupomDesconto === true) {
    //alert("Pode acessar o evento pagando metade do ingresso!");
} else if (idadeUsuario >= 18) {
    //alert("Pode acessar o evento pelo valor integral!");
} else {
    //alert("O usuário não tem permissão de acessar o evento!");
}

// Escreva um algoritmo que leia três valores inteiros e diferentes e mostre-os em ordem decrescente

const valorA = -500;
const valorB = 100;
const valorC = 17;

let resultado = "";

//"posição 1, posição 2, posição 3"

// A é o maior
// A >= B E A >= C
if (valorA >= valorB && valorA >= valorC) {
    //Quem é o segundo? B ou C?
    if(valorB >= valorC) {
        resultado = `${valorA}, ${valorB}, ${valorC}`;
    } else {
        resultado = `${valorA}, ${valorC}, ${valorB}`;
    }
}
//B é o maior
// B >= A E B >= C
else if (valorB >= valorA && valorB >= valorC) {
    //Quem é o segundo? A ou C?
    if(valorA >= valorC) {
        resultado = `${valorB}, ${valorA}, ${valorC}`;
    } else {
        resultado = `${valorB}, ${valorC}, ${valorA}`;
    }
}
//C é o maior
// C >= A E C >= B
else {
    //Quem é o segundo? A ou B?
    if (valorA >= valorB) {
        resultado = `${valorC}, ${valorA}, ${valorB}`;
    } else {
        resultado = `${valorC}, ${valorB}, ${valorA}`;
    }
}

console.log(resultado);


// ------------------------------------------------

const x = 10;
const y = 17.8;
const z = 18;
const genero = "female";

if (genero === "male") {

    // (Se x é maior ou igual à y OU x é menor ou igual à z) E (Se x é maior ou igual à y OU x é menor ou igual à z) 
    if ( (x >= y ||  x <= z) &&
    (x >= y ||  x <= z) ) {
        //(Se x é maior ou igual à y OU x é menor ou igual à z)
        if (x >= y ||  x <= z) {
            console.log("cheguei aqui")

        }
        
    }
} else {
    if ( (x >= y ||  x <= z) &&
    (x >= y ||  x <= z) &&
    (x >= y ||  x <= z)) {

    }
}