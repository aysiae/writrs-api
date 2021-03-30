'use strict';

const express = require('express');
const router = express.Router();

// endpoint stuff
const OneLiners = require('../models/one-liners');
const Collection = require('../models/collection')
const oneLiners = new Collection(OneLiners);

router.get('/oneliner', handleGetAll);
router.get('/oneliner/:id', handleGetOne);
router.post('/oneliner', handleCreate);
router.put('/oneliner/:id', handleUpdate);
router.delete('/oneliner/:id', handleDelete);


async function handleGetAll(req, res) {
    let allRecords = await oneLiners.get();
    res.status(200).json(allRecords);
}

async function handleGetOne(req, res) {
    console.log('id', req.params.id);
    const id = req.params.id;
    let theRecord = await oneLiners.get(id);
    res.status(200).json(theRecord);
}

async function handleCreate(req,res) {
    let obj = req.body;
    let newRecord = await oneLiners.create(obj);
    res.status(201).json(newRecord);
}

async function handleUpdate(req,res) {
    const id = req.params.id;
    const obj = req.body;
    let updatedRecord = await oneLiners.update(id,obj);
    res.status(200).json(updatedRecord);
}

async function handleDelete(req, res) {
    let id = req.params.id;
    let deletedRecord = await oneLiners.delete(id);
    res.status(200).json(deletedRecord);
}

module.exports = router;