const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const queries = require('../config/queries');

const mysqlSettings = require('../config/db.config.js');

const connection = mysql.createConnection({
  host: mysqlSettings.host,
  user: mysqlSettings.user,
  password: mysqlSettings.password,
  database: mysqlSettings.database
});



router.get('/', (req, res) => {

    connection.connect( err => {
      if(err){
        return err;
      }
    });

    connection.query(queries.campaigns, (err, result) => {
      if(err){
        return res.send(err);
      }else{
        return res.json({
          data:result
        })
      }
    });
});

module.exports = router;
