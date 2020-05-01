const axios = require('axios');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


const encodeUrl = encodeURI( argv.direccion );
console.log(encodeUrl);


// Se crea instancia
const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUrl }`,
    headers: {'x-rapidapi-key': '2eae629615mshee66533e685bf95p11d226jsn0bddb51aa149'}
  });

  instance.get()
  .then( res => {
    console.log(res.data.Results[0]);
  })
  .catch( err => {
    console.log('ERORR!!!', err );
  });