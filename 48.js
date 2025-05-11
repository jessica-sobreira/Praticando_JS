/* Você recebe dois objetos que representam o inventário de duas lojas diferentes:
inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
item em estoque. Escreva uma função que combine os inventários em um único objeto.
Se um item aparecer em ambas as lojas, some as quantidades. */

const inventarioLojaA = {
    "caneta": 55,
    "lapis": 50,
    "borracha": 50,
    
};

const inventarioLojaB = {
    "caneta": 42,
    "borracha": 40,
    "lapis": 40,
    "caderno": 95
};

function combinaInventarios(inventarioLojaA, inventarioLojaB) {
    const inventarioCombina = {};
    for (const item in inventarioLojaA) {
        inventarioCombina[item] = inventarioLojaA[item] + inventarioLojaB[item];
    }
    for (const item in inventarioLojaB) {
        if (!inventarioCombina[item]) {
            inventarioCombina[item] = inventarioLojaB[item];
        }
    }
    return inventarioCombina;
}

console.log(combinaInventarios(inventarioLojaA, inventarioLojaB));