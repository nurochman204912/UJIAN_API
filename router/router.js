const mahasiswaController = require('../controller/mahasiswaController')
const dosenController = require('../controller/dosenController')
const matkulController = require('../controller/matkulController')

module.exports = app => {
    app.get('/', mahasiswaController.home)
    app.get('/', dosenController.home)
    app.get('/', matkulController.home)

    //API mahasiswa
    app.get('/mahasiswa', mahasiswaController.listMahasiswa)
    app.get('/mahasiswa/:id', mahasiswaController.detailMahasiswa)
    app.post('/mahasiswa/', mahasiswaController.tambahMahasiswa)
    app.put('./mahasiswa/:id', mahasiswaController.ubahMahasiswa)
    app.delete('./mahasiswa/:id', mahasiswaController.hapusMahasiswa)

    //API dosen
    app.get('/dosen', dosenController.listDosen)
    app.get('/dosen/:id', dosenController.detailDosen)
    app.post('/dosen/', dosenController.tambahDosen)
    app.put('./dosen/:id', dosenController.ubahDosen)
    app.delete('./dosen/:id', dosenController.hapusDosen)

    //API matkul
    app.post('/matkul/:id', matkulController.addToMatkul)
    app.get('/matkul/:id', matkulController.showMatkul)
    app.put('/matkul/:id', matkulController.editMatkul)
    app.delete('/matkul/:id', matkulController.deleteMatkul)
    app.get('/matkul/remove/:id', matkulController.removeMatkul)

}