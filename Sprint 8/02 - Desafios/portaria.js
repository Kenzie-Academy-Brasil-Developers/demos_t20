const nome = prompt('Seu nome?');
const idade = parseInt(prompt('Idade?'));
let estaAcompanhado = prompt('Está acompanhado? (s|n)');

if(estaAcompanhado == 's'){
    estaAcompanhado = true;
}else{
    estaAcompanhado = false;
}

if(idade < 18){
    alert(`Entrada não está permitida para ${nome}: Menor de idade`);
}else if(estaAcompanhado){ 
    alert(`Entrada permitida para ${nome}: Conceder desconto`);
}else{
    alert(`Entrada permitida para ${nome}: Valor integral.`)
}
