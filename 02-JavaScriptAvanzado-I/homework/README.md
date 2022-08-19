
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1; 
var a = 5;
var b = 10;
var c = function(a, b, c) { //cuando tenemos parámetros dentro de una función, en realidad estamos creando nuevas variables es ese contexto, es decir estamos en un nueva etapa de creation, con las tres variables a,b,c=undefined y la función también
  var x = 10;
  console.log(x); //10
  console.log(a); //8
  var f = function(a, b, c) {
    b = a;
    console.log(b); //8
    b = c; // 
    var x = 5;
  }
  f(a,b,c);
  console.log(b); // SEGUN YO ES 10 (NO ENTIENDO PQ NO PESCA LA LINEA 21) PERO ES 9 EXPLICACION: en este caso la funcion f si tenemos un valor para b, por ende NO vamos a modificar el valor de b del contexto de la funcion c, es decir está fuera de su scope
}
c(8,9,10);
console.log(b); //10
console.log(x); //1
```

```javascript
console.log(bar); //undefinded
console.log(baz); //error
foo(); //"Hola!" XX duda: por que no imprime nada??
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) { //recordar que ni el if, for ni while NO se crean nuevos contextos de ejecución!!!
    var instructor = "Franco";
}
console.log(instructor); //"Franco"
```

```javascript
var instructor = "Tony";
console.log(instructor); //"Tony"
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); //Franco
   }
})();
console.log(instructor); //"Tony" //OJO en este caso dentro de la funcion se crea un nuevo ambiente de ejecucion, por eso no pusa sobre la variable instructor, tambien tener en cuenta de que si no poníamos var instructur dentro de la función, ahí si arrojaría Franco
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash"; //el let no sale de su "scope", es decir la variable creada con let tiene alcance de llaves!!! es decir let pm= Reverse Flash solamente dentro de ese if!
    console.log(instructor); //The Flash
    console.log(pm); //Reverse Flash
}
console.log(instructor); //The Flash
console.log(pm); //Franco
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //9px en este caso concatena cuando hay un + entre num y string
"$" + 4 + 5 //$45 Recordar que se lee de izquierda a derecha
"4" - 2 //2
"4px" - 2//NoN En este caso el - no es para concatenar, pero el + SI lo es
7 / 0//Infinity
{}[0] // Undefined (NO LO ENTENDI)
parseInt("09") //9
5 && 2 //2 Se lee de izquierda a derecha
2 && 5 //5 
5 || 0 //5
0 || 5 //5
[3]+[3]-[10]//[23]
3>2>1 // false, RECORDAR QUE true es igual a 1 y false es igual a 0, por otro lado en este tipo de operaciones se lee de izq a derecha
[] == ![] //true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); //undefined
   console.log(foo()); //2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        //console.log(snack)
        return snack;
    }
    //console.log(snack) //undefined esto se debe a que en el creation phase sí declaramos una var snack, y aunque no hayamos entrado al if, igual reservo espacio en memoria, de manera que quedaría en undefined si es que no entramos al if
    return snack;
}

getFood(false);
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); //Aurelio De Rosa   Esto se debe a que ese this hace referencia al objeto desde donde lo estamos llamando!

var test = obj.prop.getFullname;

console.log(test());
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();
```
