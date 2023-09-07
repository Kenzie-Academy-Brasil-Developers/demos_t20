const instrutores = ["Alex", "Chrystian", "Lorena", "Thiago", "Vilson"];


//                      0          1          2         3         4
console.log(instrutores.length)

//Adicionar um novo instrutor(a), caso ele(a) não esteja na lista
function adicionarInstrutor(nome) {
    for(let i = 0; i < instrutores.length; i++) {
        // Comparar nome com o valor atual que está dentro do array
        //console.log(instrutores[i]);
        if(instrutores[i] === nome) {
            return `Instrutor(a) ${nome} já está na lista!`;
        }
    }

    instrutores.push(nome);
    return `Instrutor(a) ${nome} adicionado(a) a lista com sucesso!`;
} 

//console.log(adicionarInstrutor("Golimar"));
//console.log(adicionarInstrutor("Thiago"));
//console.log(instrutores)

//Remover instrutor(a), caso esteja na lista
function removerInstrutor(nome) {
    for(let i = 0; i < instrutores.length; i++) {
        if (instrutores[i] === nome) {
            instrutores.splice(i, 1);
            return `${nome} removido da lista de instrutores com sucesso!`;
        }
    }

    return `${nome} não está na lista!`;
}

//console.log(removerInstrutor("Golimar"));
//console.log(removerInstrutor("Vilson"));
////console.log(removerInstrutor("TK"));
//console.log(adicionarInstrutor("Gilson"));
//console.log(instrutores);

// Alterar o nome de um(a) instrutor(a), caso esteja na lista
function alterarNomeInstrutor(nome, novoNome) {
    for(let i = 0; i < instrutores.length; i++) {
        if(instrutores[i] === nome) {
            instrutores[i] = novoNome;
            return `${nome} foi alterado para ${novoNome} com sucesso!`;
        }
    }

    return `${nome} não está na lista!`;
}

//console.log(alterarNomeInstrutor("Gilson", "Vilson"));
//console.log(alterarNomeInstrutor("Thiago", "TK"));
//console.log(alterarNomeInstrutor("Lorena", "Lore"));
//console.log(alterarNomeInstrutor("Golimar", "Gorimar"));
console.log(instrutores);

// ['Alex', 'Chrystian', 'Lorena', 'Thiago', 'Vilson']
instrutores[0] = "Alex, o brabo"
console.log(instrutores);
instrutores = ['Alex, o brabo', 'Chrystian', 'Lorena', 'Thiago', 'Vilson']