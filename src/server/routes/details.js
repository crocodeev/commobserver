const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const queries = require('../config/queries');

const mysqlSettings = require('../config/db.config.js');
const { database } = require('../config/db.config.js');
const { content } = require('../config/queries');

const connection = mysql.createConnection({
  host: mysqlSettings.host,
  user: mysqlSettings.user,
  password: mysqlSettings.password,
  database: mysqlSettings.database
});



router.get('/', (req, res) => {

    const campaign_id = req.query.id;

    let data = {}

    connection.connect( err => {
      if(err){
        return err;
      }
    });

    connection.query(queries.channels(campaign_id), (err, result) => {
      if(err){
        return res.send(err);
      }else{
        data.channels = result;

        connection.query(queries.content(campaign_id), (err, result) => {
          if(err){
            return res.send(err);
          }else{
            data.content = result;
            res.json(data);
          }
        });
      }
    });

});

module.exports = router;
