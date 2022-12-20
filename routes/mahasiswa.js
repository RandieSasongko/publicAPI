// (5) Buat router Mahasiswa
const express = require('express')
const router = express.Router()
const Mahasiswa = require('../models/Mahasiswa')

// Create 
router.post('/', async (req, res) => {
    // tampung input mahasiswa 
    const mahasiswaPost = new Mahasiswa({
        fotohero: req.body.fotohero,
        nama: req.body.nama,
        grade : req.body.grade,
        point : req.body.point,
        chakra : req.body.chakra,
        skill : req.body.skill,
        summon : req.body.summon,
        tailed : req.body.tailed,
        quality : req.body.quality
    })

    try {
        // simpan data 
        const mahasiswa = await mahasiswaPost.save()
        // response
        res.json(mahasiswa)
    } catch (error) {
        res.json({
            message: error
        })
    }
})

// Read
router.get('/', async (req, res) => {
    try {
        const mahasiswa = await Mahasiswa.find()
        res.json(mahasiswa)
    } catch (error) {
        res.json({
            message: error
        })
    }
})


// Update 
router.put('/:mahasiswaId', async (req, res) => {
    // tampung input mahasiswa 
    const data = {
<<<<<<< HEAD
        fotohero: req.body.fotohero,
        nama: req.body.nama,
        grade : req.body.grade,
        point : req.body.point,
        chakra : req.body.chakra,
        skill : req.body.skill,
        summon : req.body.summon,
        tailed : req.body.tailed,
        quality : req.body.quality
=======
        nama: req.body.nama,
        alamat: req.body.alamat
>>>>>>> db463c9a48f6d90cf1f4c68bd3e04bd29d628372
    }

    try {
        // update data 
        const mahasiswa = await Mahasiswa.updateOne({
            _id: req.params.mahasiswaId
        }, data)
        // response
        res.json(mahasiswa)
    } catch (error) {
        res.json({
            message: error
        })
    }
})

// Delete 
router.delete('/:mahasiswaId', async (req, res) => {
    try {
        // delete data 
        const mahasiswa = await Mahasiswa.deleteOne({
            _id: req.params.mahasiswaId
        })
        // response
        res.json(mahasiswa)
    } catch (error) {
        res.json({
            message: error
        })
    }
})

module.exports = router