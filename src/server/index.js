const express = require('express');
const os = require('os');

//routes
const authRoute = require('./routes/auth');
const campaignsRoute = require('./routes/campaigns');
const detailsRoute = require('./routes/details');

const app = express();

//---------------------middlewares-------------------

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use

//---------------------routes------------------------
app.use('/api/auth', authRoute);
app.use('/api/campaigns', campaignsRoute);
app.use('/api/details', detailsRoute);
app.use(express.static('dist'));


app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
