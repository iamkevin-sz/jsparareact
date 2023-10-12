// multiples importaciones y exportaciones

//cuando se hace una exportacion por defecto ya no es necesario poner las llaves 
import  heroes, {owners}  from './data/heroes2';

console.log(owners)
// mas simplificado aun, seria quitar las llaves y el return, ya se sobre entiende cuando solo hay un return no es necesario poner
const getHeroesById = (id)=> heroes.find((heroe) => heroe.id === id);

console.log(getHeroesById(2)); 

const getHeroesByOwner = (owner)=> heroes.filter((heroe) => heroe.owner === owner);

console.log(getHeroesByOwner('Marvel'));