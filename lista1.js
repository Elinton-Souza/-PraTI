prompt = require('prompt-sync')();

// // 1
// let nota1 = parseFloat(prompt('Digite a primeira nota [0 - 10]: '));
// let nota2 = parseFloat(prompt('Digite a segunda nota [0 - 10]: '));
// let media = (nota1 + nota2) / 2;

// if (media >= 7) {
//     console.log('Aprovado, sua média é: ' + media);
// } else if (media >= 5 && media <= 6.9) {
//     console.log('Recuperação, sua média é: ' + media);
// } else {
//     console.log('Reprovado, sua média é: ' + media);
// }


// // ------------------------------------------------------------


// // 2
// const anoAtual = new Date().getFullYear();
// let anoNascimento = Number(prompt('Digite o ano de nascimento: '));
// let idade = anoAtual - anoNascimento;

// if (idade >= 18 && idade <= 59) {
//         console.log('Sua idade é: ' + idade + ' - Você é: Adulto(a)');
//     } else if (idade >= 60) {
//             console.log('Sua idade é: ' + idade + ' - Você é: Idoso(a)');
//         } else{
//                 console.log('Sua idade é: ' + idade + ' - Você é: Criança');
//             }

            
// // ------------------------------------------------------------


// // 3
// let salario = parseFloat(prompt('Digite o salário mensal (R$): '));
// let aumento = parseFloat(prompt('Digite o percentual de aumento (%): '));

// if(salario < 1500){
//     aumento = aumento * 2;
// }

// let novoSalario = salario + (salario * (aumento / 100));
// console.log('O novo salário é: R$ ' + novoSalario.toFixed(2));

// // ------------------------------------------------------------

// // 4
// let numero1 = Number(prompt('Digite o primeiro número: '));
// let numero2 = Number(prompt('Digite o segundo número: '));
// let numero3 = Number(prompt('Digite o terceiro número: '));

// if (numero1 >= numero2 && numero1 >= numero3) {
//     console.log('O maior número é: ' + numero1);
// } else if (numero2 >= numero1 && numero2 >= numero3) {
//     console.log('O maior número é: ' + numero2);
// } else {
//     console.log('O maior número é: ' + numero3);
// }


// // ------------------------------------------------------------


// // 5
// let compra = parseFloat(prompt('Digite o valor da compra (R$): '));
// let desconto;

// if (compra >= 100 && compra <= 299.99) {
//     desconto = 10;
//     console.log('Valor da compra: R$ ' + compra.toFixed(2));
//     console.log('Desconto aplicado: ' + desconto + '%');
//     console.log('Valor com desconto: R$ ' + (compra - (compra * (desconto / 100))).toFixed(2));
// } else if (compra >= 300 && compra <= 499.99) {
//     desconto = 15;
//     console.log('Valor da compra: R$ ' + compra.toFixed(2));
//     console.log('Desconto aplicado: ' + desconto + '%');
//     console.log('Valor com desconto: R$ ' + (compra - (compra * (desconto / 100))).toFixed(2));
// } else if (compra >= 500) {
//     desconto = 20;
//     console.log('Valor da compra: R$ ' + compra.toFixed(2));    
//     console.log('Desconto aplicado: ' + desconto + '%');
//     console.log('Valor com desconto: R$ ' + (compra - (compra * (desconto / 100))).toFixed(2));
// } else {
//     desconto = 0;
//     console.log('Valor da compra: R$ ' + compra.toFixed(2));
//     console.log('Compra abaixo do valor mínimo. Desconto não aplicável.');
//     console.log('Valor final a ser pago: R$ ' + compra.toFixed(2));
// }


// // ------------------------------------------------------------


// // 6
// let saque = parseFloat(prompt('Digite o valor do saque (apenas valores multiplos de 10) (R$): '));
// let notas100 = 0;
// let notas50 = 0;
// let notas20 = 0;
// let notas10 = 0;
// if (saque % 10 !== 0) {
//     console.log('Valor inválido. O valor do saque deve ser múltiplo de 10.');
// } else {
//     while (saque >= 100) {
//         notas100++;
//         saque -= 100;
//     }
//     while (saque >= 50) {
//         notas50++;
//         saque -= 50;
//     }
//     while (saque >= 20) {
//         notas20++;
//         saque -= 20;
//     }
//     while (saque >= 10) {
//         notas10++;
//         saque -= 10;
//     }
//     console.log('Notas de 100: ' + notas100);
//     console.log('Notas de 50: ' + notas50);
//     console.log('Notas de 20: ' + notas20);
//     console.log('Notas de 10: ' + notas10);
// }


// // ------------------------------------------------------------


// // 7
// let numero1 = parseFloat(prompt('Digite o primeiro número: '));
// let numero2 = parseFloat(prompt('Digite o segundo número: '));

// switch (+prompt('Escolha a operação: 1 - Adição, 2 - Subtração, 3 - Multiplicação, 4 - Divisão: ')) {
//     case 1:
//         console.log('Resultado da adição: ' + (numero1 + numero2));
//         break;
//     case 2:
//         console.log('Resultado da subtração: ' + (numero1 - numero2));
//         break;
//     case 3:
//         console.log('Resultado da multiplicação: ' + (numero1 * numero2));
//         break;
//     case 4:
//         if (numero2 === 0) {
//             console.log('Erro: Divisão por zero não é permitida.');
//         } else {
//             console.log('Resultado da divisão: ' + (numero1 / numero2));
//         }
//         break;
//     default:
//         console.log('Erro: Opção inválida. Escolha um número de 1 a 4.');
// }


