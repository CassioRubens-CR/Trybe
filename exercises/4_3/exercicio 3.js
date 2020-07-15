// Exercício 3
// Agora inverta o lado do triângulo

let n = 5;
let asteriscos = "*";

let ultimoPosicao = n - 1;
for (let i = 0; i < n; i += 1) {
    let linha = "";
    for (let j = 0; j < n; j += 1) {
        if(j < ultimoPosicao) {
            linha = linha + " ";
        } else {
            linha = linha + asteriscos;
        }
    }
    console.log(linha);
    ultimoPosicao = ultimoPosicao - 1;    
}
