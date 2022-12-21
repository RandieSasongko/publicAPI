// (4) Buat Schema Ninja
const mongoose = require('mongoose')

const NinjaSchema = mongoose.Schema({
    // Buat Schema data
    fotohero: {
        type: String,
        required: true
    },
    fotodetail: {
        type: String,
        required: true
    },
    background: {
        type: String,
        required: true
    },
    nama: {
        type: String,
        required: true
    },
    grade: {
        type: String,
        required: true
    },
    point: {
        type: String,
        required: true
    },
    chakra: {
        type: String,
        required: true
    },
    quality: {
        type: String,
        required: true
    },
    skill: [
        skill1 = {
            type: String,
            required: true
        },
        skill2 = {
            type: String,
            required: true
        },
        skill3 = {
            type: String,
            required: true
        },
        skill4 = {
            type: String,
            required: true
        },
        skill5 = {
            type: String,
            required: true
        }
    ],
    summon: [
        summon1 = {
            type: String,
            required: true
        },
        summon2 = {
            type: String,
            required: true
        },
        summon3 = {
            type: String,
            required: true
        }
    ],
    tailed: [
        tailed1 = {
            type: String,
            required: true
        },
        tailed2 = {
            type: String,
            required: true
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Ninja', NinjaSchema)
