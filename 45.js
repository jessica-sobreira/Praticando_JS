/* Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
o número de vezes que a string aparece no array. */

const meuArrayDeStrings = ["maçã", "banana", "maçã", "laranja", "banana", "banana"];
const frequencia = {};

for (let i = 0; i < meuArrayDeStrings.length; i++) {
    const palavra = meuArrayDeStrings[i];
    if (frequencia[palavra]) {
        frequencia[palavra]++;
    } else {
        frequencia[palavra] = 1;
    }
}

console.log(frequencia);