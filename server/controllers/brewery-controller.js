const axios = require('axios');

let breweries = [];
let id = 7434;

module.exports = {
    getBreweries: (req, res) => {
        axios.get('https://api.openbrewerydb.org/breweries?page=11&per_page=50').then(response => {
            // console.log("res: ", response);
            breweries = response.data;
            res.status(200).json(breweries);
        })
    },
    // filterBreweries: (req, res) => {
    //     axios.get(`/api/breweries`).then(response => { 
    //         // console.log(response);
    //         res.status(200).json(breweries);
    //     })
    // },
    createBrewery: (req, res) => {
        const { name, brewery_type, city, state, website_url } = req.body;
        // let breweries = res.data;
        let newBrewery = {
            id,
            name,
            brewery_type,
            city,
            state,
            website_url
        }
        breweries.push(newBrewery);
        id++;
        return res.status(200).json(breweries);
    },
    deleteBrewery: (req, res) => {
        console.log(req.params.id);
        const deleteID = req.params.id;
        breweryIndex = breweries.findIndex(brewery => brewery.id == deleteID);
        breweries.splice(breweryIndex, 1);
        return res.status(200).json(breweries);
    }
}