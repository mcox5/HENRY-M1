'use strict'

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
    if (n===1 || n===0) { //recordar QUE SIEMPRE! es buscar el caso BASE en recursión
        return (1);   
    } else if (n<0) {
        return "NO EXISTE FACTORIAL PARA NEGATIVOS";
    }
    else {
        return (n * nFactorial(n-1)); //Aca generalmente va la Fórmula de la recursion!
    }

}

function nFibonacci(n) {
  //en la posición 0 de la secuencia vamos a tener cero y en la posición 1 vamos a tener un 1
  //0=0
  //1=1
  //2=1+0=1
  //3=1+1=2
  //4=2+1=3
  //5=3+2=5
  //en este caso podemos ver que el 0 y el 1 son nuestros casos bases!
  if (n<0) return "No existe posición negativa"; //ojo que se puede escribir de esta manera también los "if"
  if (n===0 || n===1) return n;
  //ya tenemos nuestros casos bases escritos, ahora buscamos la fórmula que se adecuúe a lo que se pida
  return nFibonacci(n-1)+nFibonacci(n-2)
}

//console.log(nFibonacci())

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
  this.arr=[];
}
Queue.prototype.enqueue = function (value) {
  this.arr.push(value)
};
Queue.prototype.dequeue = function () {
  return this.arr.shift(); // el shift por si solo retorna undefined si es que el array está vacido
  
};
Queue.prototype.size = function () {
  return this.arr.length;
};
const miQueue= new Queue
// console.log(miQueue.size())
// console.log(miQueue.enqueue())
// console.log(miQueue.dequeue())



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
