// contas com javascript
// declaração de váriaveis
// arredondamento

const valorCombustivel = 5.79;
const consumoPorKm = 1;
let distancia = 150;

const consumo = distancia / consumoPorKm;

let valorGasto = consumo * valorCombustivel;

console.log('R$ ' + valorGasto.toFixed(2));
