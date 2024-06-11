export default function sum(num1, num2) {
    if (arguments.length !== 2) {
        return 'Por favor, ingrese dos números válidos.';
    }

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (isNaN(num1) || isNaN(num2)) {
        return 'Por favor, ingrese dos números válidos.';
    } else {
        let suma = num1 + num2;
        return 'La suma es: ' + suma;
    }
}
