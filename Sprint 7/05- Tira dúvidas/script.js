const veiculos = {
  carros: [
    {
      marca: "Chery",
      acessorios: ["vidro", "trava"],
    },
    {
      marca: "Volks",
      acessorios: ["Buzina", "capo", "trava"],
    },
  ],
  motos: [
    {
      marca: "Honda",
      acessorios: ["guidon", "roda"],
    },
    {
      marca: "BMW",
      acessorios: ["capo"],
    },
  ],
};

// for(let i = 0; i < veiculos.carros.length; i++) {
//     let atual = veiculos.carros[i]
//     for(let acessorio of atual.acessorios) {
//         console.log(acessorio)
//     }
// }

// for (let key of veiculos.carros) {
//     console.log(key)
// }

// let lista=[
//     [1,2,3,4,5,6],
//     [7,8,9,10,11,12],
//     [13,14,15,16,17,18],
//     [19,20,21,22,23,24],
//     [25,26,27,28,29,39]
// ];

// for (let num of lista) {
//     console.log(num)
//     for(let i = 0; i < num.length; i++) {
//         console.log(num[i])
//     }
// }

// const pessoas = [
//   {
//     nome: "Luiz",
//     cidade: "Sao Paulo",
//     pais: "Brasil",
//   },
//   {
//     nome: "Maria",
//     cidade: "Curitiba",
//     pais: "Brasil",
//   },
// ];
// function inserirPessoa() {
//   let nome = prompt("Digite um nome");
//   let cidade = prompt("Digite uma cidade");
//   let pais = prompt("Digite um pais");
//   let pessoa = {
//     nome,
//     cidade,
//     pais,
//   };
//   pessoas.push(pessoa);
// }

// inserirPessoa()

// console.log(pessoas)

const carros = [
  {
    modelo: "Ka",
    marca: "Ford",
    ano: "2000",
    cor: "Branco",
    completo: false,
    acessorios: ["Vidro Elétrico"],
    preco: 6799.33,
  },
  {
    modelo: "Gol",
    marca: "VW",
    ano: "1996",
    cor: "Preto",
    completo: false,
    acessorios: ["Trava"],
    preco: 12199.13,
  },
  {
    modelo: "Palio",
    marca: "Fiat",
    ano: "1995",
    cor: "Verde",
    completo: false,
    acessorios: [],
    preco: 11099.1,
  },
  {
    modelo: "Monza",
    marca: "Chevrolet",
    ano: "1993",
    cor: "Vinho",
    completo: false,
    acessorios: [],
    preco: 14578.25,
  },
  {
    modelo: "Saveiro",
    marca: "VW",
    ano: "2013",
    cor: "Prata",
    completo: false,
    acessorios: [],
    preco: 28399.13,
  },
  {
    modelo: "Gol",
    marca: "VW",
    ano: "1996",
    cor: "Preto",
    completo: true,
    acessorios: ["Alarme", "Trava", "Ar", "Vidro Elétrico"],
    preco: 14350.45,
  },
  {
    modelo: "Gol",
    marca: "VW",
    ano: "2013",
    cor: "Preto",
    completo: true,
    acessorios: ["Alarme", "Trava", "Ar", "Vidro Elétrico"],
    preco: 22109.21,
  },
  {
    modelo: "Montana",
    marca: "Chevrolet",
    ano: "2011",
    cor: "Azul",
    completo: false,
    acessorios: ["buzina"],
    preco: 15999.13,
  },
  {
    modelo: "Stilo",
    marca: "Fiat",
    ano: "2000",
    cor: "Preto",
    completo: false,
    acessorios: [],
    preco: 17251.36,
  },
];
function buscar(busca) {
  let result = [];
  busca = busca.toLowerCase();
  for (let i = 0; i < carros.length; i++) {
    const carro = carros[i];
    if (
      carro.ano.toLowerCase() === busca ||
      carro.modelo.toLowerCase() === busca ||
      carro.marca.toLowerCase() === busca ||
      carro.cor.toLowerCase() === busca
    ) {
      result.push(carro);
    } else {
      for (let j = 0; j < carro.acessorios.length; j++) {
        if (carro.acessorios[j].toLowerCase() === busca) {
          result.push(carro);
        }
      }
    }
  }
  if (result.length === 0) {
    return "Carro não encontrado";
  }
  return result;
}
const resultadoBusca = buscar("pneu");
console.log(resultadoBusca);
