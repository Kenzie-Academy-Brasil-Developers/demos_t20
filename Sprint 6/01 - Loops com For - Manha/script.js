//O que é um laço de repetição?
// É uma instrução que possibilita repetir a execução de um trecho de código 

// Inicialização: variável que inicia a contagem, que vai ser alterada futuramente;
// Condição de continuidade: Uma condição de continuação do loop, enquanto for verdadeiro, o loop vai continuar sendo executado;
// Incremento/interação: a alteração na variável de inicialização;

//for(inicialização; condição; interação) {
    //O trecho de código a ser repetido 
//}

//      index/indice           i = i + 1
/*
for(let i = 0; i <= 10; i++) {
    console.log(i);
}
*/

//--------------------------------------------
// Loop com While
// inicialização
//while (condição) {
    //Execução do bloco

    //interação
//}

//let contador = 0;
//while (contador <= 10) {
//    console.log(contador);

//    contador++;
//}

//--------------------------------------------

/*
let contador = 0;
contador += 7;
contador /= 2;

for(let i = contador; i <= 70; i++) {
    console.log(i);
    contador = i;
}

// Forma alternativa:
for(contador; contador <= 70; contador++) {
    console.log(contador);
}
*/
//--------------------------------------------

/*
for (let i = 1; i <= 10; i++) {
    const resultado = 5 * i;
    console.log(`5 x ${i} = ${resultado}`);
    //console.log(`5 x ${i} = ${ 5 * i}`);
}
*/

// Loops com String
//let texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nulla lacus. Donec facilisis justo ipsum, nec venenatis massa feugiat vel. Nullam finibus gravida ex, at consequat odio vehicula non. Ut lobortis leo tellus, ut luctus libero hendrerit id. Phasellus porttitor facilisis lorem vel ultrices. Ut mauris metus, viverra id tellus semper, accumsan vehicula nisl. Donec ut libero eget nisl egestas consequat. Nam auctor volutpat ante. Maecenas quis lacus auctor, volutpat libero pellentesque, pharetra dui.";

let texto = "Eu compro churros em uma loja de batatas";

//Contando as vogais
/*let qtdVogais = 0;

for(let i = 0; i < texto.length; i++) {
    let caractereAtual = texto[i];
    caractereAtual = caractereAtual.toLowerCase()

    if(caractereAtual === "a" || 
       caractereAtual === "e" || 
       caractereAtual === "i" || 
       caractereAtual === "o" || 
       caractereAtual === "u" ) {
        //qtdVogais++;
        qtdVogais = qtdVogais + 1;
    }
}

console.log(qtdVogais);

// Mostrar cada um dos caracteres
for(let i = 0; i < texto.length; i++) {
    console.log(texto[i]);
}
*/

// Como acessar um caractere
//console.log(texto[0]) // Acessando o primeiro caractere
//console.log(texto.length - 1) // Como descobrimos o indice do último caractere
//console.log(texto[texto.length - 1]) // Acessando o último caractere


//------------------------------------------------------------------

/*
for(let i = 100; i > 1; i--) {
    console.log(i);
}
*/

/*for(let i = texto.length - 1; i >= 0; i--) {
    console.log(texto[i]);
}*/