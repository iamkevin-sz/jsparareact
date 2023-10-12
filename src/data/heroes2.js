//export por defaul

// cuando se hace esta exportacion ya no lleva el nombre del arreglo que era heroes
// export default  [
//     {
//         id: 1,
//         name: 'Batman',
//         owner: 'DC'
//     },
//     {
//         id: 2,
//         name: 'Spiderman',
//         owner: 'Marvel'
//     },
//     {
//         id: 3,
//         name: 'Superman',
//         owner: 'DC'
//     },
//     {
//         id: 4,
//         name: 'Flash',
//         owner: 'DC'
//     },
//     {
//         id: 5,
//         name: 'Wolverine',
//         owner: 'Marvel'
//     },
// ];



// esa manera de exportar no es buena cuando se trabaja en equipo ya que no sabes como se llama el arreglo, entonces
// lo que se hace es poner al final el export defautl heroes y queda mejor
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];


export const owners = [ 'marvel' , 'dc', 'kevin']


export default heroes;