// (5) Buat router tailed
const express = require('express')
const router = express.Router()
const Tailed = require('../models/Tailed')

// Create 
router.post('/', async (req, res) => {
    // tampung input tailed
    const tailedPost = new Tailed({
        fototailed: req.body.fototailed,
        nama: req.body.nama,
        skill: req.body.skill
    })

    try {
        // simpan data 
        const tailed = await tailedPost.save()
        // response
        res.json(tailed)
    } catch (error) {
        res.json({
            message: error
        })
    }
})

// Read
router.get('/', async (req, res) => {
    try {
        const tailed = await Tailed.find()
        res.json(tailed)
    } catch (error) {
        res.json({
            message: error
        })
    }
})

// Read Id
router.get('/', async (req, res) => {
    try {
        const tailed = await Tailed.find({
            _id: req.params.ninjaId
        })
        res.json(tailed)
    } catch (error) {
        res.json({
            message: error
        })
    }
})



// Update 
router.put('/:tailedId', async (req, res) => {
    // tampung input tailed
    const data = {
        fototailed: req.body.fototailed,
        nama: req.body.nama,
        skill: req.body.skill
    }

    try {
        // update data 
        const tailed = await Tailed.updateOne({
            _id: req.params.tailedId
        }, data)
        // response
        res.json(tailed)
    } catch (error) {
        res.json({
            message: error
        })
    }
})

// Delete 
router.delete('/:tailedId', async (req, res) => {
    try {
        // delete data 
        const tailed = await Tailed.deleteOne({
            _id: req.params.tailedId
        })
        // response
        res.json(tailed)
    } catch (error) {
        res.json({
            message: error
        })
    }
})

module.exports = router
