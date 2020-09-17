const express = require('express');
const os = require('os');

//routes
const campaignsRoute = require('./routes/campaigns');

const app = express();

app.use('/api/campaigns', campaignsRoute);
app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));


app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
