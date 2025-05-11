/* Escreva uma função que conte quantas propriedades do tipo string existem em um
objeto e retorne esse número. */

let dados = {
    nome: "Lucas",
    idade: 17,
    altura: 1.75,
    sexo: "M",
    filhos: ["Lucas", "Joaquim"],
    pets: ["Cachorro", "Gato"]
};

function contarStrings(obj) {
    let count = 0;
    for (let prop in obj) {
        if (typeof obj[prop] === "string") {
            count++;
        }
    }
    return count;
}

console.log(contarStrings(dados));