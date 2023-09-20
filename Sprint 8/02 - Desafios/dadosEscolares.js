const alunoCurso = {
    nome: "João",
    idade: 31,
    curso: "FullStack",
    instituicao: "Kenzie Br",
    materias: ["Html", "Css", "JavaScript", "Python"],
    situacaoMatricula: true,
};

let opcao = prompt('Selecione uma opção: \n 1 - Curso \n 2 - Matéria \n 3 - Situação de Matrícula \n 4 - Gerar Carteirinha \n 0 - Sair');

while(opcao != 0){
    if(opcao == '1'){
        getCurso(alunoCurso);
    }else if(opcao == '2'){
        getMaterias(alunoCurso);
    }else if(opcao == '3'){
        getStatus(alunoCurso);
    }else if(opcao == '4'){
        gerarCarteirinhaDeEstudante(alunoCurso);
    }else{
        alert('Opção inválida!!!')
    }
    opcao = prompt('Selecione uma opção: \n 1 - Curso \n 2 - Matéria \n 3 - Situação de Matrícula \n 4 - Gerar Carteirinha \n 0 - Sair');
}


function getCurso(aluno){
    alert(aluno.curso);
}

function getMaterias(aluno){
    let str = '';

    const materias = aluno.materias;
    for(let i = 0 ; i<materias.length ; i++){
        str+=`${materias[i]}, `;
    }

    alert(str);
}

function getStatus(aluno){
    if(aluno.situacaoMatricula){
        alert('Ativo');
    }else{
        alert('Inativo');
    }
}

function gerarCarteirinhaDeEstudante(aluno){
    alert(`name: "${aluno.nome}", idade: "${aluno.idade}", curso: "${aluno.curso}", instituição: "${aluno.instituicao}"`);4
}