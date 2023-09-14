const lista = [12, 13, 14, 15, 16, 17, 18];

const lista2 = [12, 'Thiago', [12,15], {nome: 'Thiago', cargo: 'instrutor' }];

const arrayNotas = [
  //[matematica, portugues, fisica, quimica]
    [100, 60, 80, 70], //Aluno 1 - 310 -> 77.5
    [55, 45, 22, 65],  //Aluno 2 - 187 -> 46.75
    [65, 98, 55, 85],  //Aluno 3 - 303 -> 75.75
    [100, 95, 98, 100] //Aluno 4 - 393 -> 98.25
];

// 100 + 60 + 80 + 70 = 310 / 4 = 77,5

// console.log(arrayNotas[2][3]);

function mediaAlunos(alunos){
    for(let i = 0; i < alunos.length ; i++){
        const aluno = alunos[i]; 
        let soma = 0;
        for(let j = 0 ; j < aluno.length ; j++){
            soma+=aluno[j]
        }
        const media = soma/aluno.length 
        if(media >= 70){
            console.log(`O aluno ${i+1} ficou com a média ${media} e foi APROVADO`);
        }else{
            console.log(`O aluno ${i+1} ficou com a média ${media} e foi REPROVADO`);
        }
    }
}
// mediaAlunos(arrayNotas);




const arrayAlunos = [
    {
        id: 1,
        nome: 'Ricardo',
        matematica: 100,
        portugues: 60,
        fisica: 80, 
        quimica: 70
    },
    {
        id: 2,
        nome: 'Thiago',
        matematica: 55,
        portugues: 45,
        fisica: 22, 
        quimica: 65
    },
    {
        id: 3,
        nome: 'Lucas',
        matematica: 65,
        portugues: 98,
        fisica: 55, 
        quimica: 85
    },
    {
        id: 4,
        nome: 'Gabriel',
        matematica: 100,
        portugues: 95,
        fisica: 98, 
        quimica: 100
    }
] 

function mediaAlunosObjeto(lista){
    for(let i = 0; i<lista.length ; i++){
        const aluno = lista[i];

        const soma = aluno.matematica + aluno.portugues + aluno.fisica + aluno.quimica;

        const media = soma / 4;

        if(media >= 70){
            aluno.status = 'aprovado';
            console.log(`O ${aluno.id}º aluno chamado ${aluno.nome} ficou com a média ${media} e foi APROVADO`);
        }else{
            aluno.status = 'reprovado';
            console.log(`O ${aluno.id}º aluno chamado ${aluno.nome} ficou com a média ${media} e foi REPROVADO`);

        }
    }
}

mediaAlunosObjeto(arrayAlunos);



/*
 - Variaveis
 - Tipos de dados
 - Comparadores
 - Condicionais
 - Funções
 - Loop
 - Arrays
 - Objetos
 */