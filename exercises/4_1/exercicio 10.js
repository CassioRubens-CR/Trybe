// Exercicio 10
// Escreva um programa que se inicie com dois valores em duas variáveis diferentes: 
// o custo de um produto e seu valor de venda. 
// A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) 
// a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%, 
// que deve ser considerado no cálculo do lucro.
// Seu programa também deve emitir uma mensagem de erro e encerrar, 
// caso algum dos seus valores de entrada seja menor que zero.


let custoProduto = 40;
let valorVenda = 80;

if (custoProduto > 0 && valorVenda >0) {
    let lucro = (valorVenda - custoProduto) * 1000 * 0.20;
    console.log("lucro: " + lucro);
} else {
    console.log("Mensagem de erro");
}
