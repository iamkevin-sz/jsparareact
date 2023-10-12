//OBJETOS LITERALES

const persona = {
    nombre : 'kevin',
    apellido : 'salazar',
    edad: 26,
    direccion: {
        ciudad: 'vaca guzman',
        direccion: 112,
    }
};

// console.table(persona)


const persona2 = {...persona};
persona2.nombre = 'kevincode';

console.log(persona)
console.log(persona2)


