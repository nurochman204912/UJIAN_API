var mongoose = require('mongoose')

var MahasiswaSchema = mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    nim: {
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

var Mahasiswa = module.exports = mongoose.model('mahasiswas', MahasiswaSchema)