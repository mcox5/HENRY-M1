const {
    Queue,
    Node,
    LinkedList,
    BinarySearchTree
} = require('./DS.js')

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var countArray = function(array) {
    // Tu código aca:
    //cuando recorremos los array, nos podemos topar con dos cosas, un numero o un array (debemos utilizar una recursion CONFIAR EN NUESTRA FUNCION)
    //voy a necesitar un acumulador (let count)
    //voy a recorrer el array (esto es un for)
    //a medida que voy recorriendo debo preguntar si es un numero o un array, si es numero lo agregamos al contador, si es array invocamos la funcion countArray
    //cuando todo esto termine voy a terminar retornando count

    let count = 0;
    for (let i=0 ; i<array.length; i++) { //el caso de cierre en este caso es el termine de recorrer
        if (Array.isArray(array[i])) {
            //es un array
            count+=countArray(array[i]); //aca es donde llamamos a la funcion
        } else {
            //es un numero
            count += array[i];
        }
    }
    return count;
}


// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
// var obj = {
//   a: {
//     a1: 10,
//     a2: 'Franco',
//     a3: {f: 'r', a: 'n', c: {o: true}}
//   },
//   b: 2,
//   c: [1, {a: 1}, 'Franco']
// }
// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total


//ver solucion de este  nuevamente
var countProps = function(obj) {
    // Tu código aca:
    //sabemos que voy a necesitar un count que parte en cero
    //recorremos con un for in
    //al recorrer le pregunte si es un objeto, si es un objeto le pregunto cuantas propiedadades tiene ese objeto pasandole countProps pasandole ese objeto
    //si no es un objeto el count no hace nada y sigo recorriendo
    
    let count=0;
    for (const prop in obj) { //aca estoy recorriendo las propiedades de un objeto
        count++; 
        if (typeof prop ==="object" && !Array.isArray(obj[prop])) {
            count += countProps(obj[prop])
        }
    }
    return count;
};


// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no puedan castearse a numeros por 'Kiricocho' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kirikocho] y la función debería haber devuelto el valor 1

//castear es convertir los datos!

//a medida que voy recorriendo los datos preguntemso si se puede castear a numero (true, "3", 3 sí se pueden castear, "hola" no puede!)
// Utilizamos metodo Number para castear
//hay un método que se llama isNan que nos dice si algo es numero o no
//ver solucion denuevo
LinkedList.prototype.changeNotNumbers = function(){

    // Tu código aca:
let count = 0;
let current=this.head;
while (current) {
    if (isNan(Number(current.value))) {
        current.value = "kiricocho";
        count ++;
    }
    current = current.next;
}
return count;
}


// Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
// debe devolver una nueva Queue que vaya mergeando (uniendo/mezclando) los nodos de las anteriores.
// Ejemplo:
// - queueOne: [7,3,5]
// - queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues.

var mergeQueues = function(queueOne, queueTwo) {
    // Tu código aca:
//RECORDAR que la queue siempre saca de alprincipio y agrega al final!
const newQueue = new Queue;
while (queueOne.size() || queueTwo.size()) { 
    //sacar de la fila 1 y guardar en la nueva fila
    if (queueOne.size()) newQueue.enqueue(queueOne.dequeue()) // a la nueva lista le agrego lo que saco de la queueOne
    //sacar de la fila 2 y guardar en la nueva fila
    if (queueTwo.size()) newQueue.enqueue(queueTwo.dequeue()) // a la nueva lista le agrego lo que saco de la queueTwo
}
return newQueue;
}


// Implementar la funcion closureMult que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo: 
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8 (2 * 4)
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24


//atacar este problema que debiera ser muy facil!
var closureMult = function(multiplier) {
    // Tu código aca:
    return function (num) {
        return multiplier * num;
    }

}

// Implementar el método sum dentro del prototype de BinarySearchTree
// que debe retornar la suma total de los valores dentro de cada nodo del arbol
BinarySearchTree.prototype.sum = function() {
    // Tu código aca:
    let count = 0;
    count += this.value;
    if (this.left) count +=this.left.sum();
    if (this.right) count += this.right.sum();
    return count
}

module.exports = {
    countArray,
    countProps,
    mergeQueues,
    closureMult
}