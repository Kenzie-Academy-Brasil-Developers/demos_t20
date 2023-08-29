function calculaIMC(peso, altura){
    const imc = peso / (altura**2);
    return imc.toFixed(2);
}

function classificaIMC(imc){
    if(imc < 18.5){
        return 'Abaixo do peso';
    }else if(imc < 25){
        return 'Peso ideal';
    }else if(imc < 30){
        return 'Sobrepeso';
    }else{
        return 'Obeso';
    }
}
