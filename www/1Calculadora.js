'use strict';

const n1 = parseInt(prompt('Dame el primer número'))
const operador = prompt('Dame el operador (+, -, *, / o ^)')
const n2 = parseInt(prompt('Dame el segundo número'))

function calculadora(n1, operador, n2) {

    switch (operador) {
        case '+':
            return n1 + n2;
            break;
        case '-':
            return n1 - n2;
            break;
        case '*':
            return n1 * n2;
            break;
        case '/':
            return n1 / n2;
        case '^':
            return Math.pow(n1, n2);
            break;
        default:
            console.log('Esa operación no está disponible')
    }

};

const operacion = calculadora(n1, operador, n2)

console.log(operacion);