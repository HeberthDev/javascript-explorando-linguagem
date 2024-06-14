console.log(`\nTrabalhando com listas`);
const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "São Paulo";

console.log("\nDestinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada;

console.log("Embarque: \n\n");
if (
    idadeComprador > 18
    && temPassagemComprada
) {
    console.log("Boa viagem");
} else {
    console.log("Você não pode embarcar");
}

let contador = 0;
while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        console.log("Destino existe");
    } else {
        console.log("Destino não existe");
    }

    contador++;
}