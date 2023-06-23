//classe para representar pessoas

class pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return this.peso / (this.altura * this.altura);
    }

    classificarImc(){
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return 'Abaixo do peso.';
        } else if (imc > 18.5 && imc < 25) {
            return 'Peso normal.';
        } else if (imc >= 25 && imc < 30) {
            return 'Acima do peso.';
        } else if (imc >= 30 && imc < 40) {
            return 'Obeso.';
        } else {
            return 'Obesidade grave.';
        }
    }
}

const jose = new pessoa('José', 70, 1.75);
const thiago = new pessoa('Thiago', 85, 1.75);


console.log('Meu nome é ' + jose.nome + ' e meu IMC é ' + jose.calcularImc().toFixed(2) + ' estou na categoria ' + jose.classificarImc());
console.log('Meu nome é ' + thiago.nome + ' e meu IMC é ' + thiago.calcularImc().toFixed(2) + ' estou na categoria ' + thiago.classificarImc());jose