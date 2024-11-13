// Desafio 1
console.log('Olá Mundo!');

// Desafio 2
let nome = 'Guilherme';
console.log(`Olá ${nome}`);

// Desafio 3
let nome2 = 'Guilherme';
alert(`Olá ${nome2}`);

// Desafio 4
let linguagemProgramacao = prompt('Qual a linguagem de progamação q vc mais gosta?');
console.log(linguagemProgramacao);

// Desafio 5
let valor1 = 5;
let valor2 = 5;
let resultado = valor1 + valor2;
console.log(`A soma dos valores ${valor1} e ${valor2} e igual ${resultado}`);

// desafio 6
let valorA = 5;
let valorB = 2;
let resultado2 = valorA - valorB;
console.log(`A diferença entre o valores ${valorA} e ${valorB} são de ${resultado2}`)

// desafio 7
let idade = prompt('Qual sua idade?');
if (idade >= 18){
    console.log('Voçê é maior de idade, cuidado para não ser preso');
}else{
    console.log('Seja bem vindo!');
}

// desafio 8
let numero = prompt('Digite um número positivo ou negativo');
if (numero > 0) {
    alert(`${numero} número positivo`);
}else{
    alert(`${numero} número negativo`);
}

// desafio 9
let contador = 1;
while(contador <= 10) {
    console.log(contador);
    contador++;
}

// desafio 10
let nota = 5;
if (nota >= 7) {
    console.log('aprovado');
}else{
    console.log('Reprovado');
}

// desafio 11
console.log(Math.random() );

// desafio 12
console.log(Math.random() * 10 + 1);

// desafio 13
console.log(Math.random() * 1000 + 1);