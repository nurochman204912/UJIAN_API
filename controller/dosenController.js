const Dosen = require('../models/dosen')

exports.home = (req,res) => {
    res.send("Selamat Datang Di Sekolah kita")
}

exports.listDosen = async (req, res) => {
    let data = await Dosen.find()
    res.send(JSON.stringify({ "status" : 200, "error" : null, "response" : data}))
}

exports.detailDosen = async (req, res) => {
    const data = await Dosen.findById(req.params.id)
    res.send(JSON.stringify({ "status" : 200, "error" : null, "response" : data}))
}

exports.tambahDosen = async (req, res) => {
    const dosens = new Dosen(req.body)
    const status = await dosens.save()
    res.send(JSON.stringify({ "status" : 200, "error" : null, "response" : status}))
}

exports.ubahDosen = async (req, res) =>{
    const { id } = req.params
    const status = await Dosen.update({_id : id}, req.body)
    res.send(JSON.stringify({ "status" : 200, "error" : null, "response" : status}))
}

exports.hapusDosen = async (req, res) => {
    let { id } =req.params
    const status = await Dosen.remove({_id : id})
    res.send(JSON.stringify({ "status" : 200, "error" : null, "response" : status}))
}