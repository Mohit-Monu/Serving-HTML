const express=require('express');
const path=require('path');
const rootDir=require('../util/path');
const router=express.Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(rootDir,'views','shop.html'));
})
router.get("/contactus", (req, res) => {
    res.sendFile(path.join(rootDir,'views','contactus.html'));
})

module.exports=router;