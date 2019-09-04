const express = require('express');
const router = express.Router(); //middleware

//router can have middleware that applies only to the routere
router.use(express.json());

//this router handles urls that begin with /prdoucts

//GET to /products/
router.get('/', (req, res) => {
    res.send('get to /products');
});

//GET to /products/:id
router.get('/:id', (req, res) => {
    const { id } = req.params;

    res.send(`get to /products/${id}`);
});
module.exports = router; //CommonJS modules (node modules)
