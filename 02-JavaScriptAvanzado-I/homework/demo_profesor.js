// var num1 = 3;

// function calcCuadrado(num) {
//   return num * num;
// }

// var cuad1 = calcCuadrado(num1); // <=
// var cuad5 = calcCuadrado(5);

// // contexto global

// // <= PASAMOS POR ACÁ

// ////////////////////////////////////////////

// ////////////////////////////////////////////
// // GLOBAL => this

// // creation phase!!!
// // LEXICAL ENVIRONMENT
// //
// // - num1 = 5
// // - cuad1 = 9;
// // - cuad5 = 25
// //
// // calcCuadrado(num) {
// //   return num * num;
// // }

// function hola() {
//   var foo = "Hola!";
//   console.log(bar);
// }

// var bar = "Chao";

// hola();

// console.log(bar);
// // console.log(foo);

/////////////////////////////////////

// console.log(num1); // <=
// var num1 = 5;
// console.log(num1);

// saludar();

// console.log(num2);

// function saludar() {
//   console.log("Hola! Cómo estás?");
// }

// function prueba() {
//   console.log(miVariable);
//   var miVariable = 10;
//   console.log(miVariable);
// }

// // prueba();

// function b() {
//   console.log("B!");
// }

// function a() {
//   // invoca a la función b
//   b();
// }

// //invocamos a
// a();

// // // mas cosas

// // // PILA DE EJECUCIÓN

// var global = "Hola!"; // global

// function a() {
//   // como no hay una variable llamada global en este contexto,
//   // busca en el outer que es el global
//   console.log(global); // Hola!
//   global = "Hello!"; // cambia la variable del contexto global
// }

// function b() {
//   // declaramos una variable global en nuestro contexto
//   // esta es independiente
//   global = 5;
//   var global = "Chao";
//   console.log(global);
// }

// var global = "Otra cosa";
// console.log(global);
// a(); // OK
// b(); //
// console.log(global);

// console.log(Number("3"));
// console.log(Number(false));
// console.log(Number(true));
// console.log(Number(undefined));
// console.log(Number(null));

// // NaN => Not a Number

// var a = 10;
// var b = 15;
// var c = a;
// a = 25;

// console.log(a);
// console.log(c);

var miArray = [1, 2, 3, 4, 5]; // APUNTAR A ESA POSICIÓN EN MEMORIA

var miOtroArray = miArray; //REFERENCIA A ESA POSICIÓN EN MEMORIA

miOtroArray.push("Cambié");

console.log(miArray);

// MEMORIA => [1, 2, 3, 4, 5];
