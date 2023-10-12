// Fetch api

const api_key = 'r3fd9WzRbg6dA5g0GuUGP6eIPUVTmgFC';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);
console.log( peticion);


// peticion.then((resp)=>{
//     resp.json().then((data)=>{
//         console.log(data);
//     })
// })
// .catch(console.warn);


//mas resumido , pero a esto se le llama promesas en cadena

peticion
        .then((resp)=> resp.json())
        .then(({data})=>{
            // console.log(data.images.original.url);
            const {url} = data.images.original;
            // console.log(url);
            const img = document.createElement('img');
            img.src = url;
            document.body.append(img);
        })
        .catch(console.warn);