// // ------------------------------------------------------------


// // 8
// let tamanhoPizza = prompt('Digite o tamanho da pizza (P, M, G): ').toUpperCase();
// let tipoBorda = prompt('Digite o tipo de borda (Tradicional, Recheada): ').toLowerCase();

// let tamanhoP = 25;
// let tamanhoM = 35;
// let tamanhoG = 45;
// let bordaRecheada = 8;

// let precoTotal = 0;

// switch (tamanhoPizza) {
//     case 'P':
//         precoTotal = tamanhoP
//         switch (tipoBorda) {
//             case 'recheada':
//                 precoTotal += bordaRecheada;
//                 break;
//             case 'tradicional':
//                 break;
//             default:
//                 console.log('Erro: Tipo de borda inválido. Escolha Tradicional ou Recheada.');
//                 precoTotal = 0; 
//         }
//         console.log('Preço da pizza: R$ ' + precoTotal.toFixed(2));
//         break;
//     case 'M':
//         precoTotal = tamanhoM
//         switch (tipoBorda) {
//             case 'recheada':
//                 precoTotal += bordaRecheada;
//                 break;
//             case 'tradicional':
//                 break;
//             default:
//                 console.log('Erro: Tipo de borda inválido. Escolha Tradicional ou Recheada.');
//                 precoTotal = 0; 
//         }
//         console.log('Preço da pizza: R$ ' + precoTotal.toFixed(2));
//         break;
//     case 'G':
//         precoTotal = tamanhoG
//         switch (tipoBorda) {
//             case 'recheada':
//                 precoTotal += bordaRecheada;
//                 break;
//             case 'tradicional':
//                 break;
//             default:
//                 console.log('Erro: Tipo de borda inválido. Escolha Tradicional ou Recheada.');
//                 precoTotal = 0; 
//         }
//         console.log('Preço da pizza: R$ ' + precoTotal.toFixed(2));
//         break;
//     default:
//         console.log('Erro: Tamanho de pizza inválido. Escolha P, M ou G.');
// }


// // ------------------------------------------------------------


// // 9
// let numero = parseInt(prompt('Digite um número inteiro (entre 1 e 12): '));
// let bissesto = (ano) => {
//     if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
//         return true;
//     }
//     return false;
// };
// switch (numero) {
//     case 1:
//         console.log('O mês 1 é o mês de Janeiro e possui 31 dias.');
//         break;
//     case 2:
//         if (bissesto(parseInt(prompt('Digite um ano para verificar se é bissexto: ')))) {
//             console.log('O ano é bissexto. O mês 2 é o mês de Fevereiro e possui 29 dias.');
//         } else {
//             console.log('O ano não é bissexto. O mês 2 é o mês de Fevereiro e possui 28 dias.');
//         }
//         break;
//     case 3:
//         console.log('O mês 3 é o mês de Março e possui 31 dias.');
//         break;
//     case 4:
//         console.log('O mês 4 é o mês de Abril e possui 30 dias.');
//         break;
//     case 5:
//         console.log('O mês 5 é o mês de Maio e possui 31 dias.');
//         break;
//     case 6:
//         console.log('O mês 6 é o mês de Junho e possui 30 dias.');
//         break;
//     case 7:
//         console.log('O mês 7 é o mês de Julho e possui 31 dias.');
//         break;
//     case 8:
//         console.log('O mês 8 é o mês de Agosto e possui 31 dias.');
//         break;
//     case 9:
//         console.log('O mês 9 é o mês de Setembro e possui 30 dias.');
//         break;
//     case 10:
//         console.log('O mês 10 é o mês de Outubro e possui 31 dias.');
//         break;
//     case 11:
//         console.log('O mês 11 é o mês de Novembro e possui 30 dias.');
//         break;
//     case 12:
//         console.log('O mês 12 é o mês de Dezembro e possui 31 dias.');
//         break;
//     default:
//         console.log('Erro: Número inválido. Digite um número entre 1 e 12.');
// }


// // ------------------------------------------------------------


// 10
let horas = parseFloat(prompt('Digite a quantidade de horas que o veículo ficou estacionado: '));
let valorCobrado = 0;

switch (true) {
    case (horas <= 0):
        console.log('Erro: Quantidade de horas inválida. Digite um valor maior que 0.');
        break;
    
    case (horas <= 1):
        valorCobrado = 8.00;
        break;
    
    case (horas <= 2):
        valorCobrado = 8.00 + (horas - 1) * 6.00;
        break;

    case(horas <= 3):
        valorCobrado = 8.00 + 6.00 + (horas - 2) * 4.00;
        break;
    
    case (horas > 3):
        let horasAdicionais = horas - 3;
        valorCobrado = 4.00 + 4.00 + 4.00 + (horasAdicionais * 2.00);
        break;
    
    default:
        console.log('Erro: Quantidade de horas inválida.');
}

if (valorCobrado > 0) {
    console.log('Tempo estacionado: ' + horas + ' horas');
    console.log('Valor a ser cobrado: R$ ' + valorCobrado.toFixed(2));
}