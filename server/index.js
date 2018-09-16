const express    = require('express'),
      app        = express(),
      bodyParser = require('body-parser'),
      axios      = require('axios'),
      port       = 3001,
      breweryCtrl = require('./controllers/brewery-controller');

app.use(bodyParser.json());


app.get('/api/breweries', breweryCtrl.getBreweries);
// app.get(`/api/breweries?by_name=`, breweryCtrl.filterBreweries);
app.post('/api/breweries', breweryCtrl.createBrewery);
app.delete('/api/breweries/:id', breweryCtrl.deleteBrewery);

app.listen(port, () => (console.log(`Server is listening on port ${port}`)));