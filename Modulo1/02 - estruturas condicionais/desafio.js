// programa qe calcula o valor da viagem 

const valorEtanol = 4.79;
const valorGasolina = 5.58;
let tipoCombustivel = 'Etanol';
const consumoPorKm = 10;
let distancia = 1680;

const consumo = distancia / consumoPorKm;

if (tipoCombustivel === 'Etanol') {
    let valorGasto = consumo * valorEtanol;
    console.log('R$ ' + valorGasto.toFixed(2));
} else if (tipoCombustivel === 'Gasolina') {
    let valorGasto = consumo * valorGasolina;
    console.log('R$ ' + valorGasto.toFixed(2));
} else {
    console.log('Combustível Inválido');
}