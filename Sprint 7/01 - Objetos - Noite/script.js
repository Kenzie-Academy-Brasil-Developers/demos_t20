// laço de repetição (for)

// array []

//                   0         1        2         3       4        5        6
/*
let listaNomes = ['Bruno', 'Michel', 'Allan', 'Marcos', 'Yan', 'Thiago', 'Lorena' ];

for(let i = 0; i < listaNomes.length ; i++){
    console.log(listaNomes[i]);
}

console.log(listaNomes[6]);
*/
let array = ['Supra', 'Toyota', 'Vermelho', 'Esportivo', '890cv', 'false', 1998];

// OBJETOS

const carro2 = {
    modelo: 'Skyline',
    marca: 'Nissan',
    cor: 'Azul',
    categoria: 'Esportivo',
    potencia: '780cv',
    automatico: true,
    ano: 2002
};
    
    // const carros = [carro1, carro2]; 
    
    // console.log(carros[0].modelo);
    // console.log(carros[0].marca);
    // console.log(carro1);
    
    // console.log(array)
    
    
const carro = {
    modelo: 'Supra',
    marca: 'Toyota',
    cor: 'Vermelho',
    categoria: 'Esportivo',
    potencia: '890cv',
    automatico: false,
    ano: 1998
};

// console.log(`Esse é o carro ${carro2['marca']} ${carro2.modelo} fabricado no ano ${carro2.ano} na cor ${carro2.cor}`);

// delete carro.automatico

// console.log(carro);
// console.log(carro2);

function calculaIMC (peso, altura){
    const imc = peso / altura**2;
    return imc;
}

function fomataNascimento(dia, mes, ano){
    return `${dia}/${mes}/${ano}`
}

const pessoa = {
    nome: 'Thiago',
    sobrenome: 'Schmidt',
    peso: 85,
    altura: 1.70,
    nascimento: {
        dia: 22,
        mes: 1,
        ano: 1998
    },
    conhecimentos: ['HTML básico', 'CSS Intermediário', 'Javascript Avançado']  
}

const pessoa2 = {
    nome: 'Luis',
    sobrenome: 'Felipe',
    peso: 62,
    altura: 1.80,
    nascimento: {
        dia: 12,
        mes: 11,
        ano: 1996
    },
    conhecimentos: ['HTML básico', 'CSS Intermediário', 'Javascript Avançado']  
}

pessoa2.imc = calculaIMC(pessoa2.peso, pessoa2.altura);

console.log(pessoa);

console.log(
    fomataNascimento(
        pessoa.nascimento.dia, 
        pessoa.nascimento.mes, 
        pessoa.nascimento.ano
    )
)

let resultado = [54, 2, 629, 29]


// let card = {
//     capa: './caminho da imagem.jpg',
//     marca: 'chevrolet',
//     modelo: 'celta',
//     espec_modelo: '1.0 MPFI LT 8V FLEX 4P MANUAL',
//     valor: 35900,
//     ano: 2013,
//     kilometragem: 73263,
//     localizacao: 'Curitiba-PR'
// }






