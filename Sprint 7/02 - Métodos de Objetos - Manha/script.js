// Array de objetos
const usuario = {
    nome: "Golimar",
    email: "golimar@gmail.com",
    senha: "#Batata123"
}

const usuarios = [
    {
        nome: "Golimar",
        email: "golimar@gmail.com",
        senha: "#Batata123",
        falar: function() {
            console.log(`Olá, meu nome é ${this.nome}!`)
        }
    },
    {
        nome: "TK",
        email: "tk@gmail.com",
        senha: "#Batata123"
    },
    {
        nome: "Lore",
        email: "lore@gmail.com",
        senha: "#Batata123"
    }
];

//usuarios[0].falar()

for(let i = 0; i < usuarios.length; i++) {
    //console.log(`Olá, meu nome é ${usuarios[i].nome}!`);
    usuarios[i].falar = function() {
        console.log(`Olá, meu nome é ${this.nome}!`)
    }
}

console.log(usuarios)

for(let usuario of usuarios) {
    //console.log(`Olá, meu nome é ${usuario.nome}!`);
}

//function mudarSenha(email, senhaAtual, novaSenha) {
//    for(let i = 0; i < usuarios.length; i++) {
//        const usuarioAtual = usuarios[i];
//
//        if(usuarioAtual.email === email && 
//           usuarioAtual.senha === senhaAtual) {
//            usuarioAtual.senha = novaSenha;
//            return "Senha atualizada com sucesso!"
//        }
//    }
//
//    return "Email ou senha inválidos!"
//}

// Resolução alternativa com for of:
function mudarSenha(email, senhaAtual, novaSenha) {
    for(let usuario of usuarios) {
        if(usuario.email === email && 
           usuario.senha === senhaAtual) {
            usuario.senha = novaSenha;
            return "Senha atualizada com sucesso!"
        }
    }

    return "Email ou senha inválidos!"
}

//console.log(mudarSenha("vilson@gmail.com", "batata", "123456"));
//console.log(mudarSenha("lore@gmail.com", "#Batata123", "kenzinho789"));
//console.log(usuarios);

//function encontrarUsuario(nome, email) {
//    for(let i = 0; i < usuarios.length; i++) {
//        //console.log(email)
//        if(usuarios[i].nome === nome || usuarios[i].email === email) {
//            return usuarios[i];
//        }
//    }
//
//    return "Usuário não encontrado!";
//}

// Resolução alternativa com for of:
function encontrarUsuario(nome, email) {
    for(let usuario of usuarios) {
        //console.log(email)
        if(usuario.nome === nome || usuario.email === email) {
            return usuario;
        }
    }

    return "Usuário não encontrado!";
}

//console.log(encontrarUsuario("Alex"));
//console.log(encontrarUsuario("TK"));
//console.log(encontrarUsuario("TJ", "golimar@gmail.com"));


//for in: Funciona em arrays e objetos

//Intera sobre indices para arrays
for(let index in usuarios) {
    //console.log(usuarios[index]);
}

//Intera sobre chaves para objetos
for(let key in usuario) {
    //console.log(key);
    //console.log(usuario[key]);
}

//for of: Funciona somente em arrays

// Intera diretamente sobre os valores
for(let valor of usuarios) {
    //console.log(valor)
}

function registraUsuario(usuario) {
    usuarios.push(usuario)
}

const pessoa = {
    nome: "Vilson",
    email: "vilson@gmail.com",
    senha: "#Batata123"
}

registraUsuario(pessoa);
console.log(usuarios);

//Metodos de Objeto
//Atributos: Funcionam como variáveis dentro do contexto do objeto
const produto = {
    tipo: "Alimento",
    nome: "Tapioca",
    valor: 5.99
}

//Metodos: Funcionam como funções dentro do contexto do objeto

const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2015,
    velocidadeAtual: 0,
    buzinar: function() {
        console.log("Tuuuu Tuuuu")
    },
    acelerar: function(velocidade) {
        this.velocidadeAtual += velocidade; 
    },
    freiar: function(velocidade) {
        this.velocidadeAtual -= velocidade; 
    }
}

carro.buzinar();
carro.acelerar(100);
carro.freiar(20);
console.log(carro)