
// Legenda:
// 1 = Débito
// 2 = Dinheiro
// 3 = Pix
// 4 = Crédito

let valorEtiqueta = 300;
let formaPagamento = 3;
const numeroParcelas = 8;

if (formaPagamento === 1){
    const debito = valorEtiqueta - (valorEtiqueta * 0.1);
    console.log('O valor total da compra é: R$' + debito);
} else if (formaPagamento === 2 || formaPagamento === 3){
    const dinheiro = valorEtiqueta - (valorEtiqueta * 0.15);
    console.log('O valor total da compra é: R$' + dinheiro);
} else if (formaPagamento === 4 && numeroParcelas < 2){
    console.log('O valor total é de: R$' + valorEtiqueta);
} else if (formaPagamento === 4 && numeroParcelas === 2) {
    const totalCompraParcelada = valorEtiqueta / numeroParcelas;
    console.log('O valor total é de: R$' + valorEtiqueta);
    console.log('Em ' + numeroParcelas + ' parcelas de: R$' + totalCompraParcelada);
} else if (formaPagamento === 4 && numeroParcelas > 2){
    const totalCompraParcelada = valorEtiqueta + (valorEtiqueta * 0.1);
    const valorParcela = totalCompraParcelada / numeroParcelas;
    console.log('O valor total da compra é: R$' + totalCompraParcelada);
    console.log('Em ' + numeroParcelas + ' parcelas de: R$' + valorParcela);
}

