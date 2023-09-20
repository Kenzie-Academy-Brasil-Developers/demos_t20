function gerarNumeroAleatorio(){
    const min = 1;
    const max = 21;

    let random = Math.random() * (max - min) + min ;
    return parseInt(random);
}

function verificaPalpite(numero, palpite){
    let tentativa = 1;

    while(numero != palpite){
        if(palpite == -1){
            break;
        }else if(palpite>20){
            alert('O palpite deve ser um numero entre 1 e 20');
        }else if(numero < palpite){
            alert('Tente um numero menor');
        }else{
            alert('Tente um numero maior');
        }
        palpite = parseInt(prompt('Tente outro palpite'));
        tentativa++;
    }   

    alert('Você acertou na tentativa: '+tentativa);
}

const numeroAleatorio = gerarNumeroAleatorio();
const palpiteUsuario = parseInt(prompt('Digite o seu palpite'));

verificaPalpite(numeroAleatorio, palpiteUsuario);