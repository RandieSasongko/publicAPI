// (4) Buat Schema Tailed
const mongoose = require('mongoose')

const TailedSchema = mongoose.Schema({
    // Buat Schema data
    fototailed: {
        type: String,
        required: true
    },
    nama: {
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
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Tailed', TailedSchema)