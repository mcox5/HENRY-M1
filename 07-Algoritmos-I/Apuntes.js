//Algoritmos de ordenamiento I (no tenemos que volver a crear la rueda)
//Buble Sort:
//arma burbujas entre pares y se pregunta si el valor donde esta parado es mayor que el que lo sigue, en caso de que SI se invierten las posiciones, luego me paro en el valor siguiente, armo una nueva burbuja y pregunto lo mismo.
// Esto trae muy poca complejidad en el problema ya que creamos la burbuja de menor tamaño que es comparar dos nummeros y iterar

//Insertion sort: Agarra cada uno de los elementos, lo saca y voy a ir tirandolo hacia atrás hasta que me encuentre con uno menor

//Selection Sort: recorre todo y si cruza uno menor lo va guardando hasta llegar al final del recorrido

//algoritmos de ordenamiento II (ahora vamos a ver los metodos recursivos, los de antes eran iterativos)

//quick sort: 
/* 
Elegir un elemento de la lista de elementos a ordenar, al que llamaremos pivote.
Mover los demás elementos de la lista a cada lado del pivote, de manera que a un lado queden todos los menores que él, y al otro los mayores. Los elementos iguales al pivote pueden ser colocados tanto a su derecha como a su izquierda, dependiendo de la implementación deseada. En este momento, el pivote ocupa exactamente el lugar que le corresponderá en la lista ordenada.
La lista queda separada en dos sublistas, una formada por los elementos a la izquierda del pivote, y otra por los elementos a su derecha.
Repetir este proceso de forma recursiva para cada sublista mientras éstas contengan más de un elemento. Una vez terminado este proceso todos los elementos estarán ordenados.*/

//esto se puede aplicar a cualquier array, entonces aca es donde entra la recursion
// el caso de corte sería cuando el array llega a tener solo 1 valor


//mi funcion elige un pivot (primer elemento (es un array de un elemento)) y guarda dos arrays con valores mayores y menores, esta funcion se puede aplicar a arrays de length mayor o igual a 2. Cuando no se puede seguir, concatenamos y volvemos al nivel anterior


//merge sort

//1 paso: separo en dos partes iguales si me sobra uno lo mando para cualquiera de los dos (esto se repite hasta lo ultimo posible que es tener arrays de length = 1)
//2 paso: cuando va a unir los arrays va a recorrer los dos arrays comparando los dos arrays y va a pushear el que le de menor valor primero en un nuevo arrray vacido
//

