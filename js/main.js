const nombre = prompt("INGRESE EL NOMBRE DE SU ASOCIACION CIVIL:");
const municipio = prompt("ingrese el municipio donde se desarrollan");
const anioNacimiento = parseInt(prompt("en que año iniciaron su funcionamiento?"));


const anioActual = 2026;
let edad = anioActual - anioNacimiento;


const mensaje = "Hola " + nombre + ", desarrollan sus actividades en " + municipio + " hace aproximadamente " + edad + " años.";


console.log(mensaje);
alert(mensaje);