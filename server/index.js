const express    = require('express'),
      app        = express(),
      bodyParser = require('body-parser'),
      axios      = require('axios'),
      port       = 3001,
      breweryCtrl = require('./controllers/brewery-controller');

app.use(bodyParser.json());


app.get('/api/breweries', breweryCtrl.getBreweries);
app.get('/api/breweriesSearch', breweryCtrl.filterBreweries);
app.get('/api/breweriesState', breweryCtrl.findByState);
app.post('/api/breweries', breweryCtrl.createBrewery);
app.delete('/api/breweries/:id', breweryCtrl.deleteBrewery);
app.put('/api/breweries/:id', breweryCtrl.editBrewery);

app.listen(port, () => (console.log(`Server is listening on port ${port}`)));