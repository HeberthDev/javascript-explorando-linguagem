console.log(`Trabalhando com listas`);
const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    console.log("Comprador maior de idade.");
    listaDeDestinos.splice(1,1);    
} else if (estaAcompanhada) {
    console.log("Comprador está acampanhado");
    listaDeDestinos.splice(1,1); 
} else {
    console.log("Não é maior de idade e não posso vender.");
}

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);

