const express = require('express');
const path = require('path');
const rootDir=require('../util/path');

const router = express.Router();

router.get("/add-product", (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','add-product.html'))

})
router.post("/product", (req, res, next) => {
    console.warn(req.body)
    res.redirect('/');
})
router.post("/success", (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','success.html'))

})
module.exports = router;