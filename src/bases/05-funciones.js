//Funciones


// function saludar(nombre){
//     return `hola, ${nombre}`
// }

// console.log(saludar)

// funcion como variable 

// const saludar = function(nombre){
//     return `hola, ${nombre}`
// } 

// console.log(saludar(3))

// funcion flecha 

const saludar3 = (nombre) =>{
    return `hola, ${nombre}`
} 
//funcion flecha simplificada, eso se hace cuando solo tenemos un return
const saludar4 = () => `hola mundo`
//funcion flecha simplificada, eso se hace cuando solo tenemos un return, esto pero es para un objeto, para objetos se pone un parentesis ya que al poner llaves js piensa que es el cuerpo de la funcion, entonces como un objeto igual se pone con llaves, entnoces antes se pone parentseis pra que js diga que es un obj

const getUser = () =>(
    {
        uid : 'abs323',
        usernmae: 'yosoy',
    }
)
const user = getUser();

const getUsuarioActivo = function (nombre){
    return {
        uid : 'abs323',
        usernmae: nombre,
    }
}
const usuarioActivo = getUsuarioActivo('kevin');

const getUsuarioActivo2 = (nombre) => (
    {
        uid : 'abs323',
        username: nombre,
    }
)

const UsuarioActivo2 = getUsuarioActivo2('kevin2');

console.log(saludar3(3))
console.log(saludar4(3))
console.log(user)
console.log(usuarioActivo)
console.log(UsuarioActivo2)
