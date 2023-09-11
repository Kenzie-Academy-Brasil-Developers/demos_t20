//Array
const pessoa = ["Vilson", 25, 1.68, ["gato", "papagaio"], false];

//console.log(pessoa[0]);
//console.log(pessoa[1]);

//Objeto
const usuario = {
    nome: "Vilson",
    idade: 25,
    altura: 1.68,
    animaisFavoritos: ["gato", "cachorro", "papagaio"],
    eCalvo: false
}

// Como acessar uma propriedade dentro de um objeto
//console.log(usuario.nome);
//console.log(usuario.altura);
//console.log(usuario.animaisFavoritos);
//console.log(usuario.animaisFavoritos[1]);

console.log(`${usuario.nome} tem ${usuario.altura} e vai fazer ${usuario.idade + 1} anos no ano que vem!`)

// Como adicionar uma propriedade dentro de um objeto
usuario.dataAniversario = "05/07/1998";

// Como deletar uma propriedade dentro de um objeto
delete usuario.eCalvo;

// Como alterar o valor de uma propriedade dentro de um objeto
usuario.nome = "Gilson"

console.log(usuario);

function fazerAniversario() {
    usuario.idade++;
    
    return `${usuario.nome} fez ${usuario.idade} anos de idade! Parabéns!`;
}

console.log(fazerAniversario());
console.log(fazerAniversario());

console.log(usuario);

function adicionarAnimalFavorito(nomeAnimal) {
    usuario.animaisFavoritos.push(nomeAnimal);
    return `${nomeAnimal} adicionado a lista de animais favoritos com sucesso!`;
}

console.log(adicionarAnimalFavorito("hamster"));
console.log(usuario)

const carro = {
    marca: "Fiat",
    modelo: "Palio",
    ano: 2001,
    cor: "Vermelho",
    combustivel: "Gasolina"
}

const usuarioFacebook = {
    nome: "Golimar Jackson",
    aniversario: "11/09/1895",
    email: "golimar@gmail.com",
    senha: "#Batata123",
    sobre: "É uma dancirino e cantor de bollywood!"
}

function login(email, senha) {
    if (email === usuarioFacebook.email && 
        senha === usuarioFacebook.senha) {
            return `Bem vindo ${usuarioFacebook.nome}!`
        }

    return `Email ou senha estão incorretos!`
}

console.log(login("golimar@gmail.com", "#Batata123"));

usuario.animaisFavoritos.shift();
usuario.animaisFavoritos.pop();
usuario.animaisFavoritos.unshift("tubarão");
usuario.animaisFavoritos = [];

usuario.nome = "Vilson";
console.log(usuario);
console.log(usuario.nome.toUpperCase());

