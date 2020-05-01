const axios = require('axios');

const getClima = async ( lat, lng  ) => {
    
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=5ae93a94f8d7509f6be4e9e767c64c63&unit=metr`)

    
    return res.data.main.temp;
}


module.exports = {
    getClima
}