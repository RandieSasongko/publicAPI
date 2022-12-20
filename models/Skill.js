// (4) Buat Schema Skill
const mongoose = require('mongoose')

const SkillSchema = mongoose.Schema({
    // Buat Schema data
    fotoskill: {
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
    damage: {
        type: String,
        required: true
    },
    chakra: {
        type: String,
        required: true
    },
    procRate: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Skill', SkillSchema)