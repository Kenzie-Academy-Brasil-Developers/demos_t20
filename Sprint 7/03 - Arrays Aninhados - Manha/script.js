//Array unidimensional
//[5, 7, 11, 55, 48, 78]

//É possível armazenar qualquer tipo de dado em um array
//["Batata", 5, {nome: "Lore", email: "lore@gmail.com"}, true, [12, 22]]


//Matriz bidimensional / Matriz aninhado
//Array bidimensional / Array aninhado

const arrayNotas = [
    //[matematica, portugues, quimica, fisica, filosofia]
    [100, 45, 95, 56, 100], //Aluno 1
    [89, 87, 67, 89, 100],  //Aluno 2
    [65, 45, 43, 65, 0],    //Aluno 3
    [56, 87, 76, 34, 70]    //Aluno 4
];

//console.log(arrayNotas[0]); //[100, 45, 95, 56, 100]

//Acessar diretamente
//console.log(arrayNotas[0][2]); // 95

//Criando uma variável
const notasAluno1 = arrayNotas[0]; //[100, 45, 95, 56, 100]
//console.log(notasAluno1[3]); //56


//Como alterar um valor dentro de um Array aninhado
//Alterando diretamente
arrayNotas[0][2] = 100;

//Alterando pela a variável
notasAluno1[3] = 98;
//console.log(arrayNotas);

//Como acessar cada um dos elementos/valores em um loop
//function listarNotas(listaNotas) {
//    for(let i = 0; i < listaNotas.length; i++) {
//        //A cada loop é acessado um array especícfico
//        const notasAluno = listaNotas[i];
//        console.log(notasAluno)
//
//        //Podemos acessar cada valor através de um loop aninhado
//        for(let j = 0; j < notasAluno.length; j++) {
//            console.log(notasAluno[j]);
//        }
//
//    }
//}
//console.table(arrayNotas)

//Forma alternativa acessando direto
//function listarNotas(listaNotas) {
//    for(let i = 0; i < listaNotas.length; i++) {
//        //A cada loop é acessado um array especícfico
//        console.log(listaNotas[i]);
//
//        //Podemos acessar cada valor através de um loop aninhado
//        for(let j = 0; j < listaNotas[i].length; j++) {
//            console.log(listaNotas[i][j]);
//        }
//
//    }
//}

//Forma alternativa com for of
function listarNotas(listaNotas) {
    for(let notasAluno of listaNotas) {
        //A cada loop é acessado um array especícfico
        //console.log(notasAluno);

        //Podemos acessar cada valor através de um loop aninhado
        for(nota of notasAluno) {
            //console.log(nota);
        }

    }
}

listarNotas(arrayNotas);

console.log(arrayNotas);
function alunoAprovado(listaNotas) {
    for(let i = 0; i < listaNotas.length; i++) {
        console.log(`Notas do aluno ${i + 1}:`)
        let notasAluno = listaNotas[i];
        let somaNotas = 0;
        
        //Fazer a soma das notas
        for(let j = 0; j < notasAluno.length; j++) {
            somaNotas += notasAluno[j];
        }

        //console.log("Soma das notas: ", somaNotas);

        //Calcular a média (somaNotas / quantidade de provas)
        let media = somaNotas / notasAluno.length;

        //Verificar se o aluno foi aprovado ou não
        if(media >= 80) {
            //console.log(`Aluno ${i + 1} aprovado com média de ${media}!`)
        } else {
            //console.log(`Aluno ${i + 1} reprovado com média de ${media}!`)
        }
    }
}

alunoAprovado(arrayNotas);


const usuarios = [
    {
        nome: "Vilson",
        email: "vilson@gmail.com",
        listaPets: [
            {
                nome: "Roger",
                especie: "Gato",
                genero: "Masculino",
                castrado: true
            },
            {
                nome: "Lady",
                especie: "Gato",
                genero: "Feminino",
                castrado: true
            }
        ]
    },
    {
        nome: "TK",
        email: "tk@gmail.com",
        listaPets: [
            {
                nome: "Batinha",
                especie: "Gato",
                genero: "Masculino",
                castrado: true
            }
        ]
    },
    {
        nome: "Alex",
        email: "alex@gmail.com",
        listaPets: [
            {
                nome: "Adalberto",
                especie: "Gato",
                genero: "Masculino",
                castrado: true
            }
        ]
    }
]

//console.log(usuarios[0])
//console.log(usuarios[0].listaPets)
//console.log(usuarios[0].listaPets[0])
//console.log(usuarios[0].listaPets[0].nome)

for(let i = 0; i < usuarios.length; i++) {
    //console.log(usuarios[i])
    const pets = usuarios[i].listaPets
    //console.log(pets)

    for(let j = 0; j < pets.length; j++) {
        //console.log(pets[j].nome)
    }
}