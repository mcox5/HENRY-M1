//CLASE 17 DE AGOSTO

//Esta clase se trata de ver como Java Script interpreta nuestro código y algunas particularidades de este.
//JS es sincronico y single Threaded, esto quiere decir que vamos a poder ejecutar una linea por vez, lo sincrónico dice
//que es una tras la otra

//El "Sintax Parser" permite al sistema identificar la sintaxis y tipeo del programa
//El "Lexical Enviroment"

//var num1=3;
//function calcCuadrado(num) {
    //return num*num; 
//}
//var cuad1=calcCuadrado(num1);
//var cuad5=calcCuadrado(5)



//"this" es una referencia al contexto donde estamos. Esta palabra referencia o apunta a ese contexto global
//cada vez que declaremos una variable con var, estamos agregando una propiedad a este contexto global 
//las variables declaradas con var y las funciones van a estar formando parte de este contexto global, en cambio cuando declaramos una variable
//con let, vimos en el ejemplo de la clase que esta NO pasa a ser parte de ese contexto global

//Este contexto global va a sr nuestro "creation face". OJO al no correr aún el código aún estas variables son UNDEFINED.
//Sin embargo, le reserva un espacion en memoria que esté disponible previo a la ejecución de estas variables.
//Toda es lista de variables y funciones a las cuales les reservamos un espacio en memoria previo a la ejecución, ESE VA A SER 
//NUESTRO LEXICAL ENVIROMENT

//Luego a la ejecución se le empieza A DARLE VALOR A LAS VARIABLES, (dejan de ser Undefined), es decir dentro de la ejecución se crea
//OTRO CONTEXTO DE EJECUCION!, en este caso se crearía un contexto de ejecución para la función calcCuad, una vez que la ejecutamos
//Cuando necesita el valor de num1, va a buscar su valor a su "OUTER CONTEXT ENVIROMENT", del cual sabe que es igual a 3.
//Cuando se termina de ejecutar la función CalcCuadrado se destruye o elimina ese contexto de ejecución.

//Luego para cuando volvemos a ejecutar calcCuadrado en cuad5 va a volver a realizar lo mismo, pero ahora el parámetro num viene entregado
//por lo tanto no hace falta viajar a un OUTER CONTEXT para buscar su valor, luego de su ejecución almacena su valor en la variable del contexto global.

//PASO A PASO

//creation phase!
//Lexical Enviroment
//-num1=undefined
//-cuad1 = undefined
//-cuad5 = undefined
//calcCuadrado (num){
//    return num*num;
// }                    OJO LAS FUNCIONES QUEDAN ENTERAS ALTIRO

//LUEGO PASAMOS A LA EXECUTION PHASE
////-num1=3
//-cuad1 = calCuadrado(num1) //aca hay que ejecutar esto, en este pas se hace un nuevo proceso de CREATION PHASE para calcCuadrado
//                           recordemos que el parámetro es como crear una variable
//         num=undefined
//         PASAMOS A EXECUTION PHASE dentro del contexto de ejecución CalCuadrado
//         num=num1 sin embargo el num1 NO está en el Lexical Enviroment de CalcCuadrado, entonces nos vamos al OuterContext para buscar su valor (OJO que si lo llegara a encontrar acá, NO lo iría a buscar afuera)
//         Una vez que se termina de ejecutar y retornó el 9, lo almacena en el contexto anterior y cambia el valor de cuad1 de Undefined a 9
//         Luego explota todo ese ambiente de Ejecución de calcCuadrado
//-cuad5 = undefined

//num1=3
//cuad1=9
//cuad5=calcCuadrado(5)  //luego acá se hace lo mismo que antes de que se crea un nuevo CREATION PHASE sin embargo, ahora se le
//                       pasa num, directamente como argumento, por lo que no hay que ir a buscarlo a un OuterContext


//HOISTING:

//Es un proceso que consistiría en adelantar la declaración de las variables de este contexto y las funciones que están declaradas
//en este contexto
//Debemos recordar que las var las deja en Undefined y las funciones las almacena completas!

//Este proceso de Hoisting ocurre en la creation Phase

//el "SCOPE" de una variable es el alcance de esa variable, y este alcance va a ser igual a su contexto de ejecución


