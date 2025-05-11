/* Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays. */

let dados = {
    nome: "Lucas",
    idade: 17,
    altura: 1.75,
    sexo: "M",
    filhos: ["Lucas", "Joaquim"],
    pets: ["Cachorro", "Gato"]
};

function retornarArrays(obj) {
    let novoObj = {};
    for (let propriedade in obj) {
        if (Array.isArray(obj[propriedade])) {
            novoObj[propriedade] = obj[propriedade];
        }
    }
    return novoObj;
}

console.log(retornarArrays(dados));
    