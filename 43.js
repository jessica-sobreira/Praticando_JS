/* Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
sobre as do obj1 em caso de conflitos. */

let obj1 = {
    nome: "Lucas",
    idade: 17,
    altura: 1.83,
    sexo: "M",
    filhos: ["Lucas", "Joaquim"],
    pets: ["Cachorro", "Gato"]
};

let obj2 = {
    nome: "Jessica",
    idade: 16,
    altura: 1.67,
    sexo: "F",
    filhos: ["Lucas", "Joaquim"],
    pets: ["Cachorro", "Gato"]
};

function combinarObjetos(obj1, obj2) {
    return {...obj1, ...obj2};
}

console.log(combinarObjetos(obj1, obj2));