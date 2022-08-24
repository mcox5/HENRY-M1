"use strict";

// /*
//  Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
//  - insert: agrega un nodo en el lugar correspondiente
//   - size: retorna la cantidad total de nodos del árbol
//   - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
//   - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
//   - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

//   El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.

//   TIPS: 
// */

function BinarySearchTree(value) {
  this.value=value;
  this.left=null;
  this.right=null;
}

BinarySearchTree.prototype.insert= function (value) {
  if (value<this.value) {
    //ir hacia la izquierda
    //preguntamos si hay algo
    if (this.left) { //¿Hay algo a la izquierda?
      //si tengo algo, hago la recursion con el nodo que tengo a la izquierda
      this.left.insert (value)
    } else {
      this.left = new BinarySearchTree(value);
      return value
    }
  }
  if (value>this.value) {
    //ir hacia la derecha
    if (this.right) {
      this.right.insert (value);
    } else {
      this.right= new BinarySearchTree (value);
      return value
    }
  }
  return false;
}


BinarySearchTree.prototype.size = function () {
  // let suma=1;
  // if (this.left) {
  //   suma++;
  //   console.log(suma)
  // }
  // else if (this.right) {
  //   suma++;
  //   console.log(suma)

  // }
  // this.left.size()
  // this.right.size()

  // Recursion según santi
  // if (!this.right && !this.left) return 1;
  // else if(this.left && !this.right) return 1+this.left.size();
  // else if (this.right && !this.left) return 1+this.right.size();
  // else return 1 + this.left.size() + this.right.size ()

  //segun jorge
  let count=0;
  count++; //se suma a si mismo (es el caso base de la recursion)
  if (this.left) {
    count+=this.left.size();
  }
  if (this.right) {
    count+=this.right.size();
  }
  return count;

};
BinarySearchTree.prototype.contains = function (value) {

//SEGUN COMPAÑERO
  // if (this.value===value) return true //chequeo el valor del nodo en que estoy parado
// if (value<this.value) {
//   if (!this.left) return false;
//   else if (this.left) return this.left.contains(value);
// }
// if (!this.right) return false
// return this.right.contains(value);

//SEGUN JORGE

if (this.value===value) return true;
if (value <this.value&&this.left) { //le preguntamos el valor del value para ver que rama del arbol recorrer
  if (this.left.contains(value)) return true; //este if nos dice que si encuentra el valor ya detenga la ejecucion, pero si no que siga ejecutando
}
if (value >this.value && this.right) {
  if (this.right.contains(value)) return true; 
}
return false

//MORALEJA: APROVECHAR LAS PISTAS QUE NOS DA EL ARBOL BINARIO DADO LA FORMA QUE ESTE ESTA ORDENADO
  
};


//
//N-I-D preorder
//I-N-D in order
//I-D-N 
BinarySearchTree.prototype.depthFirstForEach = function (cb,orden) {
  //segun jorge

  switch(orden) { //es cuando sabemos los posibles casos que podemos recibir
    case "pre-order":
       cb(this.value);
       if (this.left) this.left.depthFirstForEach(cb,orden);
       if (this.right) this.right.depthFirstForEach(cb,orden);
       break;
    case "post-order":
      if (this.left) this.left.depthFirstForEach(cb,orden);
      if (this.right) this.right.depthFirstForEach(cb,orden);
      cb(this.value);
      break;

    default: 
      if (this.left) this.left.depthFirstForEach(cb,orden);
      cb(this.value);
      if (this.right) this.right.depthFirstForEach(cb,orden);
      break;

    
  }
  
  
  
  
  
  
  
  
  // let array=[]
  // let array_2=[]
  // for (let i=0;i<100;i++) {
  //   array.push(i)
  // }
  // console.log(array)
  // let valor=-1;
  // if (orden===null||orden==="in-order") {
  //   for (var i of array) {
  //     if (this.contains(i)) {
  //       array_2.push(i);
  //     }
  //   }
  //   let array_ordenado=array_2.sort(function(a,b) {a-b})
  //   console.log(array_ordenado);
  //   return array_ordenado
  // }
    
    
  
  // if (orden ==="pre-order") {} 
  // if (orden ==="pre-order") {}
  
  }
;
BinarySearchTree.prototype.breadthFirstForEach = function (cb,pendientes) {
  if (!pendientes) {
    var pendeientes=[];
  };
  cb(this.value);
  if (this.left) pendientes.push(this.left);
  if (this.right) pendientes.push(this.right);

  if (pendientes.length > 0) pendientes.shift().breadthFirstForEach(cb,pendientes); //recordar que el shit saca y retorna el primer nodo de la derecha

}


let miArbol = new BinarySearchTree (10);
console.log(miArbol);
miArbol.insert(9);
miArbol.insert(14)
miArbol.insert(5)
miArbol.insert(15)
miArbol.insert(22)

console.log(miArbol);
console.log(miArbol.size());
console.log(miArbol.contains(5));
//console.log(miArbol.depthFirstForEach());


//preorder
// arbol.loQueSea() {
// //ejecutarla para mi
// //ejecutarla para mi izquierda
// //ejecutarla para mi derecha
// }
// //post-order
// arbol.loQueSea() {
// //ejecutarla para mi izquierda
// //ejecutarla para mi derecha
// //ejecutarla para mi

// en este caso habría que ver el orden de las lineas dependiendo del tipo de orden que se quierre

// BinarySearchTree.prototype.printValues = function () {
//   console.log(this.value);
//   if (this.left) {
//     this.left.printValues();
//   }
//   if (this.right) {
//     this.right.printValues();
//   }
// }


// No modifiquen nada debajo de esta linea
// --------------------------------
module.exports = {
  BinarySearchTree,
};
