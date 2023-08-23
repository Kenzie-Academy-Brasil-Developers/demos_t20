// undefined é um valor não definido

let batata; // valor não foi definido
let cebola = true; // valor foi definido

// null é um valor vazio, que não existe
let cenoura = null;

//NaN -> Not a Number
// "a" * 5

let texto = null;

// Alguma execução

//texto = prompt("Insira um valor:");

//--------------------------------------------------

// if, else if sem ELSE

if (texto === null) {
    //alert("Texto é nulo/vazio!")
}
else if (texto === undefined) {
    //alert("O texto não foi definido!")
}

// if, else if sem ELSE (Podemos colocar quantos else if's que precisarmos)

if (texto === null) {
   // alert("Texto é nulo/vazio!")
}
else if (texto === undefined) {
    //alert("O texto não foi definido!")
}
else if (texto === "Lorena") {
    //alert("Bem vinda Lorena!")
}
else if (texto === "Alex") {
    //alert("Bem vindo Alex!")
}



// Com if e else, mas  sem ELSE IF

if (texto === null) {
    //alert("Texto é nulo/vazio!")
}
else {
    //alert(`O texto é: '${texto}'`)
}

// Com if, else if e else

if (texto === null) {
    //alert("Texto é nulo/vazio!")
}
else if (texto === undefined) {
    //alert("O texto não foi definido!")
}
else {
    //alert(`O texto é: '${texto}'`)
}

// Acessando filmes no cinema
const idade = prompt("insira a sua idade");

if (idade >= 18) {
    alert("Você pode entrar em todas as seções")
} 
else if (idade >= 16) {
    alert("Você pode entrar em todas as seções que tem classificação de até 16 anos")
}
else if (idade >= 14) {
    alert("Você pode entrar em todas as seções que tem classificação de até 14 anos")
}
else if (idade >= 12) {
    alert("Você pode entrar em todas as seções que tem classificação de até 12 anos")
}
else if (idade >= 10) {
    alert("Você pode entrar em todas as seções que tem classificação de até 10 anos")
}


else {
    alert("Você só pode acessar a seção livre")
}