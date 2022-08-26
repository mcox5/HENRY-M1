'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length<=1) return array //este es el caso de corte de la recursion
  let pivot = array[0];
  let left = [];
  let right = [];
  let equal = [];
  for (let i = 0; i<array.length;i++) {
    if (array[i]<pivot) left.push (array[i]);
    if (array[i]>pivot) right.push(array[i]);
    else equal.push(array[i])
  }
  return quickSort(left.concat(equal).concat(quickSort(right)));
}


console.log(quickSort([2,3,1]));

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
