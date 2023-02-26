//teste

var user = 0;
var cpu = 0;
var contador = 0;
var nivel = 0;
var rodadas = 0;

function jogo() {
    let optionUser = parseInt(
        prompt(
            "Informe qual a sua opção de jogada [1. Pedra, 2. Tesoura e 3. Papel]"
        )
    );
    let optionCpu = parseInt(Math.random() * 3 + 1);

    console.log(optionUser);
    console.log(optionCpu);

    if (optionUser === 1 && optionCpu === 2) {
        alert("Você ganhou essa rodada!");
        user += 1;
    } else if (optionUser === 2 && optionCpu === 3) {
        alert("Você ganhou essa rodada!");
        user += 1;
    } else if (optionUser === 3 && optionCpu === 1) {
        alert("Você ganhou essa rodada!");
        user += 1;
    } else if (optionUser === optionCpu) {
        alert("Empate!");
    } else {
        alert("Você perdeu essa rodada!");
        cpu += 1;
    }
}

function placar(rodadas, user, cpu) {
    if (user >= rodadas - 1 && user > cpu && user === cpu) {
        alert("Você venceu! Parabéns!")
    }
    else if (user >= rodadas - 2 && user > cpu) {
        alert("Você venceu! Parabéns!")
    }
    else if (user >= rodadas - 2 && user > cpu) {
        alert("Você venceu! Parabéns!")
    }

    else (
        alert("Você perdeu! Melhor sorte da próxima vez!")
    )
}

nivel = parseInt(
    prompt("Informe o nível do jogo [1. Fácil - 2. Médio - 3 - Difícil"));

console.log(nivel);

switch (nivel) {
    case 1:
        do {
            jogo();
            rodadas = 3;
            contador++;
        } while (contador < rodadas);
        placar(rodadas, user, cpu);
        break;

    case 2:
        do {
            jogo();
            rodadas = 5;
            contador++;
        } while (contador < rodadas);
        placar(rodadas, user, cpu);
        break;

        case 2:
        do {
            jogo();
            rodadas = 7;
            contador++;
        } while (contador < rodadas);
        placar(rodadas, user, cpu);
        break;
    default:
        break;
};



