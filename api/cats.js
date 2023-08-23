const express = require('express');
const router = express.Router();

const { getAllCats, getCatById, updateCat, deleteCat } = require('../db');

// GET - /api/cats - get all cats
router.get('/', async (req, res, next) => {
    try {
        // write some code :)
    } catch (error) {
        next(error);
    }
});

// GET - /api/cats/:catId - get cat by id
router.get('/:catId', async (req, res, next) => {
    try {
        // write some code :)
    } catch (error) {
        next(error);
    }
});

// POST - /api/cats - create a new cat
router.post('/', async (req, res, next) => {
    try {
        // write some code :)
    } catch (error) {
        next(error);
    }
});

// PUT - /api/cats/:catId - update a cat
router.put('/:catId', async (req, res, next) => {
    try {
        // write some code :)
    } catch (error) {
        next(error);
    }
});

// DELETE - /api/cats/:catId - delete a cat
router.delete('/:catId', async (req, res, next) => {
    try {
        // write some code :)
    } catch (error) {
        next(error);
    }
});

module.exports = router;
