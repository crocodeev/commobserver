const express = require('express');
const os = require('os');

//routes
const campaignsRoute = require('./routes/campaigns');
const detailsRoute = require('./routes/details');

const app = express();

app.use('/api/campaigns', campaignsRoute);
app.use('/api/details', detailsRoute);
app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));


app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
