//criar classe qe represente carros

class carro {
    marca;
    cor;
    consumoPorKm;

    constructor(marca, cor, consumoPorKm){
        this.marca = marca;
        this.cor = cor;
        this.consumoPorKm = consumoPorKm;
    }

    calcularGastoPercurso(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.consumoPorKm * precoCombustivel;
    }
}

const uno = new carro('Fiat', 'Prata', 1/12);

console.log(uno.calcularGastoPercurso(70, 5));