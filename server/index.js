const express    = require('express'),
      app        = express(),
      bodyParser = require('body-parser'),
      axios      = require('axios'),
      port       = 3001,
      breweryCtrl = require('./controllers/brewery-controller');

app.use(bodyParser.json());


app.get('/api/breweries', breweryCtrl.getBreweries);


// app.post('/api/messages', messages_controller.create);
// app.get('/api/messages', messages_controller.get);
// app.put('/api/messages/:id', messages_controller.update);
// app.delete('/api/messages/:id', messages_controller.delete);

app.listen(port, () => (console.log(`Server is listening on port ${port}`)));