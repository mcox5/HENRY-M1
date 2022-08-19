///Lecture 18 de Agosto

//Closures: Tenemos una closure cuando una funcion que retorna una función RECUERDA el parámetro previo con que se utilizó la primera función.

// function saludar(saludo) {
//     return function (nombre) {
//         console.log(saludo+" " + nombre); //la pregunta acá es donde almacenó el "Hola". La respuesta es que la consola puede acceder a 
//                                           // un "recuerdo" por mas que no estén en su contexto
//                                           //
//     };
// }
// var saludarHola=saludar("Hola"); 
// saludarHola("Juan")

//veamos otro ejemplo

// function crearContador() {
//     var count = 0;
//     return function () {
//         count++; //en este caso count no pertenece al contexto de esta funcion, pero como retorne una funcion que ocupa este variable
//                 // al eliminar el contexto de ejecucion de crearContador, como retorno una funcion que utilizaba esa variable count, sigue exitiendo/esperando para que esta
//                 //funcion siguiente la siga ocupando!, (RECUERDAAAAAAMEEEEE)
                
//         return count;
//     };
// }
// var contador1=crearContador();
// console.log(contador1())
// console.log(contador1())
// console.log(contador1())
// console.log(contador1())
// console.log(contador1())

// // sin embargo vemos que el count NO SE PUEDE MANIPULAR!, la unica forma de hacerlo sería creando otra variable

// var contador2=crearContador();
// console.log(contador2())
// console.log(contador2())
// console.log(contador2())
// console.log(contador2())
// console.log(contador2())
//##################################################################
//##################################################################
//##################################################################
//##################################################################
//##################################################################
//##################################################################
///Bind, Call & Apply

// var persona={
//     nombre:"Ivan",
//     apellido:"Escalante",
// };

// var logNombre=function() {
//     console.log(this.nombre);
// };

// logNombre();

// var logNombrePersona=logNombre.bind(persona) //el this va a ser lo que se le pase como parámetro,
//                                             // termina siendo una copia de la variable logNombre, con el this como persona
//                                             //Esto nos soluciona el GRAN PROBLEMA del descontrol del this que vimos la clase pasada
//                                             //De que si esta dentro de una funcion que esta contenida dentro de otra funcion que esta contenida en un objeto
//                                             //se refería al global
//                                             //bind DEVUELVE UNA FUNCION!!!!
// logNombrePersona()

//Otro ejemplo

// function multiplica(a,b) {
//     return a*b;
// }

// var multiplicaPorDos=multiplica.bind(this,2); //En este caso bindie el a como 2 y faltaria entregarle el b
// var multiplicaPorDos=multiplica.bind(this,2,3); //En este caso bindie el a como 2 y el b como 3
// var multiplicaPorDos=multiplica.bind(this,2,4,5,"hola"); //En este caso bindie el a y el b y el resto no le va a interesar a la funcion

// console.log(multiplicaPorDos(5))

//Ahora un ejemplo para el call: Esto lo utilizamos para señalarle quien es this. Call hace lo mismo que bind, solo que invola la funcin

persona={
    nombre: "Julian Riera"
}
persona2={
    nombre:"MARITN juLIA"
}
var logNombre= function() {
    console.log(this.nombre)
}

/////Apply: Es igual a call, solo que el segundo argumento es un arreglo