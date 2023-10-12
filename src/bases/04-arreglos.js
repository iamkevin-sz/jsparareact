//arreglos

// const arreglo = new Array(100);
const arreglo = [1,2,3,4];

// arreglo.push(1);
let arreglo2 = [...arreglo,5];
//la funcion map espera un funcion, en la funcion al pasarle x lo que hace es iterar uno por uno, osea todo lo que hay en el arreglo lo multiplica por 5
//cuando un funcion esta dentro de un metodo se le llama callback
let arreglo3 = arreglo2.map(function(x){
    return x*5;
})

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3)

