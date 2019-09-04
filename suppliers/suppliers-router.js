const express = require('express');
const router = express.Router(); //middleware

//router can have middleware that applies only to the routere
router.use(express.json());

// //this router handles urls that begin with /prdoucts

//GET to /products/
router.get('/', (req, res) => {
    res.send('get to /suppliers');
});

//GET to /products/:id
router.get('/:id', (req, res) => {
    const { name } = 'Questionnable ';

    res.send(`How's it going, /${name}`);
});
module.exports = router; //CommonJS modules (node modules)
