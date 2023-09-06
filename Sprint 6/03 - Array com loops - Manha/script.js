const instrutores = ["Alex", "Chrystian", "Lorena", "Thiago", "Vilson"];
//                     0           1          2         3         4
console.log(instrutores);

// Adicionar um(a) instrutor(a) a lista, caso não esteja nela
/*function adicionaInstrutor(nome) {
    let estaNaLista = false;

    for(let i = 0; i < instrutores.length; i++) {
        //Acessa um valor/elemento de um array dentro de um loop
        //console.log(instrutores[i]);
        if(nome === instrutores[i]) {
            estaNaLista = true;
        }
    }
    
    if (estaNaLista === false) {
        instrutores.push(nome)
        return `Instrutor(a) ${nome} foi adicionado na lista!`;
    }

    return `Instrutor(a) ${nome} já está na lista!`;
}
*/

//Forma alternativa
function adicionaInstrutor(nome) {

    for(let i = 0; i < instrutores.length; i++) {
        //Acessa um valor/elemento de um array dentro de um loop
        //console.log(instrutores[i]);
        if(nome === instrutores[i]) {
            return `Instrutor(a) ${nome} já está na lista!`;
        }
    }
    
    instrutores.push(nome);
    return `Instrutor(a) ${nome} foi adicionado na lista!`;  
}

console.log(adicionaInstrutor("Golimar"));
console.log(adicionaInstrutor("Thiago"));
console.log(instrutores);

// Remover um(a) instrutor(a) da lista, caso esteja nela

function removerInstrutor(nome) {
    for(let i = 0; i < instrutores.length; i++) {
        if(nome === instrutores[i]) {
            instrutores.splice(i, 1);
            return `Instrutor(a) ${nome} removido(a) com sucesso!`;
        }
    }

    return `Instrutor(a) ${nome} não está na lista!`;
}

console.log(removerInstrutor("Golimar"));
console.log(removerInstrutor("Vilson"));
console.log(removerInstrutor("TK"));
console.log(instrutores);

// Alterar nome de um instrutor(a)
function alterarNomeInstrutor(nome, novoNome) {
    for(let i = 0; i < instrutores.length; i++) {
        if(nome === instrutores[i]) {
            instrutores[i] = novoNome;
            return `Nome ${nome} alterado para ${novoNome} com sucesso!`
        }
    }

    return `Instrutor(a) ${nome} não está na lista!`;
}

adicionaInstrutor("Gilson");
console.log(instrutores)
console.log(alterarNomeInstrutor("Gilson", "Vilson"))
console.log(alterarNomeInstrutor("TK", "Thiago"))
console.log(instrutores)

