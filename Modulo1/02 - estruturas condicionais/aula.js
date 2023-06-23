
// Exemplo de condicional com if

const numero = 0;

const numerosDivisiveisPor5 = (numero % 5) === 0;

if (numero === 0) {
    console.log('O número é inválido');
} else if (numero === 5) {
    console.log('O número é inválido');
} else if (numerosDivisiveisPor5){
    console.log('Sim');
} else {
    console.log('Não');
}