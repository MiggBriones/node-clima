const axios = require('axios');

const getLugarLatLng = async ( dir ) => {

    const encodeUrl = encodeURI( dir );

    // Se crea instancia
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUrl }`,
        headers: {'x-rapidapi-key': '2eae629615mshee66533e685bf95p11d226jsn0bddb51aa149'}
      });
    
    const res = await instance.get();

    if (res.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = res.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}