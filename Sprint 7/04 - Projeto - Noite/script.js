const kenzieCars = {
    carros:[
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
            ano: 2015, 
            preco: 50,
            ocupado: false
        },
        {
            id: 2,
            marca: 'Yamaha',
            modelo: 'DT 180',
            ano: 2018, 
            preco: 65,
            ocupado: false
        },
        {
            id: 3,
            marca: 'Caloi',
            modelo: 'Mobilete',
            ano: '1975', 
            preco: 20,
            ocupado: false
        }
    ]
}

function alugarCarro(id){
    // Procurar o objeto que possui o id recebido por parametro
        // navegar pelo array carros
        // Verificar id do objeto atual é igual id do parametro
            // Atualizar a chave ocupado para true
    const lista = kenzieCars.carros;
    for(let i = 0 ; i<lista.length ; i++){
        if(lista[i].id == id){
            lista[i].ocupado = true;
        }
    }
}
alugarCarro(2)
// console.log(kenzieCars.carros);

function alugarMoto(id){
    const motos = kenzieCars.motos;
    for(let i = 0 ; i<motos.length ; i++){
        const moto = motos[i];
        if(moto.id == id){
            moto.ocupado = true;
        }
    }
}
alugarMoto(2)
// console.log(kenzieCars.motos);

function listarTodosCarros(){
    const carros = kenzieCars.carros;
    for(let i = 0; i<carros.length ; i++){
        const carro = carros[i];
        
        console.log(`${carro.id} - ${carro.marca} ${carro.modelo} ${carro.ano} - R$${carro.preco},00`);
    }
}
// listarTodosCarros()

function listarTodasMotos(){
    const motos = kenzieCars.motos;
    for(let i = 0; i<motos.length ; i++){
        const moto = motos[i];
        
        console.log(`${moto.id} - ${moto.marca} ${moto.modelo} ${moto.ano} - R$${moto.preco},00`);
    }
}
// listarTodasMotos()

function listarVeiculos(tipo){
    const veiculos = kenzieCars[tipo];
    for(let i = 0; i<veiculos.length ; i++){
        const veiculo = veiculos[i];
        
        console.log(`${veiculo.id} - ${veiculo.marca} ${veiculo.modelo} ${veiculo.ano} - R$${veiculo.preco},00`);
    }
}
listarVeiculos('motos')

let globalIdCarro = 4;
let globalIdMoto = 4;

function adicionarVeiculo(){
// Solicitando informações ao usuário
    const tipo = prompt('Digite o tipo (carro|moto)');
    const marca = prompt('Digite uma marca');
    const modelo = prompt('Digite um modelo');
    const ano = parseInt(prompt('Digite um ano'));
    const preco = parseInt(prompt('Digite um preço'));

//Analisando e recuperando o id com base no tipo 
    let id = 0;
    if(tipo == 'carro'){
        id = globalIdCarro;
        globalIdCarro++;
    }else if(tipo == 'moto'){
        id = globalIdMoto;
        globalIdMoto++;
    }

// Criando o objeto do veiculo
    const veiculo = {
        id: id,
        marca: marca,
        modelo: modelo,
        ano: ano,
        preco: preco,
        ocupado: false
    };

//Adicionado o objeto criado na lista de veiculos corresponde 
    kenzieCars[tipo+'s'].push(veiculo)

    // if(tipo == 'carro'){
    //     kenzieCars.carros.push(veiculo)
    // }else{
    //     kenzieCars.motos.push(veiculo)
    // }
    console.log(kenzieCars[tipo+'s'])
}
