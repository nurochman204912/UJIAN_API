const Matkul = require('../models/matkul')
const Mahasiswa = require('../models/mahasiswa')
const showDataMatkul = async(idDosen) => {
    const data = await Matkul.find({ dosenMatkul : idDosen}).populate('mahasiswaMatkul').lean()
    data.forEach(row => {
        row.subTotal = Number.parseInt(row.mahasiswaMatkul.noTelp) * row.sksMatkul
    })
    return data
}
exports.home = (req,res) => {
    res.send("Selamat Datang Di Sekolah kita")
}

exports.showMatkul = async (req,res) => {
    const idDosen = req.params.id
    const data = await showDataMatkul(idDosen)
    res.send(JSON.stringify({ "status" : 200, "error" : null, "response" : data}))
}

exports.editMatkul = async (req,res) =>{
    const dosenMatkul = req.params.id
    const mahasiswaMatkul = req.body.mahasiswaMatkul
    const sks = Number.parseInt(req.body.sksMatkul)
    if(sks>0){
        const dataMatkul = await Matkul.findOneAndUpdate({ dosenMatkul : dosenMatkul, mahasiswaMatkul : mahasiswaMatkul},
            {sksMatkul : sks})
    }else  if(sks <= 0){
        const deleteMatkul = await Matkul.findOneAndDelete({ dosenMatkul : dosenMatkul, mahasiswaMatkul : mahasiswaMatkul})
    }
    const data = await showDataMatkul(userMatkul)
    res.send(JSON.stringify({ "status" : 200, "error" : null, "response" : data}))
}

exports.deleteMatkul = async (req, res) =>{
    const dosenMatkul = req.params.id
    const mahasiswaMatkul = req.body.mahasiswaMatkul
    const deleteMatkul = await Matkul.findOneAndDelete({ dosenMatkul : dosenMatkul, mahasiswaMatkul : mahasiswaMatkul})
    const data = await showDataMatkul(dosenMatkul)
    res.send(JSON.stringify({ "status" : 200, "error" : null, "response" : data}))
}

exports.removeMatkul = async (req,res) => {
    const dosenMatkul = req.params.id
    const hapusMatkul = await Cart.deleteMany({dosenMatkul : dosenMatkul})
    res.send(JSON.stringify({ "status" : 200, "error" : null, "response" : "Matkul Deleted"}))
}

exports.addToMatkul = async (req,res) => {
    const dosenMatkul = req.params.id
    const mahasiswaMatkul = req.body.mahasiswaMatkul
    const sks = Number.parseInt(req.body.sksMatkul)

exports.tambahMatkul = async (req, res) => {
        const mahasiswas = new Mahasiswa(req.body)
        const status = await mahasiswas.save()
        res.send(JSON.stringify({ "status" : 200, "error" : null, "response" : status}))
    }
    
    const dataMatkul = await Matkul.count({dosenMatkul : dosenMatkul, mahasiswaMatkul : mahasiswaMatkul})
    if(dataMatkul == 0){
        const data = {
            mahasiswaMatkul : mahasiswaMatkul,
            sksMatkul : sks,
            dosenMatkul : dosenMatkul
        }
        console.log(data)
        const matkuls = new Matkul(data)
        const saveMatkul = await matkuls.save()
        res.send(JSON.stringify({ "status" : 200, "error" : null, "response" : "Success add Mata kuliah"}))
    }else{
        const dataMatkul = await Matkul.find({ dosenMatkul : dosenMatkul, mahasiswaMatkul : mahasiswaMatkul }).lean()
        dataMatkul.forEach(async row => {
            const newSks = Number.parseInt(row.sksMatkul) + sks
            const updateMatkul = await Matkul.updateOne({_id : row._id}, { sksMatkul : newSks})
        })
        res.send(JSON.stringify({ "status" : 200, "error" : null, "response" : "Success add  Mata Kuliah"}))
    }
}