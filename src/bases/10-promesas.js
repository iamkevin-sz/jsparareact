// Promesas

import { getHeroesById } from "./bases/08-import-y-export";
// las promesas son asincronas y primero se ejecuta lo sincrono
// las promesas se crear con un argumento que es un callback y se pasa dos argumentos que son resolve y reject, se puede poner cualqueir nombre, pero es una convencion que se llame asi
// el resolve es cuando la promesa funciona y el rejet cuando falla
// const promesa = new Promise( ( resolve, reject) => {
//   //el setimeout permite ejecutar una tarea en cierto tiempo y recibir un callback
//         setTimeout(()=>{
//             // console.log('2 segundos despues')
//             const heroe = getHeroesById(2);
//             // console.log(heroe);
//             //le mandamos un argumento que en este caso pusimos heroe, podemos poner cualquier otro nombre
//             resolve(heroe);
//         }, 2000)

// });

// promesa.then( (heroe) =>{
//     console.log('heroe' , heroe)
// })
// .catch( (err) => console.warn(err));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    //el setimeout permite ejecutar una tarea en cierto tiempo y recibir un callback
    setTimeout(() => {
      // console.log('2 segundos despues')
      const heroe = getHeroesById(id);
      if(heroe){
        resolve(heroe);
    }else{
        reject('No se pudo encontrar al heroe')
    }
    }, 2000);
  });
};

getHeroeByIdAsync(12)
.then((heroe) => console.log("heroe", heroe))
.catch((err) => console.warn(err));

// otra manera de hacer lo mismo, mas simplificado es que solo mande el then o catch y lo imprima, ya sea con lg o warn ya que al final siempre leen el primer argumento que se envia ya sea del reject o resolve

getHeroeByIdAsync(2)
.then(console.log)
.catch(console.warn);