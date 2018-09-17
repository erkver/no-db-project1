const axios = require('axios');

let breweries = [];
let id = 7434;
let comment = "";

module.exports = {
    getBreweries: (req, res) => {
        axios.get('https://api.openbrewerydb.org/breweries?page=11&per_page=50').then(response => {
            // console.log("res: ", response);
            breweries = response.data;
            res.status(200).json(breweries);
        })
    },
    filterBreweries: (req, res) => {
        console.log(req.query.by_state);
        if(req.query.by_state){
        axios.get('https://api.openbrewerydb.org/breweries?by_state=texas&per_page=50').then(response => {
            breweries = response.data;
            response.status(200).json(breweries);
        })
        }
        res.status.json(breweries);
    },
    createBrewery: (req, res) => {
        const { name, brewery_type, city, state, website_url, comment } = req.body;
        let newBrewery = {
            id,
            name,
            brewery_type,
            city,
            state,
            website_url, 
            comment
        }
        breweries.push(newBrewery);
        id++;
        return res.status(200).json(breweries);
    },
    deleteBrewery: (req, res) => {
        // console.log(req.params.id);
        const deleteID = req.params.id;
        breweryIndex = breweries.findIndex(brewery => brewery.id == deleteID);
        breweries.splice(breweryIndex, 1);
        return res.status(200).json(breweries);
    },
    editBrewery: (req, res) => {
        // console.log(req.params.id, req.body.text);
        const { text } = req.body;
        const editID = req.params.id;
        const editIndex = breweries.findIndex(brewery => brewery.id == editID);
        let brewery = breweries[editIndex];
        breweries[editIndex] = {
            id: brewery.id,
            name: brewery.name,
            brewery_type: brewery.brewery_type,
            city: brewery.city,
            state: brewery.state,
            website_url: brewery.website_url, 
            comment: text || brewery.text
        }
        return res.status(200).json(breweries);
    }
}