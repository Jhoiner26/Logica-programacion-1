// ingresamos numeros y validamos (en este caso son 3 numeros)
function pedirNumero(mensaje) {
    let num;
    do {
        let entrada = prompt(mensaje);
        num = Number(entrada);
        if (isNaN(num) || entrada === null || entrada.trim() === "") {
            alert("Por favor, ingresa un número válido.");
        }
    } while (isNaN(num) || num === null);
    return num;
}

// primeramenre solicitamos los 3 numeros en una casilla flotante del terminal
let num1 = pedirNumero("Ingresa el primer número:");
let num2 = pedirNumero("Ingresa el segundo número:");
let num3 = pedirNumero("Ingresa el tercer número:");

// revisamos si los numeros son iguales de lo contrario los ponemos de mayor a menor
if (num1 === num2 && num2 === num3) {
    console.log("Todos los números son iguales:", num1, num2, num3);
} else {
    // creamos variable para organizar facil
    let numeros = [num1, num2, num3];

    // mayor a menor
    let mayorAMenor = [...numeros].sort((a, b) => b - a);

    // menor a mayor
    let menorAMayor = [...numeros].sort((a, b) => a - b);

    // mostramos los resultados en la consola html
    console.log("Números ingresados:", num1, num2, num3);
    console.log("De mayor a menor:", mayorAMenor.join(", "));
    console.log("De menor a mayor:", menorAMayor.join(", "));
}