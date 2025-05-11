/* Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
nome e idade. */

let pessoa = {
    nome: "Lucas",
    idade: 17
};

console.log(pessoa.idade);

pessoa.email = "teste@teste.com";

console.log(pessoa);