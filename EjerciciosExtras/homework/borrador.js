// var obj = {
//       a: {
//         a1: 10,
//         a2: 'Franco',
//         a3: {f: 'r', a: 'n', c: {o: true}}
//       },
//       b: 2,
//       c: [1, {a: 1}, 'Franco']
//     }


// var countProps = function(obj) {
//     // Tu código aca:
//     //sabemos que voy a necesitar un count que parte en cero
//     //recorremos con un for in
//     //al recorrer le pregunte si es un objeto, si es un objeto le pregunto cuantas propiedadades tiene ese objeto pasandole countProps pasandole ese objeto
//     //si no es un objeto el count no hace nada y sigo recorriendo
    
//     let count=0;
//     for (const prop in obj) { //aca estoy recorriendo las propiedades de un objeto
//         count++; 
//         if (typeof prop ==="object" && !Array.isArray(obj[prop])) {
//             count += countProps(obj[prop])
//         }
//     }
//     return count;
// };

// console.log(countProps(obj));

console.log(Number("10"))
console.log(Number("hola"))
console.log(Number([]))
console.log(Number({}))
console.log(Number(10))
console.log(!isNaN(10))
console.log(Number("10"))
console.log(Number("hola"))




