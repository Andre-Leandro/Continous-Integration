const assert = require('assert');
const strictEqual = assert.strictEqual
const sum = require('../script2.js');

describe('Función sumar()', () => {
    it('debería devolver la suma de dos números', () => {
        strictEqual(sum(2, 3), 'La suma es: 5');
        strictEqual(sum(0, 0), 'La suma es: 0');
        strictEqual(sum(-1, 1), 'La suma es: 0');
    });

    it('debería devolver NaN si se le pasa un valor no numérico', () => {
        strictEqual(sum('a', 5), 'Por favor, ingrese dos números válidos.');
        strictEqual(sum(2, 'b'), 'Por favor, ingrese dos números válidos.');
        strictEqual(sum('foo', 'bar'), 'Por favor, ingrese dos números válidos.');
    });

    it('debería devolver NaN si se le pasa solo un argumento', () => {
        strictEqual(sum(5), 'Por favor, ingrese dos números válidos.');
        strictEqual(sum('2'), 'Por favor, ingrese dos números válidos.');
    });

});