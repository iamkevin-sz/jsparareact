//Desestructuracion de objetos
// o asignacion desestructurante

const persona = {
    nombre : 'tony',
    edad : 45,
    clave: 'iroman',
}

//  const { nombre, edad, clave} = persona;

//  console.log(nombre);
//  console.log(edad);
//  console.log(clave);'

// se puede pasar e imprimir directo del objetos sus propiedades, como tambien agregar una nueva propiedad y ponerle ahi el nombre
// const retornaPersona = ({nombre, edad, rango = 'kevin'}) => {
//     // const { nombre, edad, clave} = usuario;
//     console.log(nombre, edad, rango)
// } 


// retornaPersona(persona);


const useContext = ({clave, edad, rango = 'kevin'}) => {
    // console.log(nombre, edad, rango) 

    return {
        nombreClave,
        anios,
    }

} 


const {nombreClave, anios} = useContext(persona);
console.log(nombreClave,anios);