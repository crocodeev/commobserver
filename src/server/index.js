const express = require('express');
const os = require('os');
const bodyParser = require('body-parser');
const config = require('./config/cfr');

//routes
const authRoute = require('./routes/auth');
const campaignsRoute = require('./routes/campaigns');
const detailsRoute = require('./routes/details');

const app = express();
const PORT = config.port;

//---------------------middlewares-------------------

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/*app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use*/

//---------------------routes------------------------
app.use('/api/auth', authRoute);
app.use('/api/campaigns', campaignsRoute);
app.use('/api/details', detailsRoute);
app.use(express.static('dist'));


app.listen( PORT || 8080, () => console.log(`Listening on port ${ PORT || 8080}!`));
