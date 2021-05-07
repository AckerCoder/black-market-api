const express = require("express");
const {Router} = require('express');
const Product = require('../db/models/product');

const router = Router();

router.use(express.json());

router.get('/', (req, res) => {
    res.send("hola");
});

router.get('/products', (req, res) => {
    console.log("RECIBIENDO",req.body);
});

router.post('/upload-product', (req, res) => {
    
    const data = {
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        author: req.body.author,
        type: req.body.type,
        mimeType: req.file.mimetype,
        fileName: req.file.filename
    }

    const product = new Product(data);

    product.save().then(() => {
        res.send(product)
    }).catch((error) => {
        res.status(400).send(status);
    })
});

module.exports = router;