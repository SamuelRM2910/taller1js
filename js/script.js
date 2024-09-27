document.write("Mira mi taller profe");
alert("Hola usuario!!");
console.log("taller1 de js");

let nombre = prompt("Escrimbe tu nombre: ");

console.log(
  "HOLA, espero que tu dia sea excelente " +
    nombre +
    " Bienvenido a mi taller de js. "
);
/* "*Tu nombre va aqui*" */

let edad = prompt("ingresa tu edad " + nombre);

const mensaje = console.log("Edad es: " + edad);
/* document.write("<br> la edad de " + respuesta +  " es :" + edad); */

var confirmacion = window.confirm("¿Quieres registrate en nuestra pagina? ");
if (confirmacion == true) {
  console.log("Gracias por confirmar tu registro");
} else {
  console.log(".....");
} /* me guie en los talleres de phyton y tambien busque ejemplos de la web */
/* document.write("El nombre del usuario es: " + respuesta);  */
/* lef confirmacion = prompt("") */

let operador = prompt(" 1. suma 2.resta 3. multi 4. div ");
let num1 = parseInt(prompt("ingrese el primer numero: "));
let num2 = parseInt(prompt("ingrese el segundo numero: "));

if (operador == "1") {
  let suma = num1 + num2;
  console.log("El resultado de la suma es: " + suma);
} else if (operador == "2") {
  let resta = num1 - num2;
  console.log("El resultado de la resta es;" + resta);
} else if (operador == "3") {
  let multi = num1 * num2;
  console.log("El resultado de la multi es: " + multi);
} else if (operador == "4" && num2 > 0) {
  let div = num1 / num2;
  console.log("El relsultado de la div es: " + div);
} else {
  console.log("No es valido ");
}

/* let suma = num1 + num2;
let resta = num1 - num2;
let multi = num1 * num2;
let div = num1 / num2;
 */

let comparando1 = parseInt(prompt("ingrese un numero: "));
let comparando2 = parseInt(prompt("ingrese el segundo numero: "));

if (comparando1 > comparando2) {
  console.log(" es mayor " + comparando1 + "que " + comparando2);
} else if (comparando1 < comparando2) {
  console.log("el menor " + comparando1 + "que " + comparando2);
} else if (comparando1 == comparando2) {
  console.log("los numeros son iguales: ");
}
