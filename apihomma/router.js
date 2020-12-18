//Requirements
const express = require('express');
const router = express.Router();
const Resepti = require('./reseptischema');
const { validator } = require('./validator')

/**
 * Get all recipes from database based on the Resepti schema.
 * @param {string} req - GET request
 * @param {string} res - GET result
 */
router.get('/recipes', async (req, res) => {
    const reseptit = await Resepti.find();
    try {
        res.json(reseptit);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
});

/**
 * Add a new recipe to database.
 * @param validator - Validator for recipe information
 * @param {string} req - POST request
 * @param {string} res - POST result
 */
router.post('/recipes', validator, async (req, res) => {
    const resepti = new Resepti({
        id: req.body.id,
        name: req.body.name,
        content: req.body.content
    });
    try {
        const newResepti = await resepti.save();
        res.status(201).json(newResepti);
    } catch (e) {
        res.status(400).json({
            message: e.message
        })
    }
});

/**
 * Updates a recipe in database.
 * @param validator - Validator for recipe information
 * @param {string} req - PATCH request
 * @param {string} res - PATCH result
 */
router.patch('/recipes/:id', validator, async (req, res) => {
    try {
            const updated = await Resepti.findOneAndUpdate({id: req.params.id}, req.body, {new: true});
            res.json({ message: updated})
        } catch (e) {
            res.status(500).json({ message: e.message })
        }
});

/**
 * Deletes recipe from database.
 * @param {string} req - DELETE request
 * @param {string} res - DELETE result
 */
router.delete('/recipes/:id', async (req, res) => {
    try {
        await Resepti.deleteOne({id: req.params.id});
        res.json({ message: `Deleted recipe with id ${req.params.id}` })
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
});

module.exports = router;