var mongoose = require('mongoose')

var DosenSchema = mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    nip: {
        type: Number
    },
    noTelp: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    alamat: {
        type: String,
        required: true
    },
},
{
    timestamps: true
})

var Dosen = module.exports = mongoose.model('dosens', DosenSchema)