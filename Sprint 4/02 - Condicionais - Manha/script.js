// String
//console.log("Isso é uma 'cebola'");
//console.log('Isso é uma "Batata"');
//console.log(`Teste 3 "" ''`);

const nomeUsuario = "Karina";

//Template String
const mensagemUsuario = `Seja muito bem vindo(a) ${nomeUsuario}!`;

//Concatenação de strings
const mensagemUsuarioV2 = "Seja muito bem vindo(a) " + nomeUsuario + "!";

//console.log(mensagemUsuarioV2);

// Prompt -> Entrada de dados, forma que o usuário envia um dado
//const idadeUsuario = prompt("Insira a sua idade");
//console.log(idadeUsuario);

// Alert -> Saída de dados, uma forma de enviar um alerta, uma mensagem, para o usuário
//const mensagemIdade = `A sua idade é ${idadeUsuario}!`;
//alert(mensagemIdade)
//alert("Seja muito bem-vindo(a)")

// Compararadores / Operadores de Comparação

// > : Maior
// 10 > 5
// O número 10 é maior que o número 5?
// true : verdadeiro

//-------------------------------------
// < : Menor
// 10 < 5
// O número 10 é menor que o número 5?
// false : falso

//-------------------------------------
// >= : Maior ou igual
// 10 >= 10
// O número 10 é maior ou igual que o número 10?
// true : verdadeiro

// 10 >= 11
// O número 10 é maior ou igual que o número 11?
// false : falso

// 10 >= 5
// O número 10 é maior ou igual que o número 5?
// true : verdadeiro

//-------------------------------------
// <= : Menor ou igual
// 10 <= 9
// O número 10 é menor ou igual que o número 9?
// false : falso

//-------------------------------------
// == : Idêntico (Não verifica tipo de dado)
// 10 == 10
// 10 tem o valor identico à 10?
// true : verdadeiro

//"Batata" == "Batata"
// Batata tem o valor identico à Batata?
// true : verdadeiro

//"Batata" == 'Batata'
// Batata tem o valor identico à Batata?
// true : verdadeiro

// 10 == "10"
// 10 tem o valor identico à 10?
// true : verdadeiro

//-------------------------------------
// === : Estritamente Idêntico (Verifica tipo de dado)

// 10 === 10
// 10 tem o valor e o tipo de dado estritamente identico à 10?
// true : verdadeiro

//"Batata" === "Batata"
// Batata tem o valor e o tipo de dado estritamente identico à Batata?
// true : verdadeiro

//"Batata" === 'Batata'
// Batata tem o valor e o tipo de dado estritamente identico à Batata?
// true : verdadeiro

// 10 === "10"
// 10 tem o valor e o tipo de dado estritamente identico à 10?
// false : falso

//-------------------------------------
// != : Diferente
// "Batata" != "Churros"
// Batata tem o valor diferente de Churros?
// true : verdadeiro

//"Batata" != "Batata"
// Batata tem o valor diferente de Batata?
// true : verdadeiro

// 10 !== "10"
// 10 tem o valor diferente de 10?
// false : falso

//-------------------------------------
// !== : Estritamente Diferente
// 10 !== "10"
// 10 tem o valor e o tipo de dado estritamente diferente de 10?
// true : verdadeiro


//-------------------------------------

//Estrutura de condicionais

const entradaNome = prompt("Insira seu nome:")

// Se entradaNome tem o mesmo valor e tipo de dado que Chrystian
if( entradaNome === "Chrystian") {
    //execute isso
    alert("Seja muito bem vindo Chrystian!")
}

//Senão, se entradaNome tem o mesmo valor e tipo de dado que Thiago
else if (entradaNome === "Thiago") {
    //Execute isso
    alert("Seja muito bem vindo Mestre Thiago!")
}

// Senão
else {
    // Execute isso
    alert(`Bem vindo ${entradaNome}!`)
}

alert("Olá, sou eu de novo!")


// ----------------------------------------------
// undefined é um valor não definido

let batata; // valor não foi definido
let Cebola = true; // valor foi definido

// null é um valor vazio, que não existe