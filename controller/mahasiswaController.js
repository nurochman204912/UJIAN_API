const Mahasiswa = require('../models/mahasiswa')

exports.home = (req,res) => {
    res.send("Selamat Datang Di Sekolah kita")
}

exports.listMahasiswa = async (req, res) => {
    let data = await Mahasiswa.find()
    res.send(JSON.stringify({ "status" : 200, "error" : null, "response" : data}))
}

exports.detailMahasiswa = async (req, res) => {
    const data = await Mahasiswa.findById(req.params.id)
    res.send(JSON.stringify({ "status" : 200, "error" : null, "response" : data}))
}

exports.tambahMahasiswa = async (req, res) => {
    const mahasiswas = new Mahasiswa(req.body)
    const status = await mahasiswas.save()
    res.send(JSON.stringify({ "status" : 200, "error" : null, "response" : status}))
}

exports.ubahMahasiswa = async (req, res) =>{
    const { id } = req.params
    const status = await Mahasiswa.update({_id : id}, req.body)
    res.send(JSON.stringify({ "status" : 200, "error" : null, "response" : status}))
}

exports.hapusMahasiswa = async (req, res) => {
    let { id } =req.params
    const status = await Mahasiswa.remove({_id : id})
    res.send(JSON.stringify({ "status" : 200, "error" : null, "response" : status}))
}