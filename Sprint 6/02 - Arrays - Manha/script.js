// Só não podemos alterar a caixa, os valores sim
const arr = [];

//Adicionando elementos em um array
//push: adiciona um valor ao final de um array
arr.push(55);
arr.push(3);
arr.push(6);

//console.log(arr)

//unshift: adiona um valor no começo de um array
arr.unshift(100);

//console.log(arr);


// Acessando um caractere dentro de uma String
// B a t a t a
// 0 1 2 3 4 5
const texto = "Batata Doce";
//console.log(texto[2]);
//console.log(texto.length - 1);
//console.log(texto[texto.length - 1]);


//Como acessar os valores/elementos dentro do array
const lista = [5, 6, 7, 15, 77, 155, 177];
//             0  1  2  3   4   5    6

//console.log(lista[0]);
//console.log(lista[3]);

const ultimoIndice = lista.length - 1;
//console.log(lista[ultimoIndice]);
//console.log(lista[lista.length - 1]);

//console.log(lista[20]);

//console.log(lista[2]);
lista[2] = 12;
//console.log(lista[2]);
//console.log(lista);

//Removendo valores/elementos de um array

//pop: remove o último valor/elemento de um array
lista.pop();
//console.log(lista);

const valorRemovido = lista.pop();
//console.log(lista);
//console.log(valorRemovido);

//shift: remove o primeiro valor/elemento de um array

lista.shift()
//console.log(lista)

const itemRemovido = lista.shift();
//console.log(lista);
//console.log(itemRemovido);


//splice: altera o elemento de um array
const instrutores = ["Alex", "Chrystian", "Lorena", "Thiago", "Vilson"];
//                      0          1          2         3         4
//console.log(instrutores);

//Mudando o valor de um elemento
instrutores.splice(3, 1, "TK");

//console.log(instrutores);

//Adicionar um elemento em um indice específico
instrutores.splice(2, 0, "Golimar");
//console.log(instrutores);

//['Alex', 'Chrystian', 'Golimar', 'Lorena', 'TK', 'Vilson']
//   0          1            2         3       4       5

//Remover um elemento em um indice específico
instrutores.splice(2, 1);
//console.log(instrutores);

//['Alex', 'Chrystian', 'Lorena', 'TK', 'Vilson']
//   0          1          2        3       4


// Removendo mais de um item consecutivamente
//instrutores.splice(1, 4);
//console.log(instrutores);

instrutores[1] = "Chrys";
instrutores[3] = "Thiago";
console.log(instrutores);
// ['Alex', 'Chrys', 'Lorena', 'Thiago', 'Vilson']

//Projeto: encontrar um instrutor específico

function encontrarInstrutor(arrayInstrutores, instrutor) {
    for(let i = 0; i < arrayInstrutores.length; i++) {
        if(arrayInstrutores[i] === instrutor) {
            return `Instrutor(a) ${instrutor} foi encontrado(a)!`
        }
    }

    return `Instrutor(a) ${instrutor} não encontrado(a)!`
}

console.log(encontrarInstrutor(instrutores, "Thiago"));
//console.log(encontrarInstrutor(instrutores, "Gorimar"));
//console.log(encontrarInstrutor(instrutores, "Alex"));



