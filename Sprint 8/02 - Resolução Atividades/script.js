// Desafio Portaria

// let nome = prompt("Digite seu nome: ");
// let idade = prompt("Digite sua idade: ");
// let estaAcompanhado = prompt("Está acompanhado? (S) ou (N): ");

// DESAFIO

// CASO O USUÀRIO DIGITE OUTRO VALOR NA VARIÁVEL estaAcompanhado, COMO FAZER PARA QUE ELE RETORNE AO PROMPT???

// if (estaAcompanhado.toLowerCase() === "s") {
//   estaAcompanhado = true;
// } else if (estaAcompanhado.toLowerCase() === "n") {
//   estaAcompanhado = false;
// }

// if (idade < 18) {
//     alert(`Entrada não permitida para ${nome}: Menor de idade!`)
// } else if (estaAcompanhado) {
//     alert(`Entrada permitida para ${nome}: Conceder desconto.`)
// } else {
//     alert(`Entrada permitida para ${nome}: Valor Integral.`)
// }

// ------------------------------------------------------

// // Desafio Aprovado ou reprovado

// let nome = prompt("Digite seu nome");

// function checaTamanhoNome(nome) {
//     if (nome.length < 5) {
//         alert("O nome do aluno precisa conter pelo menos 5 caracteres");
//         nome = prompt("Entre com o nome do aluno");
//         checaTamanhoNome(nome)
//     } else {
//         return true;
//     }
// }

// checaTamanhoNome(nome)

// let presenca = parseInt(prompt("Digite a presença"));

// let materia1 = prompt("Digite a matria");
// let nota1 = parseFloat(prompt("Digite a nota"));
// let materia2 = prompt("Digite a matria");
// let nota2 = parseFloat(prompt("Digite a nota"));
// let materia3 = prompt("Digite a matria");
// let nota3 = parseFloat(prompt("Digite a nota"));

// let materias = []
// let notas = []

// let aluno = {
//     materias: [],
//     notas: [],
//     nome: "Aluno"
// }

// let materia = {
//     nome: "Matemática",
//     nota: 10,

// }

// for (let i = 1; i <= 3; i++) {
//     let materia = prompt("Materia: ")
//     let nota = prompt("Nota: ")
//     materias.push(materia)
//     notas.push(nota)
// }

// console.log(materias)
// console.log(notas)
// let somaNota = nota1 + nota2 + nota3
// let mediaNota = somaNota / 3

// console.log(mediaNota)
// console.log(presenca)

// if (mediaNota >= 8 && presenca >= 6) {
//     alert(`A nota do aluno ${nome} é de ${mediaNota} e sua presença é de ${presenca}: Aluno aprovado!`)
// } else {
//     alert(`A nota do aluno ${nome} é de ${mediaNota} e sua presença é de ${presenca}: Aluno reprovado!`)
// }

// -------------------------------------------------

// Desafio Contando Casas

// function gerarNumeroAleatorio(){
//     // let random = Math.random()
//     // return parseInt(random)
//     // const numeroAleatorio = Math.floor(Math.random() * 21)
//     // return numeroAleatorio
//     let random = parseInt(Math.random() *10)
//     return random
// }

// function verificarPalpite() {
//     let aleatorio = gerarNumeroAleatorio()
//     console.log(aleatorio)

//     let tentativa = 1
//     let palpite = prompt("Digite o seu palpite de 1 a 20: ")

//     while (aleatorio != palpite) {
//         alert("Tente novamente")
//         palpite = prompt("Digite o seu palpite de 1 a 20: ")
//         tentativa++
//     }
//     return `Você acertou na tentativa ${tentativa}`

// }

// console.log(verificarPalpite())

// ----------------------------------------

// Atividade - Caixa de suprimentos

// let caixaDeSuprimentos = [];

// let higiene = [
//   "Sabonete",
//   "Pasta de dente",
//   "Escova",
//   "Shampoo",
//   "Cotonete",
//   //   "Toalha",
// ];

// alimentacao = [
//   "Pão de forma",
//   "Pão de Sal",
//   "Salsicha",
//   "Água",
//   "Molho de Tomate",
// ];

// let farmacia = ["Dorflex", "Protetor solar", "Doril", "Engov", "Sal de frutas"];

// let lazer = ["Bola", "Play 5", "Jogo de tabuleiro", "Xadrez", "Uno"];
// let outros = ["Bola", "Play 5", "Jogo de tabuleiro", "Xadrez", "Uno"];

// caixaDeSuprimentos = [higiene, alimentacao, farmacia, lazer];

// function verificaSuprimentos() {
//   //   let msg = "";

//   if (caixaDeSuprimentos.length === 4) {
//     for (let i = 0; i < caixaDeSuprimentos.length; i++) {
//       let suprimentoAtual = caixaDeSuprimentos[i];

//       if (suprimentoAtual.length > 5) {
//         return "Tem itens demais, não precisamos de tantos.";
//       } else if (suprimentoAtual.length < 5) {
//         return "Precisamos de mais itens desta seção.";
//       }
//     }
//     return "Podemos acampar";
//   } else if (caixaDeSuprimentos.length > 4) {
//     return "Acho que temos um intruso.";
//   }
//   return "Algum amigo ainda não retornou com os itens.";
// }

// console.log(verificaSuprimentos());
