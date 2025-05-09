/* Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7. */


function calcularPesoIdeal(altura, sexo) {
    if (sexo === "m") {
        return 72.7 * altura - 58;
    } else {
        return 62.1 * altura - 44.7;
    }
}   

console.log(calcularPesoIdeal(1.80, "m").toFixed(2));
console.log(calcularPesoIdeal(1.60, "f").toFixed(2));


