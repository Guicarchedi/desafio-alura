let diaDaSemana = prompt('Olá! Qual é o dia da semana?');
if (diaDaSemana == 'Sábado') {
    alert('Bom final de semana!');
}else if (diaDaSemana == 'Domingo') {
    alert('Bom final de semana!');
}else {
    alert('Boa semana!');
}

let numero = prompt('Digite um número positivo ou negativo');
if (numero > 0) {
    alert('Número positivo');
}else {
    alert('Número negativo');
}

let pontuacao = prompt('Qual sua pontuação?');
if(pontuacao >= 100) {
    console.log('Parabens vc ganhou o jogo!');
}else {
    console.log('Infeliz mente vc perdeu :(');
}

let saldoDaConta = 500;
alert(`Seu saldo bancario é de ${saldoDaConta}.`);

let nomeUsuario = prompt('Qual seu nome?');
alert(`Seja bem vindo ao meu site senhor ${nomeUsuario}`);