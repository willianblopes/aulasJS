/*
Luiz Otávio Miranda tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
*/
const nome = 'Willian';
const sobrenome = 'Barreto';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let imc;
let anoNascimento;
anoNascimento = 2023 - idade;
imc = peso / (alturaEmM * alturaEmM);
console.log(nome,sobrenome,'tem',idade,'anos,','e pesa',peso,'KG','tem',alturaEmM,'de altura e seu imc é de ',imc,'nasceu no ano de',anoNascimento);
