// const obj = {
//     nome: 'Caixa', 
//     numero: 12,
//     tamanho: '50L'
// }

// console.log(obj.numero)

// const pet = {
//     nome: 'Felicia',
//     raca: 'Siames',
//     especie: 'Gato',
//     pelagem: 'Curta',
//     cor: 'Preto',
//     latir: function(){
//         console.log('Au au');
//     },
//     miar: function(){
//         console.log('Miau');
//     },
//     comer: function(){
//         console.log('nham nham');
//     },
//     brincar: function(tipo){
//         console.log(`Iniciando brincadeira ${tipo}`);
//     },
//     resumoPet: function(){
//         const texto = `Esse pet é da epecie ${this.especie} da raça ${this.raca} de cor ${this.cor} chamado(a) ${this.nome}`;

//         return texto;
//     },
//     isGato: function(){
//         if(this.especie.toLowerCase() == 'gato'){
//             return true;
//         }
//         return false;
//     },
//     isCao: function(){
//         if(this.especie.toLowerCase() == 'cachorro'){
//             return true;
//         }
//         return false;
//     }
// }

// console.log(pet.nome);
// console.log(pet.especie);

// pet.miar();
// pet.comer();
// pet.brincar('pega pega');

// console.log(pet.resumoPet());

function brincar(tipo){
    alert(tipo);
}



// const ferramentas = {
//     format2decimals: function(n){
//         if(n<10){
//             return `0${n}`;
//         }
//         return n;
//     },
//     percentageToUnity: function(n){
//         return n/100;
//     }
// }

// console.log(ferramentas.format2decimals(12))
// console.log(ferramentas.percentageToUnity(1))

/*
OBJETO
Atributos: Informações do objeto
Método: Ações do objeto

FUNÇÕES
Executam um conjunto de instruções
*/

const pessoa = {
    // Atributos
    nome: 'Thiago',
    sobrenome: 'Koman',
    idade: 25,
    genero: 'masculino',
    peso: 85,
    altura: 1.70,
    nascimento: {
        dia: 22,
        mes: 1,
        ano: 1998,
        formataData: function(){
            return `${this.dia}/${this.mes}/${this.ano}`
        }
    },
    profissao: 'Instrutor',
    escolaridade: 'Superior completo',
    nacionalidade: 'Brasileiro',
    estadoCivil: 'Noivo',
    qi: 90,
    endereco: 'Rua João costa',
    numeroEndereco: '1222',
    complementoEndereco: 'ap 321', 
    cpf: '07255901315',
    rg: '367267912',
    hobby: 'Musica',

    // Métodos
    correr: function(){
        alert('Correr');
    },
    pular:function(){
        alert('Pular');
    },
    comer:function(){
        alert('Hmm bora almoçar');
    },
    trabalhar:function(){
        alert('Trabalhar')
    },
    beberAgua: function(){
        alert('Bebendo agua');
    },
    atirar:function(){
        alert('Piu piu piu');
    },
    dormir:function(){
        alert('Sleep');
    },
    chorar:function(){
        alert('Chorar');
    },
    estudar:function(){
        alert('Estudando');
    },
    codar:function(){
        alert('Desenvolver');
    },
}