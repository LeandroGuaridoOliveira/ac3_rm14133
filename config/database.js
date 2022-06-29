//importar o mongoose
const mongoose = require('mongoose')
//scripts de conexão
const conn = async()=>{
    const atlas = await mongoose.connect('[SUA DB]')
}

//exportar as infomações para acesso externo
module.exports = conn 