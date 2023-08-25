const username = prompt('Digite a sua username'); 
const senha = prompt('Digite a sua senha');

console.log(username, senha);

if(username == 'Thiago'){
    if(senha == '1234'){
        alert(`Bem vindo ${username}`);
    }
    else{
        alert('Usuário ou senha inválidos')
    }
}else if(username == 'Vilson'){
    if(senha == '4321'){
        alert(`Bem vindo ${username}`);
    }
    else{
        alert('Usuário ou senha inválidos')
    }
}else{
    alert('Usuário ou senha inválidos')
}

if((username == 'Thiago' && senha == '1234') || (username == 'Vilson' && senha == '4321')){
    alert(`Bem vindo ${username}`);
}else{
    alert('Usuário ou senha inválidos');
}

/* AND - && (e)
true && true = true
true && false = false
false && true = false
false && false = false
*/

/* OR - || (ou)
true || true = true
true || false = true
false || true = true
false || false = false
*/

// NOT - ! (negação)
// !true = false
// !false = true


// TIRA-DÚVIDAS
/*
//Exemplo 1 
let var1 = 12;
let var2 = 'Kenzie';
let var3 = true;
let var4 = '15.22'

console.log(typeof var1); //'number'
console.log(typeof var2); //'string'
console.log(typeof var3); //'boolean'
console.log(typeof var4); //'string'

var4 = parseFloat(var4); //15.22
var4 = parseInt(var4); //15
console.log(typeof var4); //'number'

Exemplo 2 
let width = 200;
let porcent = parseInt(prompt('Digite o tamanho em porcentagem'));
let largura = 200 * (porcent/100);

document.querySelector('div').style.width = `${largura}px`

*/



