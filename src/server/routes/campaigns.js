const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req);
    res.send("Here comes campaigns");
})

module.exports = router;

