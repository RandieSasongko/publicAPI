// (5) Buat router skill
const express = require('express')
const router = express.Router()
const Skill = require('../models/Skill')

// Create 
router.post('/', async (req, res) => {
    // tampung input skill
    const skillPost = new Skill({
        preview: req.body.preview,
        fotoskill: req.body.fotoskill,
        nama: req.body.nama,
        grade: req.body.grade,
        chakra: req.body.chakra,
        procRate: req.body.procRate,
        damage: req.body.damage,
        effect: req.body.effect,
        launch: req.body.launch,
        restriction: req.body.restriction,
        round: req.body.round
    })

    try {
        // simpan data 
        const skill = await skillPost.save()
        // response
        res.json(skill)
    } catch (error) {
        res.json({
            message: error
        })
    }
})

// Read
router.get('/', async (req, res) => {
    try {
        const skill = await Skill.find()
        res.json(skill)
    } catch (error) {
        res.json({
            message: error
        })
    }
})

// Read Id
router.get('/', async (req, res) => {
    try {
        const skill = await Skill.find({
            _id: req.params.skillId
        })
        res.json(skill)
    } catch (error) {
        res.json({
            message: error
        })
    }
})

// Update 
router.put('/:skillId', async (req, res) => {
    // tampung input skill
    const data = {
        preview: req.body.preview,
        fotoskill: req.body.fotoskill,
        nama: req.body.nama,
        grade: req.body.grade,
        chakra: req.body.chakra,
        procRate: req.body.procRate,
        damage: req.body.damage,
        effect: req.body.effect,
        launch: req.body.launch,
        restriction: req.body.restriction,
        round: req.body.round
    }

    try {
        // update data 
        const skill = await Skill.updateOne({
            _id: req.params.skillId
        }, data)
        // response
        res.json(skill)
    } catch (error) {
        res.json({
            message: error
        })
    }
})

// Delete 
router.delete('/:skillId', async (req, res) => {
    try {
        // delete data 
        const skill = await Skill.deleteOne({
            _id: req.params.skillId
        })
        // response
        res.json(skill)
    } catch (error) {
        res.json({
            message: error
        })
    }
})

module.exports = router
