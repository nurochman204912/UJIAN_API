var mongoose = require('mongoose')

var MatkulSchema = mongoose.Schema({
    dosenMatkul: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'dosens'
    },
    mahasiswaMatkul: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'mahasiswas'
    },
    sksMatkul: {
        type: String,
        required: true
    }
},
{
    timestamps: true
})

var Matkul = module.exports = mongoose.model('Matkuls', MatkulSchema)