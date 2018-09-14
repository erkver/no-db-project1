const axios = require('axios');


let index = 0;

module.exports = {
    getBreweries: (req, res) => {
        axios.get('https://api.openbrewerydb.org/breweries?page=11&per_page=50').then(response => {
            // console.log("res: ", response);
            res.status(200).json(response.data);
        })
    },
    filterBreweries: (req, res) => {
        axios.get('/api/breweries').then(response => {

        })
    }
}