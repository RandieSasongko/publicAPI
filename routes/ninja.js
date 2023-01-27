// (5) Buat router ninja
const express = require('express')
const router = express.Router()
const Ninja = require('../models/Ninja')

// Create 
router.post('/', async (req, res) => {
    // tampung input ninja
    const ninjaPost = new Ninja({
        fotohero: req.body.fotohero,
        fotodetail: req.body.fotodetail,
        background: req.body.background,
        nama: req.body.nama,
        grade: req.body.grade,
        point: req.body.point,
        chakra: req.body.chakra,
        skill: req.body.skill,
        summon: req.body.summon,
        tailed: req.body.tailed,
        quality: req.body.quality
    })

    try {
        // simpan data 
        const ninja = await ninjaPost.save()
        // response
        res.json(ninja)
    } catch (error) {
        res.json({
            message: error
        })
    }
})

// Read
// router.get('/', async (req, res) => {
//     try {
//         const ninja = await Ninja.find()
//         res.json(ninja)
//     } catch (error) {
//         res.json({
//             message: error
//         })
//     }
// })

// Read Id
router.get('/:ninjaId', async (req, res) => {
    try {
        const ninja = await Ninja.find()
        res.json(ninja)
    } catch (error) {
        res.json({
            message: error
        })
    }
})


// Update 
router.put('/:ninjaId', async (req, res) => {
    // tampung input ninja
    const data = {
        fotohero: req.body.fotohero,
        fotodetail: req.body.fotodetail,
        background: req.body.background,
        nama: req.body.nama,
        grade: req.body.grade,
        point: req.body.point,
        chakra: req.body.chakra,
        skill: req.body.skill,
        summon: req.body.summon,
        tailed: req.body.tailed,
        quality: req.body.quality
    }

    try {
        // update data 
        const ninja = await Ninja.updateOne({
            _id: req.params.ninjaId
        }, data)
        // response
        res.json(ninja)
    } catch (error) {
        res.json({
            message: error
        })
    }
})

// Delete 
router.delete('/:ninjaId', async (req, res) => {
    try {
        // delete data 
        const ninja = await Ninja.deleteOne({
            _id: req.params.ninjaId
        })
        // response
        res.json(ninja)
    } catch (error) {
        res.json({
            message: error
        })
    }
})

module.exports = router
