// Faça um for/in que mostre todas as chaves do objeto.

let saudacao = "Bem vinda, "

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "sim",
  };
for (let todasAsChaves in info){
  console.log(todasAsChaves);
}
    