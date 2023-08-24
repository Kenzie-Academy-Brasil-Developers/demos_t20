// Operadores Lógicos
// Not (!) -> Negação

const verdadeiro = true;

//console.log(!verdadeiro);

const falso = false;

//console.log(!falso);


//const nome = prompt("Insira seu nome:");

// Contante eIgual receber o valor: a variável nome é estritamente identica a "Thiago"
//const eIgual = nome === "Thiago";

//console.log(!eIgual)

//if(!eIgual) {
//    console.log("Você não tem permissão!")
//}

//if(!(nome === "Thiago")) {
//    console.log("Você não tem permissão!")
//}

//---------------------------------------------
// Or (||)-> Ou

const nome = "Thiago";

// A variável nome tem o mesmo valor e tipo que "Thiago" OU a variável nome tem o mesmo valor e tipo que "Chrystian"
// nome === "Thiago" || nome === "Chrystian"

// Se a variável nome tem o mesmo valor e tipo que "Thiago" OU a variável nome tem o mesmo valor e tipo que "Chrystian"
//if (nome === "Thiago" || nome === "Chrystian") {
    //alert(`Seja muito bem-vindo ${nome}`);
//}

//true:            true                 false
//true:            false                true
//false:           false                false
//console.log(nome === "Thiago" || nome === "Chrystian");

// Exemplo sem o operador lógico OU (||):
if (nome === "Thiago") {
    //alert("Seja muito bem-vindo Thiago");
} else if (nome === "Chrystian") {
    //alert("Seja muito bem-vindo Chrystian");
}

//---------------------------------------------
// And (&&) -> E

const username = "alex-o-brabo";
const password = "Batatinha123"

//Username: "alex-o-brabo"
//Password: "Batatinha123"

// A variável username é estritamente idêntica à "alex-o-brabo" E a variável password é estritamente idêntica à "Batatinha123" 
// username === "alex-o-brabo" && password === "Batatinha123"

// Se a variável username é estritamente idêntica à "alex-o-brabo" E a variável password é estritamente idêntica à "Batatinha123" 

if(username === "alex-o-brabo" && password === "Batatinha123") {
    //alert(`Seja muito bem-vindo ADM ${username}!`)
} else {
    //alert("Nome de usuário ou senha incorretos!")
}

//true:                true                         true
//false:               false                        false
//false:               true                         false
//false:               false                        true
//console.log(username === "alex-o-brabo" && password === "Batatinha123")

// Exemplo sem o operador lógico E (&&):
if(username === "alex-o-brabo") {
    if ( password === "Batatinha123") {
        //alert(`Seja muito bem-vindo ADM ${username}!`)
    }
}

// Exemplo com os operadores lógicos
const altura = 1.70;
const genero = "male"
const peso = 56
// Se a variável altura for maior ou igual à 1.70 E a variável genero for estritamente identica a "female" OU a variável peso for maior que 60 E ...  
if(altura >= 1.70 && (genero === "female" || peso > 60) && nome === "Vilson" && username === "vilsun" && password === "Batatinha123") {
    //alert("Você passou no teste do Kenzinho!")
}

if(altura >= 1.70 && true && nome === "Vilson" && username === "vilsun" && password === "Batatinha123") {
    //alert("Você passou no teste do Kenzinho!")
}

//Se a variável altura for maior ou igual à 1.70
if (altura >= 1.70) { 
    // execute o que está aqui:
    //console.log("Passou na primeira condicional!")
    // Se a variável genero for estritamente identica a "female" OU a variável peso for maior que 60
    if(genero === "female" || peso > 60) {
        // execute o que está aqui:
        // Se a variável nome for estritamente identica à "Vilson" E a variável username for estritamente identica à "vilsun" E a variável password for estritamente identica à "Batatinha123"
        if (nome === "Vilson" && username === "vilsun" && password === "Batatinha123") {
            //alert("Você passou no teste do Kenzinho!")
        }
    }
}

// Operadores de incremento e decremento

// Adições
let soma = 0;
soma = soma + 5; //5
soma = soma - 2; //3

// soma = soma + 1
soma++; //4

// soma + 1
++soma; //5

// some = soma + 1
//soma = ++soma

// soma = soma + 5
soma += 5; //10

//Subtrações

let subtracao = 10;
subtracao = subtracao - 5; //5

// subtracao = subtracao - 1
subtracao--; //4

//subtracao - 1
--subtracao; //3

// subtracao = subtracao - 1
//subtracao = --subtracao

//subtracao = subtracao - 2
subtracao -= 2; //1

// Multiplicação
let resultado = 2;
resultado = resultado * 5; //10

// resultado = resultado * 10
resultado *= 10; //100

// Potenciação
resultado = resultado ** 2; // Ao quadrado | resultado:10000
//resultado = resultado ** 3; // Ao cubo
//resultado = resultado ** 10; // Na potencia de 10

//Divisão

resultado = resultado / 100; //100

resultado /= 10; //10

//Resto
//resultado = 10 / 3
//3.3333333333333335
//3.3333333333333335
//3.3333333333333335
//A soma dos inteiros dá 9
//Para descobrir o que resta devemos fazer a seguinte conta:
//10 - 9 //1

//resultado = 10 % 3;
resultado %= 4