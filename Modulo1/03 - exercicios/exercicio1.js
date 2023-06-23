// calcula a média de notas de um aluno

let nota1 = 9;
let nota2 = 5;
let nota3 = 8;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log('Reprovado! Sua foi foi ' + media.toFixed(1));
} else if (media >= 5 && media <= 7) {
    console.log('Recuperação! Sua média foi ' + media.toFixed(1));
} else {
    console.log('Passou de semestre! Sua média foi ' + media.toFixed(1));
}
