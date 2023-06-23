// Melhorando o calculo de imc com as funções


function calculaImc(peso, altura){
    return peso / Math.pow(altura,2);
}

function classificarImc(imc){
    if (imc < 18.5) {
        return 'Você está ABAIXO do peso!';
    } else if (imc > 18.5 && imc < 25) {
        return 'Você está no peso NORMAL.';
    } else if (imc >= 25 && imc < 30) {
        return 'Você está ACIMA do peso!';
    } else if (imc >= 30 && imc < 40) {
        return 'Você está OBESO!';
    } else {
        return 'Você está com OBESIDADE GRAVE!';
    }
}

function main(){
    let peso = 76.5;
    let altura = 1.55;
    
    const imc = calculaImc(peso, altura);
    console.log('Seu imc é: ' + imc.toFixed(2));
    console.log(classificarImc(imc));
}

main();



