// Locadora de veiculos
// Carros e motos

const kenzieCars = {
    carros: [
        {
            id: 1,
            marca: 'Fiat',
            modelo: 'Uno',
            ano: 2015,
            preco: 80,
            ocupado: false
        },
        {
            id: 2,
            marca: 'Chevrolet',
            modelo: 'Celta',
            ano: 2011,
            preco: 75,
            ocupado: false
        },
        {
            id: 3,
            marca: 'Nissan',
            modelo: 'Sentra',
            ano: 2018,
            preco: 120,
            ocupado: false
        }
    ],
    motos: [
        {
            id: 1,
            marca: 'Honda',
            modelo: 'CG 160',
            ano: 2012,
            preco: 50,
            ocupado: false 
        },
        {
            id: 2,
            marca: 'Yamaha',
            modelo: 'DT 180',
            ano: 2015,
            preco: 45,
            ocupado: false
        },
        {
            id: 3,
            marca: 'Caloi',
            modelo: 'Mobilete',
            ano: 1975,
            preco: 90,
            ocupado: false
        }
    ],
}

// Alugar um carro
// Alugar uma moto


function alugaCarroId(id){
    // Acessar o array de carros
    // Percorrer o array de carros até encontrar o veiculo que possui o id recebido por parâmetro
    // Quando encontrar o id, atualizamos o valor da chave ocupado para true
    const carros = kenzieCars.carros;
    for(let i = 0; i<carros.length ; i++){
        if(carros[i].id == id){
            if(carros[i].ocupado){
                alert('Esse veiculo está ocupado');
            }else{
                carros[i].ocupado = true;
            }
        }
    }
}

alugaCarroId(2)
// console.log(kenzieCars.carros)

function alugaMotoId(id){
    const motos = kenzieCars.motos;
    for(let i = 0; i<motos.length ; i++){
        const moto = motos[i]; 
        if(moto.id == id){
            if(moto.ocupado){
                alert('Esse veiculo está ocupado');
            }else{
                moto.ocupado = true;
            }
        }
    }
}

alugaMotoId(2);
// console.log(kenzieCars.motos)

// function alugaMotoPlaca(placa){
//     const motos = kenzieCars.motos;
//     for(let i = 0; i<motos.length ; i++){
//         const moto = motos[i]; 
//         if(moto.placa == placa){
//             if(moto.ocupado){
//                 alert('Esse veiculo está ocupado');
//             }else{
//                 moto.ocupado = true;
//             }
//         }
//     }
// }

// Lista todos os carros
// Lista todas as motos
function listarCarros(){
    const carros = kenzieCars.carros;

    console.log('--- LISTA DE CARROS ---');
    for(let i = 0 ; i<carros.length ; i++ ){
        const carro = carros[i]
        console.log(`${carro.id} - ${carro.marca} ${carro.modelo} ${carro.ano} (R$${carro.preco},00)`);
    }
}
// listarCarros()

function listarMotos(){
    const motos = kenzieCars.motos;

    console.log('--- LISTA DE MOTOS ---');
    for(let i = 0 ; i<motos.length ; i++ ){
        const moto = motos[i]
        console.log(`${moto.id} - ${moto.marca} ${moto.modelo} ${moto.ano} (R$${moto.preco},00)`);
    }
}
// listarMotos()

function listarVeiculoPorTipo(tipo){ //carros || motos
    const veiculos = kenzieCars[tipo];

    console.log(`--- LISTA DE ${tipo.toUpperCase()} ---`);
    for(let i = 0 ; i<veiculos.length ; i++ ){
        const veiculo = veiculos[i]
        console.log(`${veiculo.id} - ${veiculo.marca} ${veiculo.modelo} ${veiculo.ano} (R$${veiculo.preco},00)`);
    }
}
// listarVeiculoPorTipo('motos');

let globalIdCarro = 4;
let globalIdMoto = 4;

// adicionar veiculo
function adicionarVeiculo(){
    const tipo = prompt('Digite o tipo do veiculo (carro|moto)')
    const marca = prompt('Digite a marca');
    const modelo = prompt('Digite o modelo');
    const ano = parseInt(prompt('Digite o ano'));
    const preco = parseInt(prompt('Digite o preco'));

    let id = 0;

    if(tipo == 'carro'){
        id = globalIdCarro;
        globalIdCarro++;
    }else if(tipo == 'moto'){
        id = globalIdMoto;
        globalIdMoto++;
    }

    const veiculo = {
        id: id,
        marca: marca,
        modelo: modelo,
        ano: ano,
        preco: preco,
        ocupado: false
    }

    kenzieCars[tipo+'s'].push(veiculo);
}

function orcamento(valor, tipo){
    let lista = kenzieCars[tipo+'s'];
    for(let i = 0 ; i < lista.length ; i++){
        const veiculo = lista[i];
        if(veiculo.preco <= valor){
            console.log(`${veiculo.id} - ${veiculo.marca} ${veiculo.modelo} ${veiculo.ano} (R$${veiculo.preco},00)`)
        }
    }
}


// Resumo sobre arrays
let lista = [1,2,3,4];
lista.push(5);
lista.unshift(0);
console.log(lista) // [0,1,2,3,4,5]

console.log(lista[0]) //0

for(let i = 0; i<lista.length ; i++){
    console.log(lista[i])
}