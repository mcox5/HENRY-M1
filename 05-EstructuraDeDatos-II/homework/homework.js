"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.head=null; //es un nodo
  this.size=0;
}

function Node(value) {
  this.value=value;
  this.next=null;
}

LinkedList.prototype.add = function (valor) {
  //primero creamos un nodo
  let nodo = new Node(valor);
  //debemos ver si hay un nodo almacenado en head o no, para esto creamos una variable
  let current=this.head;
  if (!current) { //nos estamos preguntando si la lista está vacida
    this.head=nodo;
    this.size++;
    return nodo;//ya que sería el primer nodo
  }
  while (current.next) {
    current=current.next ;// cuando el next del nodo llega a valor null, significa que llegamos al final de la lista, por lo que es momento de insertar el nuevo nodo
  }
  current.next=nodo;
  this.size++;
}

LinkedList.prototype.remove = function () {
  //debemos recorrer los nodos hasta llegar al nodo final y remover este último
  //nos daremos cuenta de que se trata del nodo final por que el next de este va a ser un valor null
  //recorreremos los nodos igual que en la función add
  //partimos definiendo una variable como el head
  let current=this.head; //current parte con el nodo de incio
  //vemos el caso de una lista vacida:
  //console.log(current)
  if ((current)===null) return null;
  if (!(current.next)) {
    let aux=this.head.value //utilizamos variable auxiliar para almacenar el valor antes de asignarle el valor de null
    this.size--;
    this.head=null ;
    return aux
  }
  let current_2=null
  //let ultimo_nodo=0 //necesitamos una variable para almacenar el valor del ultimo nodo que vamos a eliminar
  while (current.next.next) {
    current=current.next ;//guardamos la info del penultimo nodo
  }
  let aux=current.next.value
  current.next=null
  this.size--
  return aux
  
 
  // de esta manera ya no va a ser igual a un next como nodo, ahora va a ser un next como null
  //a estas alturas current es el ultimo nodo (value: x, next:null)
  
};

// search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
//   Ejemplo: 
//   search(3) busca un nodo cuyo valor sea 3;
//   search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
//   En caso de que la búsqueda no arroje resultados, search debe retornar null.
LinkedList.prototype.search = function (input) {
  //primero nos preguntamos si el input es una funcion o una string
  //si es un string chequeamos que el valor del nodo sea igual al del string y retornamos el value
  //si no es un string, es una funcion, entonces si a esa funcion le entregamos un value, que retorne true, y vemos que value hace q cumpla esa condicion
  let current=this.head;
  
  while (current) { //este while se corta cuando current toma el valor de null
    if (typeof input==="function") {
      //input es funcion
      if (input(current.value)) return current.value;
    } else {
      //input es string
      if (current.value===input) return current.value;
    }
    current=current.next //si es que no cumple ninguna de las condiciones me debo mover
  }
  return null
}

      


      
    



let nueva_lista=new LinkedList();
//onsole.log(nueva_lista.add(3))
//console.log(nueva_lista.add(3))
nueva_lista.add(4)
nueva_lista.add(3)
nueva_lista.add("hola")
console.log(nueva_lista);
// console.log(nueva_lista);
// console.log(nueva_lista.remove())
//console.log(nueva_lista)
console.log(nueva_lista.remove())
//console.log(nueva_lista.search(3))
/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  // la funcion hash recibe un nmbre y retorna un index en el array de 35 buckets y guarda en ese indice el valor del nombre

  // luego imaginemos un apellido, donde ese apellido se mete a la funcion hash y retorna un indice en el array de 35 buckets y guarda en ese indice el valor de ese apellido

  //entonces la funcion hash nos dice en que bucket colocar cada propiedad!

  this.numBuckets=35
  this.buckets=[]
}
//deducimos del test que existe un metodo hash
HashTable.prototype.hash = function(key) {
  let acumulador=0;
  for (const char of key) {
    const num=char.charCodeAt();
    acumulador+=num;
  }
  //modulo es el resto de una division
  return acumulador % this.numBuckets;
} 
HashTable.prototype.set = function(key, value) {
  if (typeof key !=="string") throw TypeError ("Keys must be strings"); //lo vimos por el test
  //primero hasheamos el key
  const index=this.hash(key);
  if (!this.buckets[index]) {
    this.buckets[index]={};
  } // esta es la cajita donde voy a trabajar
  //ahora debemos chequear si es que esa posicion ya tiene algo guardado, debemos tener cuidado de NO PISAR nuestro objeto que ya esta guardado
  
  // a este punto... bucket es un objeto
  this.buckets[index][key]=value;

}
HashTable.prototype.get = function(key) {
  // lo primero es hashear la key
  const index= this.hash(key);
  let bucket= this.buckets[index];
  if (bucket) {
    return bucket[key];
  }
  
}

const miHash= new HashTable();
console.log(miHash);
miHash.set("nombre", "Jorge");
console.log(miHash);


HashTable.prototype.hasKey = function(key) {
  console.log(this.get(key))
  if (this.get(key)) {
    return true;
  } else {
    return false;
  }
}

console.log(miHash.hasKey("nombre"))

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
