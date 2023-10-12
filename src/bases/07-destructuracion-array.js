//Desestructuracion de arreglos
// o asignacion desestructurante de arreglos

const personajes = ['goku', 'vegeta', 'gojan'];

const [,,p1] = personajes; 

console.log(p1);


const retornaArreglo = () => {
    return ['abc',15];
}

const [letras, numeros] = retornaArreglo();
console.log(letras,numeros);

const useState = (valor) => {
    return [valor, ()=>{console.log('hola mundo')}];
}

const [nombre, setNombre] = useState('goku');

console.log(nombre);
setNombre();

