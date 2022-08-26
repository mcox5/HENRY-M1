'use strict'
// No cambies los nombres de las funciones.
// elegir solo dos metodos 
//no hacer factorear para el codereview
function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
}


function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
let swap=true; //generalmente a estas variables para ver si seguir o no un determinado proceso le llamamos flag o centinelas
while (swap) {
  swap = false; //en el primer momento del recorrido aun no hago ningun cambio
  for (let i = 0; i<array.length -1; i++) {
    if (array[i]>array[i+1]) {
      let aux = array [i];
      array[i]=array[i+1];
      array[i+1]=aux;
      swap=true; ///aca le avisamos que SI hubo un cambio, por lo que cambiamos el swap a true para seguir en el while
    }
  }
}
return array;
}

console.log(bubbleSort([10,3,2]));

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i=1; i<array.length; i++){
    let j = i-1;
    let aux=array[i];
    // una de las condiciones para ir hacia atras es que j >=0
    //otra condicion es que el numero que está atras sea mayor a array [i], el cual lo almacenamos en aux!
    while (j>=0 && array[j]>aux) {
      array[j+1]=array[j];
      j--
      //me falto una linea aca
    }
    
  }
}

console.log(insertionSort([10,3,2]));

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
