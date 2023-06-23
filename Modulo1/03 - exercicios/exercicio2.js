// calcula a média do imc corporal

let peso = 76.5;
let altura = 1.55;

const imc = peso / Math.pow(altura,2);

console.log('Seu imc é: ' + imc.toFixed(2))

if (imc < 18.5) {
    console.log('Você está ABAIXO do peso!')
} else if (imc > 18.5 && imc < 25) {
    console.log('Você está no peso NORMAL.')
} else if (imc >= 25 && imc < 30) {
    console.log('Você está ACIMA do peso!')
} else if (imc >= 30 && imc < 40) {
    console.log('Você está OBESO!')
} else {
    console.log('Você está com OBESIDADE GRAVE!')
}