// import, export

// import {heroes} from './data/heroes'; 

import { heroes } from '../data/heroes';

// el find recibe una funcion como argumento que se le conoce como callback, el callback lo ejecutaremos como funcion flecha, el find va a valer cada uno de los elementos internamente y cada iteracion o vuelta tendremos un heroe
// en pocas palabras recibimos el id como argumento, ahora al hacer un return a heroes con el find, se crea un funcion o callback, y lo que hace es recorrer cada heroe o cada objeto
// al usar heroe en el find, es como hacer un foreach, y hacemos recorrer e itera por cada uno, lo mismo funciona find, de heroes a heroe, luego se poner heroe.id para comparar si es igual al id y asi traer 
// al objeto indicado
// const getHeroesById = (id)=>{
//     return heroes.find((heroe)=>{
//         if (heroe.id === id){
//             return true;
//         }else{
//             return false;
//         }
        
//     });
// }

//codigo simplificado
// aqui la pregunta sera porque no usa if o else, eso pasa porque cuando se usa esto === te devuelve true o false por lo que no es necesraio ya usar el if y el else
// tambien cuando se usa solo un return ya no es necesario poner llaves por lo que esta bien el codigo

// const getHeroesById = (id)=>{
//     return heroes.find((heroe)=> heroe.id === id);
// }

// mas simplificado aun, seria quitar las llaves y el return, ya se sobre entiende cuando solo hay un return no es necesario poner
export const getHeroesById = (id)=> heroes.find((heroe) => heroe.id === id);

// console.log(getHeroesById(2)); 

const getHeroesByOwner = (owner)=> heroes.filter((heroe) => heroe.owner === owner);

// console.log(getHeroesByOwner('Marvel'));