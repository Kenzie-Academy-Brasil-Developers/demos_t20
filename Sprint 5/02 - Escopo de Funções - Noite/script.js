let temp = null;

function format2char(str){ 
    if(str.length < 2){ 
        return '0' + str; 
    }else{
        return str;
    }
}

function formatAno(ano){
    if(ano.length == 2){
        if(parseInt(ano) > 23){
            temp = 1900
            return '19'+ano;
        }else{
            temp = 2000
            return '20'+ano;
        }
    }else{
        return ano;
    }
}

// DD/MM/AAAA

// if(dia.length < 2 ){
//     dia = '0' + dia;
// }

// if(mes.length < 2 ){
//     mes = '0' + mes;
// }

const dia = format2char(prompt('Digite o dia')); //'1'
const mes = format2char(prompt('Digite o mes')); //'12'
const ano = formatAno(prompt('Digite o ano'));

// dia = format2char(dia); //'01'
// mes = format2char(mes); //'12'

let dataFormatada = `${dia}/${mes}/${ano}`;

alert(dataFormatada);




// ESCOPOS {}

let testeGlobal = 'Kenzie'; //Escopo global

if(true){   
    let testeBloco = 'Teste'; //Escopo de bloco
    // console.log(testeGlobal);
}

function escopo(){
    let testeFuncao = 'funcao' //Escopo de função
    // console.log(testeGlobal);

    if(true){
        let teste2 = 'teste';
        console.log(testeFuncao);
    }
}
escopo();

