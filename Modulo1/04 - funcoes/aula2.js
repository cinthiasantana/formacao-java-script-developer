// Melhorando o calculo de condição de pagamento com funções
let valorEtiqueta = 300;
let formaPagamento = 4;
const numeroParcelas = 4;

function aplicarDesconto(valorEtiqueta, desconto) {
    return (valorEtiqueta - (valorEtiqueta * (desconto / 100)));
}

function aplicarJuros(valorEtiqueta, juros) {
    return (valorEtiqueta + (valorEtiqueta * (juros / 100)));
}

function calculaValorParcela(valorEtiqueta, numeroParcelas){
    return valorEtiqueta / numeroParcelas;
}

if (formaPagamento === 1) {
    console.log('O valor total é: R$' + aplicarDesconto(valorEtiqueta, 10));
} else if (formaPagamento === 2 || formaPagamento === 3) {
    console.log('O valor total é: R$' + aplicarDesconto(valorEtiqueta, 15));
} else if (formaPagamento === 4 && numeroParcelas < 2) {
    console.log('O valor total é de: R$' + valorEtiqueta);
} else if (formaPagamento === 4 && numeroParcelas === 2) {
    console.log('O valor total é de: R$' + valorEtiqueta);
    console.log('Em ' + numeroParcelas + ' parcelas de: R$' + calculaValorParcela(valorEtiqueta, numeroParcelas));
} else if (formaPagamento === 4 && numeroParcelas > 2) {
    console.log('O valor total da compra é: R$' + aplicarJuros(valorEtiqueta, 10));
    console.log('Em ' + numeroParcelas + ' parcelas de: R$' + calculaValorParcela(aplicarJuros(valorEtiqueta, 10),numeroParcelas));
}







